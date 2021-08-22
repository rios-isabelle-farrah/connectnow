import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import CheckChoices from "./CheckChoices";
import DisplayMap from "./DisplayMap";
import "../Styles/Search.css";
let urlString = "";
let zipString = "";
const Search = () => {
  const [input, setInput] = useState();
  // const [inputQuery, setInputQuery] = useState();

  const [results, setResults] = useState([]);
  // const [parameters, setParameters] = useState(urlString);

  const queryString = (url) => {
    urlString = url;
    console.log(urlString);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(input.length !== 5){
      alert('Zip code is not valid.')
    }
    zipString = "&zip_code=" + input;
    console.log("zip", zipString);
    try {
      const res = await axios.get(
        `https://data.cityofnewyork.us/resource/cuzb-dmcd.json?${zipString}${urlString}`
      );
      console.log(res.data);
      setResults(res.data);
    } catch (error) {
      console.log(error);
      //setResults([{location_name:"In order to search",address:"please enter a NYC Zip Code", city:" - Connect Now", state:"The City is Yours to Explore"}])
    }
    // setInput("");
  };

  return (
    <section>
      <h1 className="enter-zip">Enter a NYC Zip Code to Get Connected</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input"></label>
        <input
          className="zip-input"
          id="input"
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="NYC Zip Code"
        />
        <button className="search-button"> Connect </button>
      <CheckChoices queryString={queryString}/>
      </form>
      <section className="map-and-locales">
      <ul className="ul-locations">
        {results.map((resultObj) => {
          return (
            <div key={resultObj.oid}>
              <li className="location">
                <Link style={{ textDecoration: 'none' }} to={`/location/${resultObj.oid}`}>
                  {resultObj.operator_name}: {resultObj.location_name},{" "}
                  {resultObj.address}, {resultObj.city}, {resultObj.state}{" "}
                  {resultObj.zip_code}{" "}
                </Link>
              </li>
              <br />
            </div>
          );
        })}
      </ul>
      <DisplayMap results={results} />
      </section>

    </section>
  );
};

export default Search;
