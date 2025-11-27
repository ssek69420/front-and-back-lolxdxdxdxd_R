import FormField from '../components/FormField'
import PageSection from '../components/PageSection'

const fields = [
  { label: 'Reservation Date', type: 'date', required: true },
  { label: 'Time', type: 'time', required: true },
  { label: 'Client Name', placeholder: 'João Silva', required: true },
  { label: 'Contact', type: 'tel', placeholder: '(+55) 99 99999-9999', required: true },
  { label: 'Party Size', type: 'number', placeholder: '4', min: 1, max: 20, required: true },
]

const Reservations = () => (
  <PageSection
    kicker="Reservations"
    title="Secure your next visit"
    description="Choose the perfect date and share a few details so we can prepare the table exactly how you like it."
  >
    <form className="form-card form-card--grid" onSubmit={(event) => event.preventDefault()}>
      {fields.map((props) => (
        <FormField key={props.label} {...props} />
      ))}
      <button type="submit" className="full-width">
        Confirm Reservation
      </button>
    </form>
  </PageSection>
)

export default Reservations
