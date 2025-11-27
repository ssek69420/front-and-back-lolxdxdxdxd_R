import FormField from '../components/FormField'
import PageSection from '../components/PageSection'

const fields = [
  { label: 'Table Number', placeholder: '07', required: true },
  { label: 'Reservation Number', placeholder: 'BR-2458', required: true },
  { label: 'Date', type: 'date', required: true },
]

const MyReservations = () => (
  <PageSection
    size="narrow"
    kicker="My Reservations"
    title="Find your special table"
    description="Tell us your table and reservation numbers to review every detail."
  >
    <form className="form-card" onSubmit={(event) => event.preventDefault()}>
      {fields.map((props) => (
        <FormField key={props.label} {...props} />
      ))}
      <button type="submit">Lookup</button>
    </form>
  </PageSection>
)

export default MyReservations
