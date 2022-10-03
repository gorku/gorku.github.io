import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <img src={require("../static/images/hadut.jpg")} alt="" />
      <h2>About</h2>
      <Link to="/" className="app-link">
        Home Page
      </Link>
    </div>
  )
}

export default About
