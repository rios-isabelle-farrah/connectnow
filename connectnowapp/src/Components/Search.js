import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState();
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
    //   console.log(res.data);
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  return (
    <section>
      <h1>Enter a NYC Zipcode to get connected</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Enter NYC Zipcode"
        />
        <button>Search</button>
      </form>
      <ul>
        {results.map((resultObj) => {
          return (
            <div>
                {/* {resultObj.zip_code ?  */}
              <li>
                {resultObj.location_name}, {resultObj.address}, {resultObj.city}
                , {resultObj.state} {resultObj.zip_code}
              </li>
              <br /> 
              {/* : "Sorry! We don't service this area."
            } */}
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Search;
