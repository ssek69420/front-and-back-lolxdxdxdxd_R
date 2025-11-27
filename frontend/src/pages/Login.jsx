import FormField from '../components/FormField'
import PageSection from '../components/PageSection'

const fields = [
  { label: 'E-mail', type: 'email', placeholder: 'you@email.com', required: true },
  { label: 'Password', type: 'password', placeholder: '••••••••', required: true },
]

const Login = () => (
  <PageSection
    size="narrow"
    kicker="Login"
    title="Access your table"
    description="Use your e-mail and password to view saved reservations."
  >
    <form className="form-card" onSubmit={(event) => event.preventDefault()}>
      {fields.map((props) => (
        <FormField key={props.label} {...props} />
      ))}
      <button type="submit">Sign In</button>
    </form>
  </PageSection>
)

export default Login
