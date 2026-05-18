export const metadata = {
  title: "What Does a Bookkeeper Do? | TrueBooksHQ",
  description:
    "Learn what a bookkeeper does, how bookkeeping helps businesses, and why accurate financial records matter for small businesses.",
};

const services = [
  {
    icon: "🔄",
    name: "Transaction recording",
    desc: "Every sale, purchase, payment, and receipt is logged accurately and on time.",
  },
  {
    icon: "🏦",
    name: "Bank reconciliation",
    desc: "Matching your records against bank statements to catch discrepancies early.",
  },
  {
    icon: "📄",
    name: "Accounts payable & receivable",
    desc: "Tracking what you owe and what others owe you — so nothing slips through.",
  },
  {
    icon: "📊",
    name: "Financial reporting",
    desc: "Producing income statements, balance sheets, and cash flow reports.",
  },
  {
    icon: "👥",
    name: "Payroll support",
    desc: "Ensuring employees are paid correctly and records are kept for compliance.",
  },
  {
    icon: "✅",
    name: "Tax preparation support",
    desc: "Keeping records clean and organized so tax season is never a scramble.",
  },
];

export default function BookkeeperBlogArticle() {
  return (
    <article className="font-serifbody max-w-2xl mx-auto px-6 py-12 text-gray-900">

      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-600">
          Financial Services
        </p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Title */}
      <h1 className="font-playfair text-4xl md:text-5xl font-semibold leading-tight mb-4 text-gray-900">
        What Does a Bookkeeper Do?
      </h1>

      {/* Subtitle */}
      <p className="text-lg font-light text-gray-500 leading-relaxed mb-8 border-l-[3px] border-brand-600 pl-4">
        If you're running a business, your financial records are the foundation
        of every smart decision you make. A bookkeeper is the person who keeps
        that foundation solid.
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-200 mb-8">
        <span>5 min read</span>
        <span className="text-gray-200">·</span>
        <span>Small Business Finances</span>
      </div>

      {/* Intro */}
      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Many business owners confuse bookkeeping with accounting — or assume
        they can handle it themselves indefinitely. But as your business grows,
        so does the complexity of your financial records. Understanding what a
        bookkeeper actually does is the first step toward knowing whether you
        need one.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        The short answer? A bookkeeper records, organizes, and maintains your
        company's financial transactions on a day-to-day basis. But the full
        picture is much more valuable than that.
      </p>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        The core responsibilities
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        A bookkeeper's job is to keep your financial data accurate, organized,
        and up to date. This involves a set of recurring tasks that — when done
        consistently — give you a clear view of where your business stands at
        any moment.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >
            <div className="text-2xl mb-2">{service.icon}</div>

            <p className="text-sm font-semibold text-gray-900 mb-1">
              {service.name}
            </p>

            <p className="text-xs font-light text-gray-500 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Bookkeeper vs. accountant — what's the difference?
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        This is one of the most common questions business owners ask. While
        both roles work with your financial data, they serve different purposes.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        A bookkeeper handles the day-to-day recording and organization of
        transactions. An accountant takes that organized data to perform
        higher-level analysis, prepare tax returns, and offer strategic financial
        advice.
      </p>

      {/* Quote */}
      <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-lg px-5 py-4 my-6">
        <p className="text-base italic leading-[1.7] text-brand-800 m-0">
          Good bookkeeping doesn't just keep you compliant — it gives you the
          clarity to make confident business decisions, spot problems early, and
          grow with intention.
        </p>
      </div>

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Signs your business needs a bookkeeper
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        You don't have to wait until your finances are a mess to bring in
        professional help. In fact, the best time to hire a bookkeeper is before
        things get complicated.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-[17px] font-light leading-[1.8] mb-6">
        <li>You're spending hours every week on bookkeeping tasks.</li>
        <li>Your bank statements don't match your records.</li>
        <li>Tax season feels stressful every year.</li>
        <li>You're growing and adding more complexity to your business.</li>
      </ul>

      <hr className="border-t border-gray-200 my-8" />

      {/* Section */}
      <h2 className="font-playfair text-2xl font-semibold mt-10 mb-3 text-gray-900">
        Why accurate books matter more than you think
      </h2>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Accurate bookkeeping improves decision-making, tax preparation, and
        financial visibility. Without clear records, businesses often make
        decisions blindly.
      </p>

      <p className="text-[17px] font-light leading-[1.8] mb-5">
        Clean financial records help business owners understand profitability,
        monitor cash flow, and plan future growth with confidence.
      </p>

      {/* CTA */}
      <div className="bg-brand-900 rounded-xl px-8 py-10 mt-10 text-center">
        <h3 className="font-playfair text-[22px] font-normal text-brand-50 mb-3">
          Ready to get your finances organized?
        </h3>

        <p className="text-[15px] font-light text-brand-400 mb-5">
          TrueBooksHQ provides bookkeeping and QuickBooks support for small
          businesses across the United States.
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