import { notFound } from "next/navigation";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { SegmentDetail } from "@/components/segments/detail";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { segmentContents, getSegmentContent } from "@/lib/segment-content";

interface SegmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(segmentContents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SegmentPageProps) {
  const { slug } = await params;
  const content = getSegmentContent(slug);

  if (!content) {
    return {
      title: "Segment Not Found | ATOLL ESTATES",
    };
  }

  return {
    title: `${content.title} | ATOLL ESTATES`,
    description: content.overview,
  };
}

export default async function SegmentPage({ params }: SegmentPageProps) {
  const { slug } = await params;
  const content = getSegmentContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <LuxuryHeader />
      <main>
        <SegmentDetail content={content} />
        <RequestAccessCTA
          title={`Explore ${content.title}`}
          subtitle="Request private access to view available opportunities in this segment."
        />
      </main>
      <SiteFooter />
    </>
  );
}
