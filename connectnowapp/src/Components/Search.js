import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import CheckChoices from "./CheckChoices"
import "../Styles/Search.css"
let urlString = ""
let zipString = ""
const Search = () => {
  const [input, setInput] = useState();
  // const [inputQuery, setInputQuery] = useState();
 
  const [results, setResults] = useState([]);
  // const [parameters, setParameters] = useState(urlString);

  


 

 const queryString = (url)=>{
urlString = url
console.log(urlString)
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  

  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    zipString = '&zip_code='+input
    console.log('zip',zipString)
    // const zip = 'zip_code='+input 
    // console.log(parameters)
    
    try {
      const res = await axios.get(
        `https://data.cityofnewyork.us/resource/cuzb-dmcd.json?${zipString}${urlString}`
//  query+zip+urlString
       
      );
     console.log(res.data);
      setResults(res.data);
    } catch (error) {
      console.log(error);
      setResults([{location_name:"In order to search",address:"please enter a NYC Zip Code", city:" - Connect Now", state:"The City is Yours to Explore"}])
    }
    // setInput("");
  };

  return (
    <section>
   
      <CheckChoices queryString={queryString} />
      <h1 className="enter-zip">Enter a NYC Zipcode to get connected</h1>
      <form onSubmit={handleSubmit}>
        <input className="zip-input"
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Enter NYC Zipcode"
        />
        <button>Search</button>
      </form>
      <ul className="ul-locations">
        {results.map((resultObj) => {
          return (
            <div>
                <li className="location">
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


