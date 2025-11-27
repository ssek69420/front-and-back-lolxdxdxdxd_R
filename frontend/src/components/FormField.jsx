const FormField = ({ label, type = 'text', className = '', ...rest }) => (
  <label className={`form-field ${className}`.trim()}>
    <span>{label}</span>
    <input type={type} {...rest} />
  </label>
)

export default FormField
