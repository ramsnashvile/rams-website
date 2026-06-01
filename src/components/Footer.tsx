import Image from "next/image";
import Link from "next/link";
import { event } from "@/data/event";

export function Footer() {
  return (
    <footer className="border-t border-amber/50 bg-maroon-deep text-parchment">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-kannada text-lg text-saffron">
              {event.kannadaTitle} ಸಮಿತಿ
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Image
                src={event.logoSmUrl}
                alt=""
                width={40}
                height={40}
                className="rounded-full border border-saffron/40"
              />
              <h3 className="font-display text-xl font-bold">{event.orgShort}</h3>
            </div>
            <p className="mt-3 max-w-md text-sm text-parchment/85">
              {event.orgName} — a devotee community celebrating the divine
              grace of Sri Guru Raghavendra Swami.
            </p>
            <p className="mt-2 text-sm text-parchment/75">{event.association}</p>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-saffron">Event</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/schedule" className="hover:underline">
                  Aaraadhane 2026 Schedule
                </Link>
              </li>
              <li>
                <Link href="/rsvp" className="hover:underline">
                  RSVP
                </Link>
              </li>
              <li>
                <a
                  href={event.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-saffron">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sevas" className="hover:underline">
                  Sevas
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:underline">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:underline">
                  Bring Food
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="hover:underline">
                  Sponsor / Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-saffron">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="hover:underline">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about/executive-committee" className="hover:underline">
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link href="/about/finance" className="hover:underline">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-saffron">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/shlokas" className="hover:underline">
                  Shlokas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-parchment/20 pt-6 text-center text-xs text-parchment/70 md:text-left">
          <p>
            {event.orgShort} ·{" "}
            <a
              href={`mailto:${event.emails.general}`}
              className="underline hover:text-white"
            >
              {event.emails.general}
            </a>
            {!event.is501c3 && (
              <>
                {" "}
                · Not yet 501(c)(3) — donations are not tax-deductible at this
                time
              </>
            )}
          </p>
          <p className="mt-2">{event.dedication}</p>
          <p className="mt-4">
            © {event.year} {event.orgShort} · {event.orgName}
            <span className="mx-2">·</span>
            Built with Next.js · Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
