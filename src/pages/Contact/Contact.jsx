import "./Contact.css"

const CONTACT_MAP_URL = "https://www.google.com/maps?q=205%20Torbay%20Rd%20%234%2C%20Markham%2C%20ON%20L3R%203W4&output=embed"
const REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=205%20Torbay%20Rd%20%234%2C%20Markham%2C%20ON%20L3R%203W4"

const contactIcons = {
  address: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M25.7 13.1 16.9 5a1.35 1.35 0 0 0-1.8 0l-8.8 8.1a1.31 1.31 0 0 0-.1 1.9c.5.5 1.3.6 1.9.1l.7-.6v10.1c0 .8.6 1.4 1.4 1.4h11.6c.8 0 1.4-.6 1.4-1.4V14.5l.7.6c.5.5 1.4.4 1.9-.1s.4-1.4-.1-1.9ZM16 12.4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.1 11H10.9c.6-2.3 2.7-4 5.1-4s4.5 1.7 5.1 4Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M22.8 27.4c-3.9-.8-7.8-2.8-11-6s-5.2-7.1-6-11c-.2-.9.3-1.8 1.2-2.1l4-1.3c.8-.3 1.7.1 2.1.9l1.7 3.9c.3.7.1 1.5-.5 2l-1.9 1.6c.8 1.4 1.7 2.7 2.8 3.8 1.2 1.2 2.5 2.1 3.9 2.8l1.6-1.9c.5-.6 1.3-.8 2-.5l3.9 1.7c.8.4 1.2 1.3.9 2.1l-1.3 4c-.3.9-1.2 1.4-2.1 1.2l-1.3-.2Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 9h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V11c0-1.1.9-2 2-2Zm10 9.7 10-6.8V11H6v.9l10 6.8Zm0 2.7L6 14.7V23h20v-8.3l-10 6.7Z" />
      <path d="M12 5h12c1.1 0 2 .9 2 2v1H10V7c0-1.1.9-2 2-2Z" />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 7h20c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2Zm3 5h14v-2H9v2Zm0 5h14v-2H9v2Zm0 5h8v-2H9v2Zm11.5 0h3v-2h-3v2Z" />
    </svg>
  ),
}

function Contact({ copy }) {
  const contact = copy.contactPage
  const items = [
    {
      id: "address",
      icon: contactIcons.address,
      title: contact.addressTitle,
      text: contact.address,
    },
    {
      id: "phone",
      icon: contactIcons.phone,
      title: contact.phoneTitle,
      text: contact.phone,
    },
    {
      id: "email",
      icon: contactIcons.email,
      title: contact.emailTitle,
      text: contact.email,
    },
    {
      id: "review",
      icon: contactIcons.review,
      title: contact.reviewTitle,
      text: contact.reviewText,
      href: REVIEW_URL,
    },
  ]

  return (
    <main className="contact-page" aria-labelledby="contact-page-title">
      <h1 id="contact-page-title" className="contact-page__title">{contact.title}</h1>
      <section className="contact-details" aria-label={contact.detailsLabel}>
        <div className="contact-details__panel">
          <div className="contact-details__list">
            {items.map((item) => {
              const icon = item.href ? (
                <a className="contact-item__icon" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={contact.reviewLinkLabel}>
                  {item.icon}
                </a>
              ) : (
                <span className="contact-item__icon">{item.icon}</span>
              )

              return (
                <article className="contact-item" key={item.id}>
                  {icon}
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <iframe
          className="contact-details__map"
          title={contact.mapTitle}
          src={CONTACT_MAP_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}

export default Contact
