import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Blog | Providence Anglican Church',
  description: 'Reflections, devotionals, and news from Providence Anglican Church.',
};

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-church-red/95 to-church-red/80" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-church-gold uppercase tracking-widest text-sm font-medium mb-4">
              Our Thoughts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Blog & Reflections
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Spiritual nourishment and updates from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts Column */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="group border-b border-gray-100 pb-12 last:border-0">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="bg-church-red/10 text-church-red px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-church-red transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center font-bold text-church-red hover:text-red-700 transition-colors"
                  >
                    Read Full Post
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-10">
                {/* Search box or other sidebar content can go here */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Subscribe</h3>
                  <p className="text-gray-600 mb-6">
                    Stay updated with our latest reflections and news.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-church-red focus:border-transparent outline-none transition-all"
                    />
                    <button className="w-full btn-gold py-3 justify-center">
                      Subscribe
                    </button>
                  </form>
                </div>

                <div className="bg-church-navy p-8 rounded-2xl text-white">
                  <h3 className="font-serif text-xl font-bold mb-4">Pastoral Support</h3>
                  <p className="text-white/80 mb-6">
                    If you'd like to talk or need prayer, our pastoral team is here for you.
                  </p>
                  <Link href="/contact" className="text-church-gold font-bold hover:underline">
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
