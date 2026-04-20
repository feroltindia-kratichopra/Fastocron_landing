import Link from "next/link";

const productLinks = [
  { label: "Overview", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "/Integrations" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Applications", href: "#applications" },
  { label: "Careers", href: "#" },
];

const resourceLinks = [
  // { label: "Blog & Articles", href: "#" },
  // { label: "Documentation", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "Status", href: "#" },
];

const socials = [
  { label: "X", href: "#" },
  { label: "In", href: "#" },
  { label: "YT", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-xs font-bold text-white">
                  FO
                </span>
                <p className="text-3xl font-semibold tracking-tight text-gray-900">
                  FastOcron
                </p>
              </div>
              <p className="mt-4 max-w-xs text-md leading-relaxed text-gray-600">
                AI analytics for modern teams. Connect any data source and get
                instant insights with complete data privacy.
              </p>
            </div>

            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Company" links={companyLinks} />

            <div>
              <h3 className="text-md font-semibold text-gray-500">Resources</h3>
              <ul className="mt-4 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-md font-medium text-gray-800 transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="text-md font-semibold text-gray-500">
                  Get in touch
                </p>
                <a
                  href="mailto:hello@fastocron.ai"
                  className="mt-3 block text-md font-medium text-gray-900 hover:underline"
                >
                  hello@fastocron.ai
                </a>
                <div className="mt-4 flex items-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[10px] font-bold text-gray-700 transition hover:border-gray-900 hover:text-black"
                      aria-label={social.label}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-md text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 FastOcron. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-md font-semibold text-gray-500">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-md font-medium text-gray-800 transition hover:text-black"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
