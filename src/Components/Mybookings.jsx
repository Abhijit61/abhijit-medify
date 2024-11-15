import { useMyContext } from './MyContext';
import Styles from "./Mybooking.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Mybookings = () => {
  const {bookingslist,setbookinglist} = useMyContext();

  const handlecancel = (cancelid) => {
    setbookinglist((bookingli)=>bookingli.filter((booking) => {
      if(booking.id!==cancelid)
      {
        return true;
      }
      else
      {
        return false;
      }
    }));
  };

  return (
    <div>
      <Header />
      <div className={Styles.bookingslistinfo}>
        {
          bookingslist.map((booking) => {
            console.log(booking.slot);

             return (
                <div key={booking.state+booking.city+booking.hospital}className={Styles.booking}>
                  <h1 className={Styles.hospitalname}>{booking.hospital}</h1>
                  <h2>{booking.state},{booking.city}</h2>
                  <p className={Styles.bookinginfo}>{booking.date},{booking.slot}</p>
                  <button className={Styles.cancelbutton} onClick={() => handlecancel(booking.id)}>Cancel Booking</button>
                </div>
             )
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Mybookings;