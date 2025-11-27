import FormField from '../components/FormField'
import PageSection from '../components/PageSection'

const fields = [
  { label: 'First Name', placeholder: 'Maria', required: true },
  { label: 'Last Name', placeholder: 'Ferreira', required: true },
  { label: 'E-mail', type: 'email', placeholder: 'maria@example.com', required: true },
  { label: 'Street', placeholder: 'Rua das Palmeiras', required: true },
  { label: 'No.', placeholder: '120', required: true },
  { label: 'Neighborhood', placeholder: 'Centro', required: true },
  { label: 'City', placeholder: 'São Luís', required: true },
  { label: 'State', placeholder: 'MA', required: true },
]

const Signup = () => (
  <PageSection
    kicker="Sign Up"
    title="Join our reservation list"
    description="Share your details so we can welcome you with a personalized service."
  >
    <form className="form-card form-card--grid" onSubmit={(event) => event.preventDefault()}>
      {fields.map((props) => (
        <FormField key={props.label} {...props} />
      ))}
      <button type="submit" className="full-width">
        Register
      </button>
    </form>
  </PageSection>
)

export default Signup
