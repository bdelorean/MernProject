import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg"></div>
      <div className="footer-content text-sm font-bold tracking-wider px-10 py-5">
        <ul className="mb-8">
          <li>Adress:</li>
          <li>Lekker Thuis</li>
          <li>Tulpstraat 123</li>
          <li>3011AB, Rotterdam, Nederland</li>
        </ul>
        <ul className="mb-8">
          <li>Telefoon:</li>
          <li>+31 60 125 4871</li>
        </ul>
        <ul>
          <li>E-mail:</li>
          <li>contact@lekkerthuis.nl</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
