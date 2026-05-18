export const metadata = {
  title: "Catch-Up Bookkeeping Guide | TrueBooksHQ",
  description:
    "Learn how catch-up bookkeeping works, why businesses fall behind, and how to organize overdue financial records effectively.",
};

const steps = [
  {
    num: "1",
    title: "Gather all financial documents",
    body: "Collect bank statements, credit card statements, receipts, loan records, and payment processor reports for the missing periods.",
  },
  {
    num: "2",
    title: "Set up or clean up your accounting software",
    body: "Make sure your QuickBooks Online or accounting system has a properly structured chart of accounts before entering historical data.",
  },
  {
    num: "3",
    title: "Enter and categorize transactions",
    body: "Record and categorize all transactions month by month to rebuild accurate financial records.",
  },
  {
    num: "4",
    title: "Reconcile each month",
    body: "Compare records against bank statements to ensure balances match correctly and discrepancies are resolved.",
  },
  {
    num: "5",
    title: "Review receivables and payables",
    body: "Include unpaid invoices, outstanding bills, and open balances to complete the financial picture.",
  },
  {
    num: "6",
    title: "Generate financial reports",
    body: "Run Profit & Loss and Balance Sheet reports to review the final accuracy of your books.",
  },
];

const reasons = [
  "The business owner became too busy managing operations",
  "A previous bookkeeper stopped maintaining records",
  "The company relied on spreadsheets that became disorganized",
  "Software migrations created bookkeeping gaps",
  "Rapid business growth outpaced internal systems",
];

const timelines = [
  {
    range: "1–3 months behind",
    detail: "Typically manageable within a few bookkeeping sessions.",
  },
  {
    range: "3–6 months behind",
    detail: "Usually requires more extensive reconciliation work.",
  },
  {
    range: "6–12 months behind",
    detail: "Professional bookkeeping assistance is often recommended.",
  },
  {
    range: "1–2+ years behind",
    detail: "Can become a major cleanup project requiring significant reconstruction.",
  },
];

const faqs = [
  {
    q: "Can I do catch-up bookkeeping myself?",
    a: "Yes, for simpler businesses and smaller backlogs. Larger or more complex situations often benefit from professional help.",
  },
  {
    q: "What if records are missing?",
    a: "Banks and payment platforms can often provide historical statements and transaction data.",
  },
  {
    q: "Will catch-up bookkeeping affect taxes?",
    a: "Accurate books can improve tax preparation and may uncover deductions that were previously missed.",
  },
  {
    q: "How can I avoid falling behind again?",
    a: "Monthly bookkeeping routines and recurring reconciliations help prevent future backlogs.",
  },
];

