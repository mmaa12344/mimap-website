import Link from "next/link"

const posts = [
  {
    slug: "what-does-a-bookkeeper-do",
    title: "What Does a Bookkeeper Do?",
    description:
      "Learn how bookkeeping helps small businesses stay organized and financially healthy.",
  },
  {
    slug: "quickbooks-online-tips",
    title: "QuickBooks Online Tips for Small Businesses",
    description:
      "Simple QuickBooks Online tips to improve bookkeeping and financial organization.",
  },
  {
    slug: "catch-up-bookkeeping-guide",
    title: "Catch-Up Bookkeeping Guide",
    description:
      "Behind on your books? Here's how catch-up bookkeeping works.",
  },
]

export const metadata = {
  title: "Bookkeeping Blog | TrueBooksHQ",
  description:
    "Bookkeeping, QuickBooks Online, and tax tips for small businesses across the United States.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Bookkeeping & Tax Blog
        </h1>

        <p className="text-gray-600 text-lg mb-16">
          QuickBooks, bookkeeping, and tax insights for small businesses.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {post.title}
              </h2>

              <p className="text-gray-600">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}