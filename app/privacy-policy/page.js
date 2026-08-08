import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Head>
        <title>Privacy Policy | True Books HQ</title>
        <meta name="description" content="Privacy Policy for True Books HQ, a Mimap Inc. company." />
      </Head>

      {/* Simple header */}
      <header className="border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">
              T
            </div>
            <span className="font-bold text-lg tracking-tight">True Books HQ</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Effective Date: August 7, 2026</p>

        <div className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <p>
            True Books HQ (&quot;True Books HQ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
            operated by Mimap Inc. This Privacy Policy explains how we collect, use, disclose, and
            protect information when you visit our website, contact us, or use our bookkeeping
            services. By using our website or services, you agree to the practices described in
            this Policy.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>
                <span className="font-semibold">Contact information</span> you provide, such as
                your name, business email, phone number, and the details you submit through our
                contact or consultation forms.
              </li>
              <li>
                <span className="font-semibold">Business and financial information</span> you
                share with us in order for us to provide bookkeeping, payroll, and related
                services (for example, transaction records, bank and credit card statements,
                invoices, and financial reports).
              </li>
              <li>
                <span className="font-semibold">Communications</span> you send us by email, live
                chat, or through our contact form.
              </li>
              <li>
                <span className="font-semibold">Usage data</span> collected automatically when you
                visit our website, such as IP address, browser type, device information, pages
                visited, and referring URLs.
              </li>
              <li>
                <span className="font-semibold">Cookies and similar technologies</span> used to
                operate and improve our website and live chat widget.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Provide, maintain, and deliver our bookkeeping and related services</li>
              <li>Respond to inquiries, schedule consultations, and communicate with you</li>
              <li>Prepare financial reports, reconciliations, and year-end packages for your CPA</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal, accounting, and regulatory obligations</li>
              <li>Detect, prevent, and address fraud, security, or technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. How We Share Information</h2>
            <p className="mt-3">
              We do not sell your personal or business information. We may share information with:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>
                Service providers who support our operations, such as accounting software
                providers (e.g., QuickBooks, Xero, Zoho Books), payment processors, cloud storage
                providers, form and email delivery services, and our live chat provider.
              </li>
              <li>
                Your CPA, tax preparer, or other professional advisors, but only at your direction
                or with your consent.
              </li>
              <li>
                Government authorities or regulators when required by law, subpoena, or legal
                process.
              </li>
              <li>
                A successor entity in connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Data Security</h2>
            <p className="mt-3">
              We use commercially reasonable administrative, technical, and physical safeguards
              designed to protect your information, including secure cloud-based accounting
              systems. However, no method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Data Retention</h2>
            <p className="mt-3">
              We retain personal and financial information for as long as necessary to provide our
              services, comply with legal and accounting recordkeeping requirements, resolve
              disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Cookies &amp; Live Chat</h2>
            <p className="mt-3">
              Our website uses cookies and a live chat widget to improve functionality and support.
              You can control cookies through your browser settings. Disabling cookies may limit
              some features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">7. Your Rights &amp; Choices</h2>
            <p className="mt-3">
              Depending on your location, you may have rights to access, correct, or request
              deletion of your personal information, or to opt out of certain data uses. To
              exercise any of these rights, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">8. Children&apos;s Privacy</h2>
            <p className="mt-3">
              Our website and services are intended for businesses and individuals over the age of
              18. We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">9. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">10. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or how we handle your information,
              please contact us:
            </p>
            <p className="mt-3">
              Mimap Inc, doing business as True Books HQ
              <br />
              7901 4th St N # 24304, St. Petersburg, FL
              <br />
              <a href="mailto:info@truebookshq.com" className="text-blue-700 hover:underline">
                info@truebookshq.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-black text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm">
          <p>© 2026 True Books HQ, a Mimap Inc. company. All rights reserved.</p>
          <p className="mt-3 flex items-center justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
