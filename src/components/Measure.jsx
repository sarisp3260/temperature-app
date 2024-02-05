import { useEffect, useState } from "react";
import coldImg from "../assets/1F976_color.png";
import hotImg from "../assets/1F975_color.png";
import neutralImg from "../assets/1F31D_color.png";
import waitingImg from "../assets/1F440_color.png";
const Measure = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [kelvin, setKelvin] = useState(273.15);
  const [colorBox, setColorBox] = useState("neutral-800");
  const [img, setImg] = useState(neutralImg);

  const handleCelsiusChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setCelsius(value);
      setFahrenheit((value * 9) / 5 + 32);
      setKelvin(value + 273.15);
    } else {
      setCelsius("");
      setFahrenheit("");
      setKelvin("");
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setFahrenheit(value);
      setCelsius(((value - 32) * 5) / 9);
      setKelvin(((value - 32) * 5) / 9 + 273.15);
    } else {
      setCelsius("");
      setFahrenheit("");
      setKelvin("");
    }
  };

  const handleKelvinChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setKelvin(value);
      setCelsius(value - 273.15);
      setFahrenheit(((value - 273.15) * 9) / 5 + 32);
    } else {
      setCelsius("");
      setFahrenheit("");
      setKelvin("");
    }
  };

  useEffect(() => {
    const coldThreshold = 10; 
    const hotThreshold = 40;
    const parseNumber = parseFloat(celsius);
    
    if (parseNumber < coldThreshold) {
      setColorBox('outline-blue-400');
      setImg(coldImg);
    }else if (parseNumber >= coldThreshold && parseNumber <= hotThreshold) {
      setColorBox('outline-orange-500');
      setImg(neutralImg);
    }else if (parseNumber > hotThreshold) {
      setColorBox('outline-red-800');
      setImg(hotImg);
    } else {
      setColorBox('outline-neutral-800');
      setImg(waitingImg);
    }
  }, [celsius]);

  
  return (
    <div className="w-full px-6 py-2 center-column gap-8 lg:gap-40 lg:flex-row">
      <div className="w-1/3 center-column gap-5">
        <div className={`relative bg-neutral-800 outline outline-8 center w-60 h-60 rounded-full ${colorBox}`}>
          <span className="z-10 font-semibold text-3xl text-wrap">{celsius !== "" || celsius === 0 ? `${celsius}°C` : "Wating for a number"}</span>
          <img src={img} alt="thermometer" className="w-2/3 absolute inset-0 inset-x-auto inset-y-auto opacity-50" />
        </div>
        <label>Change here:</label>
        <input
          className="p-1 rounded-md text-white text-center bg-neutral-700"
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder={celsius}
        />
      </div>
      <div className="w-1/3 center-column gap-5">
        <div className={`relative bg-neutral-800 outline outline-8 center w-60 h-60 rounded-full ${colorBox}`}>
          <span className="z-10 font-semibold text-3xl text-wrap">{fahrenheit !== "" || fahrenheit === 0 ? `${fahrenheit}°F` : "Wating for a number"}</span>
          <img src={img} alt="thermometer" className="w-2/3 absolute inset-0 inset-x-auto inset-y-auto opacity-50" />
        </div>
        <label>Change here:</label>
        <input
          className="p-1 rounded-md text-white text-center bg-neutral-700"
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder={fahrenheit}
        />
      </div>
      <div className="w-1/3 center-column gap-5">
        <div className={`relative bg-neutral-800 outline outline-8 center w-60 h-60 rounded-full ${colorBox}`}>
          <span className="z-10 font-semibold text-3xl text-wrap">{kelvin !== "" || kelvin === 0 ? `${kelvin} K` : "Wating for a number"}</span>
          <img src={img} alt="thermometer" className="w-2/3 absolute inset-0 inset-x-auto inset-y-auto opacity-50" />
        </div>
        <label>Change here:</label>
        <input
          className="p-1 rounded-md text-white text-center bg-neutral-700"
          type="number"
          value={kelvin}
          onChange={handleKelvinChange}
          placeholder={kelvin}
        />
      </div>
    </div>
  );
};

export default Measure;
