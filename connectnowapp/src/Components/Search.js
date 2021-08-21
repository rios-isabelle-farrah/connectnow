import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

const Search = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://data.cityofnewyork.us/resource/cuzb-dmcd.json?zip_code=${input}`
      );
      console.log(res.data);
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  return (
    <section>
      <h1>Enter a NYC Zip Code to Get Connected</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zip_code"></label>
        <input
          id="zip_code"
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="NYC Zip Code"
        />
        <button>Search</button>
      </form>
      <ul>
        {results.map((resultObj) => {
          return (
            <div key={resultObj.oid}>
              <li>
                <Link to={`/location/${resultObj.oid}`}>
               {resultObj.operator_name}: {resultObj.location_name}, {resultObj.address}, {resultObj.city}
                , {resultObj.state} {resultObj.zip_code} </Link>
              </li>
              <br /> 
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Search;
