import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

const NavbarMenu = () => {
  return (
    <>
      <nav className="border-b-2 flex flex-col justify-center md:flex-row md:justify-between  p-4">
        <h1 className="text-white text-2xl font-bold px-4">Climate Change</h1>
        <ul className="center-between flex-wrap gap-5 pt-3 text-white md:gap-5 md:pt-0">
          <li>
            <Link to="/" className="p-4">Home</Link>
          </li>
          <li>
            <Link to="/temperature" className="p-4">Temperature</Link>
          </li>
          <li>
            <Link to="/service" className="p-4">Climate clange</Link>
          </li>
          <li>
            <Link to="/contact" className="p-4">More</Link>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default NavbarMenu