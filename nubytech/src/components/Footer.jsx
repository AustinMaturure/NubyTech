import "../css/footer.css";
import igImg from "../assets/ig.svg";
import wpImg from "../assets/wp.svg";
import fbImg from "../assets/fb.svg";
import ttImg from "../assets/tt.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-info">
          <div className="logo">
            <h1>NubyTech</h1>
            <p>Inovation is our language. What's Yours?</p>
          </div>
          <div className="infos">
            <div className="info">
              <p>+27 01 025 5856</p>
              <p>MON - FRI | 9 a.m - 5 p.m </p>
            </div>
            <div className="info">
              <p>Email</p>
              <p>info@nubytech.co</p>
            </div>
            <div className="info">
              <p>Gauteng, South Africa</p>
              <p>Johannesburg </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="connect">
          <p>Connect with us on social media</p>
          <div>
            <div className="s-links">
              <img src={igImg} alt="Instagram" />

              <img src={wpImg} alt="WhatsApp" />
              <img src={fbImg} alt="Facebook" />
              <img src={ttImg} alt="Twitter" />
            </div>
          </div>
        </div>
        <p className="copy-right">
          &copy; {new Date().getFullYear()} NubyTech. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
