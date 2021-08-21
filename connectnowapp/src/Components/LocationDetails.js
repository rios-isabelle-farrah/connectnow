import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
      <h1>{location.operator_name}</h1>
      <h1>{location.location_name}</h1>
      <h2>
        {location.address}, {location.city}, {location.state}{" "}
        {location.zip_code}
      </h2>
      <a href={location.url} target="_blank" rel="noreferrer">
        <button>Website</button>
      </a>
      <h3>Hours Of Operation</h3>
      <p>
        Monday: {location.mon_open} - {location.mon_close}
      </p>
      <p>
        Tuesday: {location.tue_open} - {location.tue_close}
      </p>
      <p>
        Wednesday: {location.wed_open} - {location.wed_close}
      </p>
      <p>
        Thursday: {location.thu_open} - {location.thu_close}
      </p>
      <p>
        Friday: {location.fri_open} - {location.fri_close}
      </p>
      <p>
        Saturday: {location.sat_open} - {location.sat_close}
      </p>
      <p>
        Sunday: {location.sun_open} - {location.sun_close}
      </p>
      <p>Wi-Fi Available: {location.wi_fi_available ? "Yes" : "No"}</p>
      <p>Work Stations: {location.workstation}</p>
      <p>Other Equipment: {location.supplementary_equipment}</p>
      <p>
        Wheelchair Accessibility:{" "}
        {location.wheelchair_accessible === "Y" ? "Yes" : "No"}
      </p>
      <p>Access Requirements: {location.access_requirements}</p>
    </section>
  );
};

export default LocationDetails;