function StepCard({ num, title, body }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 my-3 flex gap-4 items-start">
      <span className="font-playfair text-4xl font-semibold text-brand-600 leading-none min-w-[40px]">
        {num}
      </span>

      <div>
        <p className="text-base font-semibold text-gray-900 mb-1">
          {title}
        </p>

        <p className="text-[15px] font-light leading-relaxed text-gray-500 m-0">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function CatchUpBookkeepingGuide() {
  return (
    <article className="font-serifbody max-w-2xl mx-auto px-6 py-12 text-gray-900">

      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">
          Bookkeeping Basics
        </p>

        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Title */}
      <h1 className="font-playfair text-4xl md:text-5xl font-semibold leading-tight mb-4 text-gray-900">
        Catch-Up Bookkeeping: The Complete Guide to Getting Your Books Back on Track
      </h1>

      {/* Subtitle */}
      <p className="text-lg font-light text-gray-500 leading-relaxed mb-8 border-l-[3px] border-brand-600 pl-4">
        Behind on your bookkeeping? Here's how catch-up bookkeeping works and
        how businesses can organize overdue financial records efficiently.
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-200 mb-8">
        <span>8 min read</span>
        <span className="text-gray-200">·</span>
        <span>Bookkeeping · Small Business</span>
      </div>

      {/* Intro */}
      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Falling behind on bookkeeping is extremely common for small businesses.
        As operations grow, bookkeeping tasks are often delayed until records
        become difficult to manage.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Catch-up bookkeeping helps businesses reconstruct accurate financial
        records so they can prepare taxes, analyze performance, and move forward
        with organized books.
      </p>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        What is catch-up bookkeeping?
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Catch-up bookkeeping is the process of recording, categorizing, and
        reconciling financial transactions that were missed or neglected during
        previous months or years.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        The goal is to rebuild accurate records and create a clean financial
        foundation moving forward.
      </p>

      {/* Quote */}
      <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-lg px-5 py-4 my-6">
        <p className="text-base italic leading-[1.7] text-brand-800 m-0">
          Catch-up bookkeeping isn't just about fixing the past — it's about
          creating reliable financial clarity for the future.
        </p>
      </div>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Why businesses fall behind
      </h2>

      <ul className="m-0 p-0 list-none divide-y divide-gray-100">
        {reasons.map((r) => (
          <li
            key={r}
            className="flex items-start gap-3 py-3 text-[16px] font-light leading-[1.7]"
          >
            <span className="text-brand-600 mt-1 text-sm">●</span>
            {r}
          </li>
        ))}
      </ul>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        The catch-up bookkeeping process
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-4">
        Most catch-up bookkeeping projects follow a structured process to
        rebuild accurate records systematically.
      </p>

      {steps.map((s) => (
        <StepCard key={s.num} {...s} />
      ))}

      {/* Warning */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg px-5 py-4 my-6">
        <p className="text-base leading-[1.7] text-amber-900 m-0">
          <span className="font-semibold">Important:</span> Businesses with
          payroll, inventory, or multiple accounts often benefit from
          professional bookkeeping support during cleanup projects.
        </p>
      </div>

      <hr className="border-t border-gray-200 my-8" />

      {/* Timeline */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        How long does catch-up bookkeeping take?
      </h2>

      <ul className="m-0 p-0 list-none divide-y divide-gray-100">
        {timelines.map((t) => (
          <li
            key={t.range}
            className="flex items-start gap-3 py-3 text-[16px] font-light leading-[1.7]"
          >
            <span className="text-brand-600 mt-1 text-sm flex-shrink-0">
              ●
            </span>

            <span>
              <span className="font-semibold">{t.range}:</span> {t.detail}
            </span>
          </li>
        ))}
      </ul>

      <hr className="border-t border-gray-200 my-8" />

      {/* FAQ */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-2 text-gray-900">
        Common questions
      </h2>

      <div className="divide-y divide-gray-100">
        {faqs.map((f) => (
          <div key={f.q} className="py-4">
            <p className="text-base font-semibold text-gray-900 mb-1">
              {f.q}
            </p>

            <p className="text-[15px] font-light leading-relaxed text-gray-500 m-0">
              {f.a}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-200 my-8" />

      {/* Final Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Why accurate books matter
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Accurate financial records improve tax preparation, reporting, cash flow
        visibility, and business decision-making.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Maintaining organized books consistently is significantly easier than
        rebuilding records later through catch-up bookkeeping.
      </p>

      {/* CTA */}
      <div className="bg-brand-900 rounded-xl px-8 py-10 mt-10 text-center">
        <h3 className="font-playfair text-[22px] font-normal text-brand-50 mb-3">
          Need help catching up your books?
        </h3>

        <p className="text-[15px] font-light text-brand-400 mb-5">
          TrueBooksHQ provides cleanup and catch-up bookkeeping support for
          small businesses across the United States.
        </p>

        <a
          href="https://truebookshq.com/"
          className="inline-block bg-brand-600 hover:bg-brand-400 transition-colors duration-200 text-brand-50 text-sm font-semibold tracking-wide px-7 py-2.5 rounded-lg"
        >
          Contact Us →
        </a>
      </div>

    </article>
  );
}