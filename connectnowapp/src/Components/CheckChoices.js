import { useState } from "react";
import { toppings } from "../Utils";
import "../Styles/CheckChoices.css"

export default function App({input,queryString,zip}) {

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + "&" + toppings[index].name + "=" + toppings[index].value;
        }
        return sum;
      },
      ""
    );

    setTotal(totalPrice);
    queryString(total)
  };

  return (
    <div className="App">
      <h3>Select Filters</h3>
      <ul className="query-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                  className="check-box"
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{price}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
      </div>
        </li>
      </ul>
    </div>
  );
}
