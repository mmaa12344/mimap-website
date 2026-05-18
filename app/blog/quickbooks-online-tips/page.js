export const metadata = {
  title: "QuickBooks Online Tips for Small Businesses | TrueBooksHQ",
  description:
    "Discover practical QuickBooks Online tips to save time, improve bookkeeping accuracy, and keep your business finances organized.",
};

const tips = [
  {
    num: "01",
    tag: "Time saver",
    title: "Connect your bank and credit card accounts",
    body: "This is the single biggest time-saver in QBO. Once your bank feeds are connected, transactions flow in automatically every day.",
  },
  {
    num: "02",
    tag: "Accuracy",
    title: "Use rules to auto-categorize recurring transactions",
    body: "Set up bank rules for recurring vendors like rent, subscriptions, and utilities to automate categorization.",
  },
  {
    num: "03",
    tag: "Cash flow",
    title: "Reconcile your accounts every month",
    body: "Monthly reconciliation helps catch discrepancies early and keeps your financial reports accurate year-round.",
  },
  {
    num: "04",
    tag: "Organization",
    title: "Use classes or locations to track revenue streams",
    body: "Class and location tracking can help you analyze profitability across services or business locations.",
  },
  {
    num: "05",
    tag: "Invoicing",
    title: "Turn on automatic invoice reminders",
    body: "Automatic reminders help reduce late payments and improve cash flow consistency.",
  },
  {
    num: "06",
    tag: "Tax prep",
    title: "Attach receipts directly to transactions",
    body: "Keeping receipts attached to transactions creates a clean audit trail and simplifies tax season.",
  },
  {
    num: "07",
    tag: "Insight",
    title: "Review your Profit & Loss report monthly",
    body: "Monthly P&L reviews help business owners monitor profitability and identify spending trends.",
  },
  {
    num: "08",
    tag: "Efficiency",
    title: "Use recurring transactions",
    body: "Recurring transactions save time and keep financial records consistent for fixed monthly entries.",
  },
];

const shortcuts = [
  { keys: "Ctrl + Alt + I", desc: "Create a new invoice" },
  { keys: "Ctrl + Alt + E", desc: "Create a new expense" },
  { keys: "Ctrl + Alt + C", desc: "Write a new check" },
  { keys: "Ctrl + Alt + R", desc: "Receive a payment" },
  { keys: "Ctrl + Alt + B", desc: "Create a bill" },
  { keys: "?", desc: "Open the shortcuts menu" },
];

function TipCard({ num, tag, title, body }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
      <span className="inline-block text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md bg-brand-50 text-brand-800 mb-3">
        {tag}
      </span>

      <div className="flex items-start gap-3 mb-2">
        <span className="font-playfair text-3xl font-semibold text-brand-600 leading-none min-w-[36px]">
          {num}
        </span>

        <p className="text-base font-semibold text-gray-900 mt-1">
          {title}
        </p>
      </div>

      <p className="text-[15px] font-light leading-relaxed text-gray-500 m-0">
        {body}
      </p>
    </div>
  );
}

export default function QuickBooksTipsBlogArticle() {
  return (
    <article className="font-serifbody max-w-2xl mx-auto px-6 py-12 text-gray-900">

      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">
          QuickBooks Online
        </p>

        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Title */}
      <h1 className="font-playfair text-4xl md:text-5xl font-semibold leading-tight mb-4 text-gray-900">
        QuickBooks Online Tips to Save Time and Keep Your Books Clean
      </h1>

      {/* Subtitle */}
      <p className="text-lg font-light text-gray-500 leading-relaxed mb-8 border-l-[3px] border-brand-600 pl-4">
        QuickBooks Online is one of the most powerful tools a small business can
        use — but most owners only scratch the surface.
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-200 mb-8">
        <span>7 min read</span>
        <span className="text-gray-200">·</span>
        <span>Small Business · QuickBooks</span>
      </div>

      {/* Intro */}
      <p className="text-[17px] font-light leading-[1.8] mb-5">
        QuickBooks Online is one of the most popular bookkeeping platforms for
        small businesses. Learning a few advanced features can dramatically
        improve efficiency and bookkeeping accuracy.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Whether you manage your books yourself or work with a bookkeeper,
        these QuickBooks Online tips can help streamline daily operations.
      </p>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-1 text-gray-900">
        The essential tips
      </h2>

      {tips.slice(0, 3).map((tip) => (
        <TipCard key={tip.num} {...tip} />
      ))}

      {/* Quote */}
      <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-lg px-5 py-4 my-6">
        <p className="text-base italic leading-[1.7] text-brand-800 m-0">
          Monthly reconciliations are one of the most important bookkeeping
          habits for maintaining clean financial records.
        </p>
      </div>

      {tips.slice(3).map((tip) => (
        <TipCard key={tip.num} {...tip} />
      ))}

      <hr className="border-t border-gray-200 my-8" />

      {/* Shortcuts */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Keyboard shortcuts worth memorizing
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        These QuickBooks Online shortcuts can speed up repetitive bookkeeping
        tasks significantly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4">
        {shortcuts.map((s) => (
          <div
            key={s.keys}
            className="bg-gray-50 rounded-lg px-4 py-3 flex flex-col gap-1"
          >
            <span className="font-mono text-sm font-semibold text-brand-600">
              {s.keys}
            </span>

            <span className="text-xs font-light text-gray-500">
              {s.desc}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-200 my-8" />

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        One thing most business owners skip
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        One of the most overlooked areas in QuickBooks Online is the Chart of
        Accounts. A properly structured chart of accounts improves reporting,
        tax organization, and financial clarity.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Many businesses continue using the default setup without adapting it to
        their industry or workflow. Customizing it can make financial reports
        significantly more useful.
      </p>

      {/* CTA */}
      <div className="bg-brand-900 rounded-xl px-8 py-10 mt-10 text-center">
        <h3 className="font-playfair text-[22px] font-normal text-brand-50 mb-3">
          Need help managing QuickBooks Online?
        </h3>

        <p className="text-[15px] font-light text-brand-400 mb-5">
          TrueBooksHQ provides QuickBooks setup, cleanup, and monthly
          bookkeeping support for small businesses.
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