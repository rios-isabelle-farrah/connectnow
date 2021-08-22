import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../Styles/LocationDetails.css"

const LocationDetails = () => {
  const [location, setLocation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get(
          `https://data.cityofnewyork.us/resource/cuzb-dmcd.json?oid=${id}`
        );
        console.log(res.data);
        setLocation(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocation();
  }, [id]);

  return (
    <section>
     <div className="show-route"> <h1>{location.operator_name}</h1>
      <h1>{location.location_name}</h1>
      <h2>
        {location.address}, {location.city}, {location.state}{" "}
        {location.zip_code}
      </h2>
      <a href={location.url} target="_blank" rel="noreferrer">
        <button>Website</button>
      </a></div>


      <h3>Hours Of Operation</h3>


<table>
  <thead>
  <tr>

    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
    <th>Sunday</th>

  </tr>
  </thead>
  <thead>
  <tr>
    <td>{location.mon_open} - {location.mon_close}</td>
    <td>{location.tue_open} - {location.tue_close}</td>
    <td>{location.wed_open} - {location.wed_close}</td>
    <td>{location.thu_open} - {location.thu_close}</td>
    <td>{location.fri_open} - {location.fri_close}</td>
    <td>{location.sat_open} - {location.sat_close}</td>
    <td>{location.sun_open} - {location.sun_close}</td>


  </tr>
  </thead>
 
 
</table>


<br></br>





<div className="bottom-div">      <p>Wi-Fi Available: {location.wi_fi_available ? "Yes" : "No"}</p>
      <p>Work Stations: {location.workstation}</p>
      <p>Other Equipment: {location.supplementary_equipment}</p>
      <p>
        Wheelchair Accessibility:{" "}
        {location.wheelchair_accessible === "Y" ? "Yes" : "No"}
      </p>
      <p>Access Requirements: {location.access_requirements}</p></div>
    </section>
  );
};

export default LocationDetails;
