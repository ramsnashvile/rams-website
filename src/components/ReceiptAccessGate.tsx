"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

const SESSION_KEY = "rams-receipt-access-v1";

type ReceiptAccessGateProps = {
  children: ReactNode;
};

function configuredAccessCode(): string {
  return (process.env.NEXT_PUBLIC_RECEIPT_ACCESS_CODE ?? "").trim();
}

export function ReceiptAccessGate({ children }: ReceiptAccessGateProps) {
  const accessCode = configuredAccessCode();
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessCode) {
      setReady(true);
      return;
    }
    try {
      setUnlocked(sessionStorage.getItem(SESSION_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
    setReady(true);
  }, [accessCode]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (code.trim() !== accessCode) {
      setError("Incorrect access code.");
      return;
    }
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Still unlock for this page load if sessionStorage is unavailable.
    }
    setUnlocked(true);
  }

  if (!ready) {
    return (
      <div className="card max-w-md text-sm text-brown/80">Checking access…</div>
    );
  }

  if (!accessCode) {
    return (
      <div className="card max-w-lg space-y-3">
        <h2 className="text-xl font-bold text-maroon-deep">Unavailable</h2>
        <p className="text-sm text-brown/85">
          The receipt tool is disabled until an access code is configured.
          Set{" "}
          <code className="rounded bg-amber/30 px-1">
            NEXT_PUBLIC_RECEIPT_ACCESS_CODE
          </code>{" "}
          in <code className="rounded bg-amber/30 px-1">.env.local</code> (local)
          or your Cloudflare Pages environment variables (production), then
          rebuild.
        </p>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <form onSubmit={handleSubmit} className="card max-w-md space-y-4">
        <h2 className="text-xl font-bold text-maroon-deep">Treasurer access</h2>
        <p className="text-sm text-brown/85">
          This page is private. Enter the shared access code to continue.
        </p>
        <label className="block text-sm font-semibold text-maroon-deep">
          Access code
          <input
            type="password"
            autoComplete="current-password"
            className="mt-1 w-full rounded-lg border border-amber/60 bg-white px-3 py-2 text-sm text-brown outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </label>
        {error && (
          <p className="text-sm font-semibold text-red-800" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="btn-primary">
          Unlock
        </button>
      </form>
    );
  }

  return <>{children}</>;
}
