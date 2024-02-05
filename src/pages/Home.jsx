import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="text-white text-center mx-10 p-4 space-y-5">
      <h1>Home</h1>

      <p><strong>Climate Change</strong> is a web application that allows you to calculate the temperature of an object. The temperature of an object is measured in units called degrees. The temperature of an object can be measured using a thermometer. The temperature of an object can be measured in degrees Celsius (°C) or degrees Fahrenheit (°F).</p>

      <p className="py-5">We aren't finish this section go to </p> 
      <Link className="underline underline-offset-8 decoration-cyan-400" to="/temperature">Temperature page</Link>
    </div>
  )
}

export default Home