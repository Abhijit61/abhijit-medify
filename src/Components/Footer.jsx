import { Link } from "react-router-dom";
import Styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={Styles.outercontainer}>
      <div className={Styles.main_container}> 
        <Link to={"/contactus"}>
          <button className={Styles.button}>Contact us</button>
        </Link>
        <Link to={"/aboutus"}>
          <button className={Styles.button}>about us</button>
        </Link>
        <Link to={"/pricing"}>
          <button className={Styles.button}>About our Pricing</button>
        </Link>
        <Link to={"/faq"}>
          <button className={Styles.button}>FAQ's</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;