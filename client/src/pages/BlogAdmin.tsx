import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Plus, Edit2, Trash2, Eye, EyeOff, ArrowLeft, Save, X } from "lucide-react";
import type { BlogPost, InsertBlogPost } from "@shared/schema";
import { fadeUp } from '@/lib/animations';


const categories = ["Industry Insights", "Technical", "Company News", "Case Studies"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogAdmin() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<InsertBlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Provenarc Team",
    category: "Industry Insights",
    coverImageUrl: "",
    tags: [],
    published: false,
    publishedAt: null,
  });

  const [tagInput, setTagInput] = useState("");

  const { data: user } = useQuery<{ id: string; role: string } | null>({
    queryKey: ["/api/auth/me"],
  });

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog"],
    enabled: user?.role === "admin",
  });

  const createMutation = useMutation({
    mutationFn: async (data: Partial<InsertBlogPost>) => {
      const res = await apiRequest("POST", "/api/blog", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Post created successfully" });
      resetForm();
    },
    onError: (err: Error) => {
      toast({ title: "Failed to create post", description: err.message, variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<InsertBlogPost> }) => {
      const res = await apiRequest("PATCH", `/api/blog/${id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Post updated successfully" });
      resetForm();
    },
    onError: (err: Error) => {
      toast({ title: "Failed to update post", description: err.message, variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/blog/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Post deleted" });
      setDeleteConfirm(null);
    },
    onError: (err: Error) => {
      toast({ title: "Failed to delete post", description: err.message, variant: "destructive" });
    },
  });

  function resetForm() {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Provenarc Team",
      category: "Industry Insights",
      coverImageUrl: "",
      tags: [],
      published: false,
      publishedAt: null,
    });
    setTagInput("");
    setEditingPost(null);
    setIsCreating(false);
    setShowPreview(false);
  }

  function startEditing(post: BlogPost) {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      coverImageUrl: post.coverImageUrl || "",
      tags: post.tags || [],
      published: post.published,
      publishedAt: post.publishedAt,
    });
    setTagInput("");
    setIsCreating(true);
    setShowPreview(false);
  }

  function handleSubmit() {
    const data = {
      ...formData,
      publishedAt: formData.published ? (formData.publishedAt || new Date()) : null,
    };

    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data });
    } else {
      createMutation.mutate(data);
    }
  }

  function addTag() {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...(formData.tags || []), tagInput.trim()] });
      setTagInput("");
    }
  }

  function removeTag(tag: string) {
    setFormData({ ...formData, tags: formData.tags?.filter((t) => t !== tag) });
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1] flex items-center justify-center">
        <div className="text-center" data-testid="access-denied">
          <h1 className="font-serif text-3xl mb-4">Access Denied</h1>
          <p className="text-[#9a9188] mb-8">You must be logged in as an administrator to access this page.</p>
          <Button variant="outline" className="border-primary/30 text-primary" onClick={() => navigate("/broker/login")} data-testid="button-go-login">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" className="text-[#9a9188]" onClick={resetForm} data-testid="button-back-list">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Posts
            </Button>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-[#2e2a25] text-[#9a9188]"
                onClick={() => setShowPreview(!showPreview)}
                data-testid="button-toggle-preview"
              >
                {showPreview ? <Edit2 className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {showPreview ? "Edit" : "Preview"}
              </Button>
              <Button
                className="bg-primary text-primary-foreground"
                onClick={handleSubmit}
                disabled={createMutation.isPending || updateMutation.isPending}
                data-testid="button-save-post"
              >
                <Save className="h-4 w-4 mr-2" />
                {editingPost ? "Update Post" : "Create Post"}
              </Button>
            </div>
          </div>

          <h1 className="font-serif text-2xl mb-8" data-testid="text-form-heading">
            {editingPost ? "Edit Post" : "Create New Post"}
          </h1>

          {showPreview ? (
            <Card className="bg-[#1c1916]/80 border-[#2e2a25] p-8" data-testid="card-preview">
              <span className="text-primary tracking-[0.3em] uppercase text-xs">{formData.category}</span>
              <h2 className="font-serif text-3xl mt-3 mb-4">{formData.title || "Untitled"}</h2>
              <p className="text-[#9a9188] text-sm mb-6">{formData.excerpt}</p>
              <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-p:text-[#c4bdb5]">
                <div dangerouslySetInnerHTML={{ __html: formData.content?.replace(/\n/g, "<br/>") || "" }} />
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <div>
                <Label className="text-[#9a9188] text-sm mb-2 block">Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                      slug: editingPost ? formData.slug : slugify(e.target.value),
                    })
                  }
                  className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1]"
                  placeholder="Post title"
                  data-testid="input-title"
                />
              </div>

              <div>
                <Label className="text-[#9a9188] text-sm mb-2 block">Slug</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1]"
                  placeholder="post-url-slug"
                  data-testid="input-slug"
                />
              </div>

              <div>
                <Label className="text-[#9a9188] text-sm mb-2 block">Excerpt</Label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1] min-h-[80px]"
                  placeholder="Brief excerpt for the listing page"
                  data-testid="input-excerpt"
                />
              </div>

              <div>
                <Label className="text-[#9a9188] text-sm mb-2 block">Content (Markdown)</Label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1] min-h-[400px] font-mono text-sm"
                  placeholder="Write your post content in Markdown..."
                  data-testid="input-content"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-[#9a9188] text-sm mb-2 block">Author</Label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1]"
                    placeholder="Author name"
                    data-testid="input-author"
                  />
                </div>

                <div>
                  <Label className="text-[#9a9188] text-sm mb-2 block">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(val) => setFormData({ ...formData, category: val })}
                  >
                    <SelectTrigger className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1]" data-testid="select-category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-[#9a9188] text-sm mb-2 block">Cover Image URL</Label>
                <Input
                  value={formData.coverImageUrl || ""}
                  onChange={(e) => setFormData({ ...formData, coverImageUrl: e.target.value })}
                  className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1]"
                  placeholder="https://example.com/image.jpg"
                  data-testid="input-cover-image"
                />
              </div>

              <div>
                <Label className="text-[#9a9188] text-sm mb-2 block">Tags</Label>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {formData.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2e2a25] text-[#9a9188] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                      data-testid={`tag-${tag}`}
                    >
                      {tag}
                      <button onClick={() => removeTag(tag)} className="hover:text-red-400">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    className="bg-[#1c1916] border-[#2e2a25] text-[#faf6f1]"
                    placeholder="Add a tag"
                    data-testid="input-tag"
                  />
                  <Button variant="outline" className="border-[#2e2a25]" onClick={addTag} data-testid="button-add-tag">
                    Add
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#2e2a25]">
                <Switch
                  checked={formData.published || false}
                  onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                  data-testid="switch-published"
                />
                <Label className="text-[#9a9188]">
                  {formData.published ? "Published" : "Draft"}
                </Label>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#1f1b17] text-[#faf6f1]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <div>
            <h1 className="font-serif text-3xl" data-testid="text-admin-heading">Blog Administration</h1>
            <p className="text-[#9a9188] mt-2">Manage your Insights posts</p>
          </div>
          <Button
            className="bg-primary text-primary-foreground"
            onClick={() => {
              resetForm();
              setIsCreating(true);
            }}
            data-testid="button-new-post"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </motion.div>

        {isLoading ? (
          <div className="space-y-4" data-testid="loading-admin">
            {[0, 1, 2].map((i) => (
              <Card key={i} className="bg-[#1c1916]/80 border-[#2e2a25] p-6 animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="h-5 bg-[#2e2a25] rounded w-1/3" />
                    <div className="h-4 bg-[#2e2a25] rounded w-1/2" />
                  </div>
                  <div className="h-8 bg-[#2e2a25] rounded w-24" />
                </div>
              </Card>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i}
              >
                <Card className="bg-[#1c1916]/80 border-[#2e2a25] p-6" data-testid={`card-admin-post-${post.slug}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-lg truncate" data-testid={`text-admin-title-${post.slug}`}>
                          {post.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                            post.published
                              ? "bg-emerald-900/30 text-emerald-300"
                              : "bg-amber-900/30 text-amber-300"
                          }`}
                          data-testid={`badge-status-${post.slug}`}
                        >
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </div>
                      <p className="text-[#9a9188] text-sm truncate">{post.excerpt}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-[#6a6259]">
                        <span>{post.category}</span>
                        <span>{post.author}</span>
                        {post.publishedAt && (
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#9a9188] hover:text-primary"
                        onClick={() => startEditing(post)}
                        data-testid={`button-edit-${post.slug}`}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      {deleteConfirm === post.id ? (
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-400 hover:text-red-300"
                            onClick={() => deleteMutation.mutate(post.id)}
                            data-testid={`button-confirm-delete-${post.slug}`}
                          >
                            Confirm
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#9a9188]"
                            onClick={() => setDeleteConfirm(null)}
                            data-testid={`button-cancel-delete-${post.slug}`}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#9a9188] hover:text-red-400"
                          onClick={() => setDeleteConfirm(post.id)}
                          data-testid={`button-delete-${post.slug}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                      {post.published && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#9a9188] hover:text-primary"
                          onClick={() => navigate(`/insights/${post.slug}`)}
                          data-testid={`button-view-${post.slug}`}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
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
            data-testid="empty-state-admin"
          >
            <EyeOff className="h-16 w-16 text-[#2e2a25] mx-auto mb-6" />
            <h2 className="font-serif text-2xl mb-3">No Posts Yet</h2>
            <p className="text-[#9a9188] mb-8">Create your first insight to get started.</p>
            <Button
              className="bg-primary text-primary-foreground"
              onClick={() => {
                resetForm();
                setIsCreating(true);
              }}
              data-testid="button-create-first"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create First Post
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
