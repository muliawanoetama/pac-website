import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Navigation */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-church-red hover:text-red-700 font-bold mb-10 transition-colors"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-church max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('###')) {
                return <h3 key={index} className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">{paragraph.replace('###', '').trim()}</h3>;
              }
              if (paragraph.trim().startsWith('**')) {
                return <p key={index} className="font-bold text-gray-900 mt-8">{paragraph.replace(/\*\*/g, '').trim()}</p>;
              }
              if (paragraph.trim() === '') return null;
              return <p key={index} className="text-gray-700 leading-relaxed mb-6">{paragraph.trim()}</p>;
            })}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-10 border-t border-gray-100">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Thoughts on this post?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We'd love to hear your reflections or answer any questions you might have about this devotional.
              </p>
              <Link href="/contact" className="btn-red">
                Contact Our Pastoral Team
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
