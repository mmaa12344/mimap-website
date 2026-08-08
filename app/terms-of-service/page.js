import Link from "next/link";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Head>
        <title>Terms of Service | True Books HQ</title>
        <meta name="description" content="Terms of Service for True Books HQ, a Mimap Inc. company." />
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
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Effective Date: August 7, 2026</p>

        <div className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the True
            Books HQ website and bookkeeping services (the &quot;Services&quot;), operated by
            Mimap Inc (&quot;Mimap Inc,&quot; &quot;True Books HQ,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By accessing our website or engaging our Services,
            you agree to these Terms.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Services</h2>
            <p className="mt-3">
              True Books HQ provides remote bookkeeping, reconciliation, financial reporting,
              payroll support, sales tax filing support, catch-up and cleanup bookkeeping, and
              related services to small businesses in the United States. The specific scope of
              services, deliverables, and pricing for your engagement will be described in your
              selected plan, a service agreement, or an invoice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Not Tax, Legal, or Financial Advice</h2>
            <p className="mt-3">
              Our bookkeeping services are administrative and informational in nature. They do not
              constitute tax, legal, financial, or investment advice. Financial reports and
              year-end packages we prepare are intended to support your CPA or tax professional and
              do not replace independent professional advice. You are responsible for reviewing
              your financial records and for decisions made based on them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Client Responsibilities</h2>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>
                Provide accurate, complete, and timely access to financial records, bank
                statements, receipts, and other documentation reasonably required to perform the
                Services.
              </li>
              <li>
                Maintain the accuracy of information entered into any accounting software you
                grant us access to.
              </li>
              <li>
                Review monthly reports, reconciliations, and other deliverables in a timely manner
                and notify us promptly of any discrepancies.
              </li>
              <li>
                Obtain independent advice from a licensed CPA, attorney, or tax professional for
                tax filing, legal, or strategic financial decisions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Fees &amp; Billing</h2>
            <p className="mt-3">
              Fees for the Services are based on the plan or scope of work you select, as described
              on our Pricing page or in your service agreement. Additional services (such as
              payroll, additional employees, sales tax filing, or catch-up and cleanup work) are
              billed as described at the time of engagement. Fees are billed in U.S. dollars and
              are due according to the payment terms provided to you. Late or failed payments may
              result in suspension of Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Third-Party Software &amp; Tools</h2>
            <p className="mt-3">
              We may use third-party accounting platforms (such as QuickBooks Online, QuickBooks
              Desktop, Xero, or Zoho Books) and other tools to deliver the Services. Your use of
              those platforms may be subject to the third party&apos;s own terms and privacy
              policies, which are outside of our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Confidentiality</h2>
            <p className="mt-3">
              We treat your business and financial information as confidential and will not
              disclose it to third parties except as necessary to provide the Services, as
              authorized by you, or as required by law. See our{" "}
              <Link href="/privacy-policy" className="text-blue-700 hover:underline">
                Privacy Policy
              </Link>{" "}
              for more information on how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">7. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Mimap Inc and True Books HQ will not be
              liable for any indirect, incidental, special, or consequential damages arising out of
              or related to your use of the Services. Our total liability for any claim arising
              from the Services will not exceed the amount you paid us for the Services giving rise
              to the claim in the three (3) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">8. Termination</h2>
            <p className="mt-3">
              Either party may terminate an engagement in accordance with the terms of the
              applicable service agreement or, absent a separate agreement, with reasonable written
              notice. Upon termination, you remain responsible for fees incurred for Services
              already performed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">9. Changes to These Terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Continued use of our website or Services
              after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">10. Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of the State of Florida, without regard to its
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">11. Contact Us</h2>
            <p className="mt-3">
              If you have questions about these Terms, please contact us:
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
