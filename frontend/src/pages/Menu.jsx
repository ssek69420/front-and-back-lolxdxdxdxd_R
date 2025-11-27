import PageSection from '../components/PageSection'

const dishes = [
  {
    name: 'Carne de Sol & Creamy Cassava',
    description: 'Slow-cured beef, coal grilled, finished with brown-butter onions.',
    detail: 'Served with whipped cassava purée and country-style vinaigrette.',
  },
  {
    name: 'Shrimp Baião',
    description: 'Regional rice and beans simmered with coconut milk and fresh shrimp.',
    detail: 'Finished with toasted coalho cheese and crispy farofa.',
  },
  {
    name: 'Pumpkin & Goat Cheese Escondidinho',
    description: 'Layers of creamy pumpkin, pulled sun-dried meat, and goat cheese crust.',
    detail: 'Baked to order with sweet chili molasses.',
  },
]

const Menu = () => (
  <PageSection
    kicker="Menu"
    title="Three classics to fall in love with"
    description="Honoring Northeast Brazil with dishes that balance smoke, spice, and comfort."
  >
    <div className="card-grid" role="list">
      {dishes.map(({ name, description, detail }) => (
        <article className="menu-card" key={name} role="listitem">
          <h3>{name}</h3>
          <p>{description}</p>
          <p className="card-detail">{detail}</p>
        </article>
      ))}
    </div>
  </PageSection>
)

export default Menu
