import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const categoryColors: Record<string, string> = {
  "Industry Insights": "bg-blue-900/30 text-blue-300",
  "Technical": "bg-emerald-900/30 text-emerald-300",
  "Company News": "bg-amber-900/30 text-amber-300",
  "Case Studies": "bg-purple-900/30 text-purple-300",
};

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1]">
      <SEO
        title="Insights & Research | Provenarc Group"
        description="Research articles and industry insights on LiDAR 3D scanning, document preservation, insurance documentation, fleet management, and asset risk mitigation."
      />
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="text-primary tracking-[0.3em] uppercase text-xs mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            data-testid="text-insights-label"
          >
            Insights
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-5xl mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            data-testid="text-insights-heading"
          >
            Perspectives on Aviation Documentation
          </motion.h1>
          <motion.p
            className="text-[#9a9188] text-lg max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            data-testid="text-insights-subheading"
          >
            Industry analysis, technical guidance, and thought leadership from the Provenarc team.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2" data-testid="loading-skeleton">
              {[0, 1, 2, 3].map((i) => (
                <Card key={i} className="bg-[#1c1916]/80 border-[#2e2a25] p-8 animate-pulse">
                  <div className="h-4 bg-[#2e2a25] rounded w-24 mb-4" />
                  <div className="h-6 bg-[#2e2a25] rounded w-3/4 mb-3" />
                  <div className="h-4 bg-[#2e2a25] rounded w-full mb-2" />
                  <div className="h-4 bg-[#2e2a25] rounded w-2/3" />
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i}
                  data-testid={`card-blog-post-${post.slug}`}
                >
                  <Link href={`/insights/${post.slug}`}>
                    <Card className="bg-[#1c1916]/80 border-[#2e2a25] p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer group h-full">
                      {post.coverImageUrl && (
                        <div className="mb-6 overflow-hidden rounded-lg">
                          <img
                            src={post.coverImageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            data-testid={`img-blog-cover-${post.slug}`}
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-[#2e2a25] text-[#9a9188]"}`} data-testid={`badge-category-${post.slug}`}>
                          {post.category}
                        </span>
                      </div>

                      <h2 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors" data-testid={`text-post-title-${post.slug}`}>
                        {post.title}
                      </h2>

                      <p className="text-[#9a9188] text-sm leading-relaxed mb-6" data-testid={`text-post-excerpt-${post.slug}`}>
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-[#6a6259]">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <User className="h-3 w-3" />
                            {post.author}
                          </span>
                          {post.publishedAt && (
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-24"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              data-testid="empty-state-blog"
            >
              <BookOpen className="h-16 w-16 text-[#2e2a25] mx-auto mb-6" />
              <h2 className="font-serif text-2xl mb-3">Coming Soon</h2>
              <p className="text-[#9a9188] max-w-md mx-auto">
                We're preparing our first insights on aviation documentation, 3D scanning technology,
                and industry best practices. Check back soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
