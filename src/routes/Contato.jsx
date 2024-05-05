import '../Scss/Contato.scss'

export default function Contato() {
    return (
      <>
      <section className="contact">
        <h1 className="form-title">CONTATE-NOS</h1>

        <form className="forms">
          <div className="form-group">
            <input
              id="name"
              required
              placeholder="Nome Completo*"
              className="form-input"
              type="text"
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              required
              placeholder="E-mail*"
              className="form-input"
              name="email"
              type="email"
            />
          </div>

          <div className="form-group">
            <textarea
              required
              placeholder="Mensagem*"
              className="form-input"
              name="message"
              id="message"
            ></textarea>
          </div>

          <div id="check">
            <input className="checkbox" type="checkbox" id="checkbox" />
            <label id="info-check">
              Concordo com o envio dos dados e autorizo a Central Music a entrar
              contato comigo através deles.
            </label>
          </div>

          <button className="form-button" type="submit">
            ENVIAR MENSAGEM
          </button>
        </form>
      </section>
      </>
    );
  }