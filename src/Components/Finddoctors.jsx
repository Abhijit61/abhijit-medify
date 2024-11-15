import { useEffect, useState } from "react";
import Hospitalcard from "./Hospitalcard";
import Header from "./Header";
import Footer from "./Footer";
import Styles from "./Finddoctors.module.css";

const Finddoctors= () => {
  const [formdata,setformdata] = useState({
    state : "",
    city : ""
  });
  const [statelist,setstatelist] = useState([]);
  const [citylistforselectedstate,setcitylistforselectedstate] = useState([]);
  const [hospitallist,sethospitallist] = useState([]);

  const handlestateselection = (event) => {
    const selstate = event.target.value;
    setformdata({
      state : selstate,
      city : ""
    });

    const getcitylistaccordingtostate = async () => {
      try{
        let datajson = await fetch(`https://meddata-backend.onrender.com/cities/${selstate}`);
        let data = await datajson.json();
        setcitylistforselectedstate(data);
      }
      catch(error)
      {
        console.error(error);
      }
    };

    getcitylistaccordingtostate();
  }

  const handlecityselection = (event) => {
    setformdata({...formdata,city : event.target.value});
  }

  const handlesubmit = (event) => {
    event.preventDefault();

    if(formdata.city === "" || formdata.state==="")
    {
      alert("Please select city and state to search hospitals");
      return;
    }
    const getcitywisehospitallist = async() => {
      let datajson = await fetch(`https://meddata-backend.onrender.com/data?state=${formdata.state}&city=${formdata.city}`);
      let data = await datajson.json();
      sethospitallist(data);
    };

    getcitywisehospitallist();
  };

  useEffect(()=>{
    const getstatelist = async () => {
      try{
        const statedatajson = await fetch("https://meddata-backend.onrender.com/states");
        const data = await statedatajson.json();
        setstatelist(data);
      }
      catch(error)
      {
        console.error(error);
      }
    };
    getstatelist();
  },[])

  return (
    <div>
      <Header />
      <div className={Styles.search_form}>
        <form onSubmit={handlesubmit}>
          <label style={{"color" : "black"}}>Select state: </label>
          <select onChange={handlestateselection}>
            <option value=""></option>
            {
              statelist.map((state) => (
                <option value={state}>{state}</option>
              ))
            }
          </select>

          <label style={{"color" : "black",
            "margin-left" : "10px"
          }}>Select city: </label>
          <select onChange={handlecityselection}>
          <option value=""></option>
            {
              citylistforselectedstate.map((city) => (
                <option value={city}>{city}</option>
              ))
            }
          </select>

          <button type="submit">Search</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div className={Styles.hopital_list}>
        {
          hospitallist.map((hospital) => (
            <Hospitalcard data={hospital}/>
          ))
        }
      </div>

      <Footer />
    </div>
  )
};

export default Finddoctors;