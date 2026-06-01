export type NavLink = {
  href: string;
  label: string;
};

export type NavItem =
  | ({ type?: "link" } & NavLink)
  | {
      label: string;
      children: NavLink[];
    };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Aaraadhane 2026",
    children: [
      { href: "/schedule", label: "Schedule" },
      { href: "/rsvp", label: "RSVP" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/food", label: "Food" },
    ],
  },
  { href: "/sevas", label: "Sevas" },
  { href: "/sponsor", label: "Sponsor" },
  {
    label: "About Us",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/about/mission", label: "Our Mission" },
      { href: "/about/executive-committee", label: "Executive Committee" },
      { href: "/about/finance", label: "Finance" },
    ],
  },
  {
    label: "Resources",
    children: [{ href: "/resources/shlokas", label: "Shlokas" }],
  },
  { href: "/contact", label: "Contact" },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isNavGroupActive(
  pathname: string,
  children: NavLink[]
): boolean {
  return children.some((c) => isNavActive(pathname, c.href));
}
