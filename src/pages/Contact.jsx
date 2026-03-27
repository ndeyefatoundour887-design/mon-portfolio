function Contact() {
  return (
    <section className="contact-container">

      <h2>Contactez-moi</h2>

      <p>Vous pouvez me contacter en utilisant le formulaire ci-dessous :</p>
      <div className="contact-info">
        <p>📞 +221 77 961 57 01</p>
        <p>📧 ndeyefatoundour887@gmail.com</p>
        <p>📍 Thiès, Sénégal</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Téléphone" />

        <button type="submit">Envoyer</button>
      </form>

    </section>
  )
}

export default Contact