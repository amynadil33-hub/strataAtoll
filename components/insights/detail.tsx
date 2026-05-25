import Link from "next/link"
import Image from "next/image"

import type { Insight } from "@/lib/insights"

type InsightDetailProps = {
  insight: Insight
  relatedInsights?: Insight[]
}

export function InsightDetail({
  insight,
  relatedInsights = [],
}: InsightDetailProps) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/insights"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Back to Insights
        </Link>
      </div>

      <header className="mb-10">
        {insight.category && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {insight.category}
          </p>
        )}

        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {insight.title}
        </h1>

        {insight.excerpt && (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {insight.excerpt}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
          {insight.publishedAt && <span>{insight.publishedAt}</span>}
          {insight.readTime && <span>{insight.readTime}</span>}
        </div>
      </header>

      {insight.image && (
        <div className="mb-10 overflow-hidden rounded-3xl">
          <Image
            src={insight.image}
            alt={insight.title}
            width={1400}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-slate max-w-none">
        {insight.content ? (
          <div dangerouslySetInnerHTML={{ __html: insight.content }} />
        ) : (
          <p>{insight.excerpt}</p>
        )}
      </div>

      {relatedInsights.length > 0 && (
        <section className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="mb-6 text-2xl font-semibold text-slate-950">
            Related insights
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedInsights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-400"
              >
                {item.category && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.category}
                  </p>
                )}

                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>

                {item.excerpt && (
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}