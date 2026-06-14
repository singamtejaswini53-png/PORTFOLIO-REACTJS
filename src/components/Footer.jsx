

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-logo">
          TEJASWINI
        </a>
        <p className="footer-text">
          &copy; {currentYear} Tejaswini. All rights reserved.
        </p>
        <p className="footer-designer">
          Designed with ❤️ by <span>Tejaswini</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
