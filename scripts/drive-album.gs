/**
 * RAMS Nashville photo albums from Google Drive.
 *
 * Setup:
 * 1. Open any Google Sheet (used only to host this script).
 * 2. Extensions -> Apps Script. Replace Code.gs with this file.
 * 3. Deploy -> New deployment -> Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the web app URL into src/data/albums.ts -> driveAlbums.scriptUrl
 *
 * Read with:
 * GET ?folderId=GOOGLE_DRIVE_FOLDER_ID
 *
 * Returns:
 * { ok: true, files: [{ id, name, mimeType }] }
 */

function doGet(e) {
  var params = (e && e.parameter) || {};
  var folderId = String(params.folderId || "").trim();
  if (!folderId) {
    return json({ ok: false, error: "Missing folderId", files: [] });
  }

  try {
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var rows = [];
    while (files.hasNext()) {
      var file = files.next();
      var mimeType = String(file.getMimeType() || "");
      if (mimeType.indexOf("image/") !== 0) continue;
      rows.push({
        id: file.getId(),
        name: file.getName(),
        mimeType: mimeType,
      });
    }
    return json({ ok: true, files: rows });
  } catch (err) {
    return json({ ok: false, error: String(err), files: [] });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
