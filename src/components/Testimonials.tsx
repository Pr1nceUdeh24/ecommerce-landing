import { StarIcon } from './Icons'
import './Testimonials.css'

const INSTAGRAM_IMAGES = [
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1519481083704-1e9a30059dc3?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80',
]

const RATING = 4
const MAX_RATING = 5

export default function Testimonials() {
  return (
    <section className="testimonials section" aria-label="Testimonials">
      <div className="container testimonials__grid">
        <div className="testimonials__content">
          <h2 className="testimonials__title">What they say about us</h2>
          <img
            className="testimonials__avatar"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            alt="Regina Miles"
          />
          <div className="testimonials__stars" aria-label={`${RATING} out of ${MAX_RATING} stars`}>
            {Array.from({ length: MAX_RATING }).map((_, i) => (
              <StarIcon key={i} size={18} filled={i < RATING} />
            ))}
          </div>
          <p className="testimonials__quote">
            This template helps you see how many more days you need to work to reach your
            financial goal.
          </p>
          <p className="testimonials__author">Regina Miles</p>
          <p className="testimonials__role">Designer</p>
        </div>

        <div className="testimonials__instagram">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}
