import logo from '../assets/images/logo.png';
import separator from '../assets/icons/Separator.svg';
export const Footer = () => {
  return (
    <div className="footer">
      <section className="footer__container">
        <img className="footer__img" src={logo} loading="lazy" alt="logo" />
        <p className="footer__paragragh">
          La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020.
          All rights reserved. Los contenidos de esta publicación se redactan
          solo con fines informativos. En ningún momento pueden servir para
          facilitar diagnósticos o sustituir la labor de un profesional. Le
          recomendamos que contacte con su especialista de confianza.
        </p>
      </section>
      <div className="footer__separator">
        <img
          className="footer__img"
          src={separator}
          loading="lazy"
          alt="logo"
        />
      </div>
      <section className="footer__btns">
        <button className="footer__btn">Política de Cookies</button>
        <button className="footer__btn">Política de Privacidad</button>
        <button className="footer__btn">Términos y condiciones de uso</button>
        <button className="footer__btn">
          Cláusula Informativa de Consentimiento
        </button>
      </section>
    </div>
  );
};
