import { Link } from 'react-router-dom'

const heroImage =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80'

const Home = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero-media"
        style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.25)), url(${heroImage})` }}
      />
      <div className="hero-content">
        <p className="hero-kicker">Signature experience</p>
        <h2 id="hero-title">RESTAURANT SABOR DA TERRA</h2>
        <p className="hero-subtitle">Northeastern cuisine crafted with soul</p>
        <Link to="/reservations" className="primary-btn">
          Reserve Now
        </Link>
      </div>
    </section>
  )
}

export default Home
