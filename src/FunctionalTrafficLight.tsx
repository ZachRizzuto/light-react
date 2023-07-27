import { useState } from "react";
export const FunctionalTrafficLight = () => {
  const [light, setLight] = useState(0);

  const increment = () => {
    if (light + 1 > 2) {
      setLight(0);
    } else {
      setLight(light + 1);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={"circle " + (light === 0 ? "red" : "black")}></div>
        <div className={"circle " + (light === 1 ? "yellow" : "black")}></div>
        <div className={"circle " + (light === 2 ? "green" : "black")}></div>
      </div>
      <button className="next-state-button" onClick={increment}>
        Next State
      </button>
    </div>
  );
};
