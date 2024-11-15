import { Link } from "react-router-dom";
import Header from "./Header";
import Styles from "./Home.module.css";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <div className={Styles.container}>
        <div className={Styles.information}>
          <h1>Skip the Travel Find <span style={{"color" : "black"}}>Online</span>......</h1>
          <h1><span style={{"color" : "black"}}>Medical</span><span style={{"color" : "white"}}>Centres</span></h1>

          <br />

          <h3>Find Instantly with a 24x7 specialist or choose to video</h3>
          <h3>visit a particular doctor</h3>

          <Link to={"/finddoctors"}>
            <button className={Styles.button}>Find Centers</button>
          </Link>
        </div>
        <div className={Styles.imagecontainer}>
          <img className={Styles.image} src="https://watermark.lovepik.com/photo/20211207/large/lovepik-doctor-nurse-hospital-image-photo-picture_501547246.jpg" alt="doctor-nurse-image"/>
        </div>
      </div>

      <Footer/>
    </div>
  )
};

export default Home;