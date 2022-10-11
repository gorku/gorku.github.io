import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className="flex w-full">
        <img
          src={require("../static/images/acep.jpg")}
          alt=""
          height={500}
          width={1000}
        />
        <img
          src={require("../static/images/hadut.jpg")}
          alt=""
          height={500}
          width={500}
        />
      </div>

      <h2 className="font-bold text-3xl">About HAH?</h2>
      <Link to="/" className="app-link">
        Home Page
      </Link>
    </div>
  )
}

export default About
