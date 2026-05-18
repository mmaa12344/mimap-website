const posts = {
  "what-does-a-bookkeeper-do": {
    title: "What Does a Bookkeeper Do?",
    content: `
A bookkeeper helps businesses organize financial records, categorize transactions,
reconcile bank accounts, and maintain accurate financial reports.

Professional bookkeeping helps small businesses understand cash flow,
prepare for tax season, and stay financially organized.

TrueBooksHQ provides remote bookkeeping and QuickBooks Online support
for businesses across the United States.
    `,
  },

  "quickbooks-online-tips": {
    title: "QuickBooks Online Tips for Small Businesses",
    content: `
QuickBooks Online can help small businesses simplify bookkeeping,
track expenses, and generate financial reports.

Some important QuickBooks tips include:

- Reconcile accounts monthly
- Categorize expenses correctly
- Review reports regularly
- Separate personal and business expenses

TrueBooksHQ specializes in QuickBooks Online bookkeeping services.
    `,
  },

  "catch-up-bookkeeping-guide": {
    title: "Catch-Up Bookkeeping Guide",
    content: `
Catch-up bookkeeping helps businesses organize overdue bookkeeping records.

This process usually includes:

- Bank reconciliations
- Expense categorization
- Financial cleanup
- Reporting corrections

TrueBooksHQ helps businesses across the United States catch up on bookkeeping and financial reporting.
    `,
  },
}

export async function generateMetadata({ params }) {
  const post = posts[params.slug]

  return {
    title: `${post.title} | TrueBooksHQ`,
    description: post.content.slice(0, 140),
  }
}

export default async function BlogPost({ params }) {
  const post = posts[params.slug]

  return (
    <main className="min-h-screen py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          {post.title}
        </h1>

        <article className="prose prose-lg max-w-none whitespace-pre-line text-gray-700">
          {post.content}
        </article>

      </div>
    </main>
  )
}