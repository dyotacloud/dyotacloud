import React, { useEffect, useState } from 'react'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import SEO from './SEO'
import useReveal from '../hooks/useReveal'
import '../assets/css/Blog.css'

const tags = ['Salesforce', 'DevOps', 'Cloud', 'AI/ML', 'LWC', 'Integration']

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const titleRef = useReveal()

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=3')
      .then(r => r.json())
      .then(d => { setPosts(d.posts); setLoading(false) })
  }, [])

  return (
    <section id="blog" className="blog-section">
      <SEO 
        title="Salesforce & Cloud Tech Blog | Apex LWC DevOps AI | Dyota Cloud"
        description="Expert articles on Salesforce development, Apex, LWC, DevOps, cloud computing, and AI/ML from Dyota Cloud's certified engineers. Stay ahead with actionable insights."
        keywords="Salesforce blog India, Apex development tips, LWC tutorial, Salesforce Flow automation, DevOps CI CD guide, cloud computing blog India, AI ML Salesforce Einstein, Salesforce best practices 2026, Dyota Cloud blog, IT insights India"
        url="https://www.dyotacloud.com/#blog"
      />
      <div className="container">
        <div className="blog-header reveal" ref={titleRef}>
          <div>
            <span className="section-tag">📖 Blog</span>
            <h2 className="section-title">Insights & <span className="gradient-text">Resources</span></h2>
          </div>
          <a href="#" className="btn-ghost">View All →</a>
        </div>
        <div className="blog-grid">
          {loading
            ? [...Array(3)].map((_, i) => <div key={i} className="blog-skeleton" />)
            : posts.map((p, i) => <BlogCard key={p.id} post={p} i={i} />)
          }
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post, i }) {
  const ref = useReveal()
  return (
    <article className="blog-card card reveal" ref={ref} style={{ transitionDelay: `${i * 0.1}s`, padding: 0 }}>
      <div className="blog-img-wrap">
        <img src={`https://picsum.photos/seed/${post.id * 11}/700/380`} alt={post.title} className="blog-img" />
        <span className="blog-tag">{tags[i % tags.length]}</span>
        <a href="#" className="blog-ext" aria-label="Read"><ArrowUpRight size={14} /></a>
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          <span><Calendar size={11} /> Apr {10 + i}, 2026</span>
          <span className="meta-sep">·</span>
          <span><Clock size={11} /> {5 + i} min read</span>
        </div>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.body.slice(0, 100)}...</p>
        <a href="#" className="blog-read">Read Article <ArrowUpRight size={13} /></a>
      </div>
    </article>
  )
}
