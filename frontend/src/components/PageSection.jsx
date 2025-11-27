const PageSection = ({ kicker, title, description, size = 'base', children }) => {
  const hasHeader = kicker || title || description
  const sectionClass = ['page-shell', size === 'narrow' ? 'page-shell--narrow' : null]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClass}>
      {hasHeader && (
        <header className="section-header">
          {kicker && <p className="section-kicker">{kicker}</p>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </section>
  )
}

export default PageSection
