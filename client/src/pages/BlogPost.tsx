import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import type { BlogPost as BlogPostType } from "@shared/schema";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function BlogPost() {
  const [, params] = useRoute("/insights/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: ["/api/blog", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1]">
        <div className="max-w-3xl mx-auto px-6 py-24" data-testid="loading-post">
          <div className="animate-pulse space-y-6">
            <div className="h-4 bg-[#2e2a25] rounded w-32" />
            <div className="h-10 bg-[#2e2a25] rounded w-3/4" />
            <div className="h-4 bg-[#2e2a25] rounded w-48" />
            <div className="space-y-3 mt-12">
              <div className="h-4 bg-[#2e2a25] rounded w-full" />
              <div className="h-4 bg-[#2e2a25] rounded w-full" />
              <div className="h-4 bg-[#2e2a25] rounded w-5/6" />
              <div className="h-4 bg-[#2e2a25] rounded w-full" />
              <div className="h-4 bg-[#2e2a25] rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1]">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center" data-testid="error-post">
          <h1 className="font-serif text-3xl mb-4">Post Not Found</h1>
          <p className="text-[#9a9188] mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/insights">
            <Button variant="outline" className="border-primary/30 text-primary" data-testid="link-back-insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1]">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <Link href="/insights">
            <Button variant="ghost" className="text-[#9a9188] hover:text-primary mb-8 -ml-4" data-testid="link-back-insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Button>
          </Link>
        </motion.div>

        {post.coverImageUrl && (
          <motion.div
            className="mb-10 overflow-hidden rounded-xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            <img
              src={post.coverImageUrl}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
              data-testid="img-post-cover"
            />
          </motion.div>
        )}

        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
          <span className="text-primary tracking-[0.3em] uppercase text-xs" data-testid="text-post-category">
            {post.category}
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          data-testid="text-post-title"
        >
          {post.title}
        </motion.h1>

        <motion.div
          className="flex flex-wrap items-center gap-6 text-sm text-[#9a9188] mb-12 pb-8 border-b border-[#2e2a25]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          <span className="flex items-center gap-2" data-testid="text-post-author">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          {post.publishedAt && (
            <span className="flex items-center gap-2" data-testid="text-post-date">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          {post.tags && post.tags.length > 0 && (
            <span className="flex items-center gap-2" data-testid="text-post-tags">
              <Tag className="h-4 w-4" />
              {post.tags.join(", ")}
            </span>
          )}
        </motion.div>

        <motion.div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#faf6f1]
            prose-p:text-[#c4bdb5] prose-p:leading-relaxed
            prose-strong:text-[#faf6f1]
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-primary prose-blockquote:text-[#9a9188]
            prose-li:text-[#c4bdb5]
            prose-code:text-primary prose-code:bg-[#2e2a25] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-hr:border-[#2e2a25]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
          data-testid="content-post-body"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-[#2e2a25] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-[#9a9188] mb-6">
            Have questions about your aircraft documentation needs?
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-post-cta">
              Schedule a Discovery Session
            </Button>
          </Link>
          <p className="text-xs text-[#6a6259] mt-3">
            No commitment required. 30-minute confidential call.
          </p>
        </motion.div>
      </article>
    </div>
  );
}
