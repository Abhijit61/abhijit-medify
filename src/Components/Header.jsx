import { Link } from "react-router-dom";
import Styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={Styles.main_container}>
      <Link to={"/"} >
      <button style={{"color" : "skyblue","background-color" : "black","border" : "none","font-weight" : "bold"}}>Medify Slot Booking</button>
      </Link>
      <div>
        <Link to={"/finddoctors"} className={Styles.link}>
           <button className={Styles.button}>Find-Doctors</button>
        </Link>
        <Link to={"/hospitals"} className={Styles.link}>
           <button className={Styles.button}>Hospital</button>
        </Link>
        <Link to={"/medicines"} className={Styles.link}>
           <button className={Styles.button}>Medicines</button>
        </Link>
        <Link to={"/sergeries"} className={Styles.link}>
           <button className={Styles.button}>Sergeries</button>
        </Link>
        <Link to={"/softwareforprovider"} className={Styles.link}>
           <button className={Styles.button}>Software for Provider</button>
        </Link>
        <Link to={"/facilities"} className={Styles.link}>
           <button className={Styles.button}>Facilities</button>
        </Link>
        <Link to={"/bookings"} className={Styles.link}>
           <button className={Styles.mybookingsbutton}>My Bookings</button>
        </Link>
      </div>
    </div>
  )
};

export default Header;