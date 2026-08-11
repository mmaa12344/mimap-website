export const metadata = {
  title: "Job Costing for Contractors in QuickBooks | TrueBooksHQ",
  description:
    "Learn how job costing works in QuickBooks and why it's essential for contractors to track profitability on every project, control costs, and price jobs correctly.",
};

const components = [
  {
    icon: "🧱",
    name: "Materials",
    desc: "Lumber, concrete, fixtures, and every item purchased for a specific job.",
  },
  {
    icon: "👷",
    name: "Labor",
    desc: "Hours worked by your crew and subcontractors, allocated to the correct project.",
  },
  {
    icon: "🚚",
    name: "Equipment & subs",
    desc: "Rental costs, equipment use, and subcontractor invoices tied to the job.",
  },
  {
    icon: "📋",
    name: "Overhead allocation",
    desc: "A fair share of insurance, office costs, and admin time spread across jobs.",
  },
  {
    icon: "💵",
    name: "Change orders",
    desc: "Extra costs and revenue from scope changes, tracked separately from the original bid.",
  },
  {
    icon: "📈",
    name: "Job profitability",
    desc: "Revenue minus total job costs — the number that tells you if a project was worth it.",
  },
];

export default function JobCostingContractorsArticle() {
  return (
    <article className="font-serifbody max-w-2xl mx-auto px-6 py-12 text-gray-900">

      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">
          Contractor Bookkeeping
        </p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Title */}
      <h1 className="font-playfair text-4xl md:text-5xl font-semibold leading-tight mb-4 text-gray-900">
        Job Costing for Contractors in QuickBooks
      </h1>

      {/* Subtitle */}
      <p className="text-lg font-light text-gray-500 leading-relaxed mb-8 border-l-[3px] border-brand-600 pl-4">
        Two projects can bring in the same revenue and still have completely
        different profit margins. Job costing is how you find out which jobs
        actually make you money — before it's too late to fix it.
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-200 mb-8">
        <span>6 min read</span>
        <span className="text-gray-200">·</span>
        <span>Contractors & Construction</span>
      </div>

      {/* Intro */}
      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Most contractors know their total revenue for the month. Far fewer
        know whether the kitchen remodel in March actually turned a profit
        once every material receipt, labor hour, and subcontractor invoice
        is counted. That gap is exactly what job costing closes.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Job costing means tracking every cost — and every dollar of revenue —
        against the specific project it belongs to, instead of lumping
        everything into one general ledger. Done right in QuickBooks, it
        turns your books into a tool for pricing future jobs, not just a
        record for tax season.
      </p>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        What goes into job costing
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        To get an accurate picture of a project's profitability, every cost
        category needs to be tagged to that job — not just recorded in
        general expense accounts.
      </p>

      {/* Components Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
        {components.map((item) => (
          <div
            key={item.name}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >
            <div className="text-2xl mb-2">{item.icon}</div>

            <p className="text-sm font-semibold text-gray-900 mb-1">
              {item.name}
            </p>

            <p className="text-xs font-light text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        How job costing works in QuickBooks Online
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        QuickBooks Online supports job costing through <strong>Projects</strong>
        (or sub-customers, depending on your plan). Every job is set up as its
        own project, and every transaction — bills, expenses, timesheets,
        invoices — gets linked to it.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-[17px] font-light leading-[1.8] mb-6">
        <li>Each job is created as a Project or a sub-customer under the client.</li>
        <li>Every bill, expense, and purchase is tagged to that project as it's entered.</li>
        <li>Billable time and materials are marked so they can be invoiced back to the client.</li>
        <li>QuickBooks generates a Profitability report showing income, costs, and margin per job.</li>
      </ul>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        The result is a single report that shows exactly where a job stands —
        not weeks later during reconciliation, but as the project is still
        underway.
      </p>

      {/* Quote */}
      <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-lg px-5 py-4 my-6">
        <p className="text-base italic leading-[1.7] text-brand-800 m-0">
          A job that looks profitable on the invoice can quietly lose money
          once labor overruns and change orders are factored in. Job costing
          is what surfaces that before you bid the next similar project.
        </p>
      </div>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Why it matters for contractors specifically
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Unlike many small businesses, contractors run several "mini-businesses"
        at once — one per active job — each with its own crew hours, material
        costs, and timeline. A single profit-and-loss statement for the whole
        company hides which jobs are actually carrying the business and which
        are draining it.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Job costing also makes future bids more accurate. Once you know your
        real cost per square foot or per crew-hour on past jobs, you can
        price new estimates with confidence instead of guessing.
      </p>

      <hr className="border-t border-gray-200 my-8" />

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Common job costing mistakes to avoid
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-[17px] font-light leading-[1.8] mb-6">
        <li>Recording expenses to a general "Materials" account instead of the specific job.</li>
        <li>Not tracking labor hours by project, only by pay period.</li>
        <li>Forgetting to log change orders separately from the original scope.</li>
        <li>Skipping overhead allocation, which overstates how profitable each job looks.</li>
        <li>Reviewing job profitability only after the project closes, instead of while it's active.</li>
      </ul>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Setting job costing up correctly from the start — and keeping it
        updated as the job progresses — is what turns QuickBooks from a
        record-keeping tool into a decision-making one.
      </p>

      {/* CTA */}
      <div className="bg-brand-900 rounded-xl px-8 py-10 mt-10 text-center">
        <h3 className="font-playfair text-[22px] font-normal text-brand-50 mb-3">
          Not sure if your jobs are actually profitable?
        </h3>

        <p className="text-[15px] font-light text-brand-400 mb-5">
          TrueBooksHQ sets up and manages job costing in QuickBooks for
          contractors across the United States, so you always know where
          each project stands.
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
