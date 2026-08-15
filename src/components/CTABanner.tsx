import './CTABanner.css'

export default function CTABanner() {
  return (
    <section className="cta" aria-label="Call to action">
      <div className="container cta__inner">
        <div className="cta__content">
          <p className="cta__eyebrow">Designing Better Experience</p>
          <h2 className="cta__title">Problems trying to resolve the conflict between</h2>
          <p className="cta__desc">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics:
          </p>
          <p className="cta__price">$16.48</p>
          <button className="btn btn-primary cta__btn">Add Your Call To Action</button>
        </div>
        <div className="cta__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?auto=format&fit=crop&w=500&q=80"
            alt="Kitchen utensils"
          />
        </div>
      </div>
    </section>
  )
}
