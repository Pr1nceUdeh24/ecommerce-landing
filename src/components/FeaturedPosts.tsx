import { ClockIcon, CommentIcon, ArrowRightIcon } from './Icons'
import './FeaturedPosts.css'

const POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80',
    tags: ['Google', 'Trending', 'New'],
    title: 'Loudest à la Madison #1 (L\u2019integral)',
    excerpt:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80',
    tags: ['Google', 'Trending', 'New'],
    title: 'Loudest à la Madison #1 (L\u2019integral)',
    excerpt:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80',
    tags: ['Google', 'Trending', 'New'],
    title: 'Loudest à la Madison #1 (L\u2019integral)',
    excerpt:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10,
  },
]

export default function FeaturedPosts() {
  return (
    <section className="posts section" id="blog" aria-label="Featured blog posts">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow posts__eyebrow">Practice Advice</p>
          <h2 className="section-title">Featured Posts</h2>
        </div>

        <div className="posts__grid">
          {POSTS.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-card__image-wrap">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="post-card__badge">NEW</span>
              </div>
              <div className="post-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3 className="post-card__title">{post.title}</h3>
              <p className="post-card__excerpt">{post.excerpt}</p>
              <div className="post-card__meta">
                <span><ClockIcon /> {post.date}</span>
                <span><CommentIcon /> {post.comments} comments</span>
              </div>
              <a href="#blog" className="post-card__link">
                Learn More <ArrowRightIcon size={12} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
