import Banner from "../components/Banner";
import Measure from "../components/Measure";

const Temperature = () => {
  return (
    <div className="relative text-white center-column gap-5 overflow-hidden">
      <Banner title="Calculate temperature" size="44" />
      <section className="p-5 mx-10 mt-44 center-column gap-5 text-center">
        <p className="text-xl py-3">
          Temperature is a measure of the average kinetic energy of the
          particles in an object. It is a measure of the hotness or coldness of
          an object. The temperature of an object is measured in units called
          degrees. The temperature of an object can be measured using a
          thermometer. The temperature of an object can be measured in degrees
          Celsius (°C) or degrees Fahrenheit (°F).
        </p>
        <Measure />
      </section>
    </div>
  );
};

export default Temperature;
