import { useState } from "react";
import Styles from "./Hospitalcard.module.css";
import { useMyContext } from './MyContext';

const Hospitalcard = ({data}) => {

  const {bookingslist,setbookinglist} = useMyContext();
  const [bookformvisible,setbookformvisible] = useState(false);
  const [bookingformdata,setbookingformdata] = useState({
    date : "",
    slot : ""
  })

  const handledatechnage = (event) => {
    setbookingformdata({...bookingformdata,date: event.target.value});
  }

  const handleslotchange = (event) => {
    setbookingformdata({...bookingformdata,slot: event.target.value});
  }

  const handlebooking = () => {
    setbookformvisible(true);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(typeof(bookingslist));

    setbookinglist([...bookingslist,{
      hospital : data["Hospital Name"],
      state : data.State,
      city : data.City,
      date : bookingformdata.date,
      slot : bookingformdata.slot,
      id : bookingslist.length ? parseInt(bookingslist[bookingslist.length-1].id)+1 : 0
    }])

    setbookformvisible(false);
  }

  return (
    <div className={Styles.main_container}>
      <div className={Styles.hospital_info}>
        <h1 style={{"color" : "skyblue"}}>{data["Hospital Name"]}</h1>
        <h3>{data.City},{data.State}</h3>
        <br />
        <br />
        <br />
        <p><span style={{"color" : "green"}}>FREE</span> <span style={{"text-decoration" : "line-through"}}>$500</span> Consultation fee at Clininc</p>
      </div>
      {
        bookformvisible===false && (
          <div>
            <p style={{"color" : "green"}}>Available Today</p>
            <button style={{"color" : "white","background-color" : "skyblue"}} onClick={handlebooking}>Book Centre Visit</button>
          </div>
        )
      }

      {
        bookformvisible===true && (
          <div>
            <form onSubmit={handlesubmit} className={Styles.bookinginfo}>
              <input type="date" onChange={handledatechnage}/>
              <select onChange={handleslotchange}>
                <option value=""></option>
                <option value="10:30">10:30</option>
                <option value="11:30">11:30</option>
                <option value="12:30">12:30</option>
                <option value="16:30">16:30</option>
                <option value="17:30">17:30</option>
                <option value="18:30">18:30</option>
                <option value="19:30">19:30</option>
                <option value="20:30">20:30</option>
              </select>

              <button type="submit" style={{"background-color" : "green","color" : "black","border" : "1px solid black","width":"60px","height":"30px"}}>Book</button>
              <button onClick={() => {setbookformvisible(false)}}>Cancel</button>
            </form>
          </div>
        )
      }
    </div>
  )
};

export default Hospitalcard;