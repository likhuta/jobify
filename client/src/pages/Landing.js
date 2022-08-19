import {Logo} from "../components"
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            vestibulum justo vel odio cursus viverra. Suspendisse aliquet magna
            eu volutpat rhoncus. Sed quis neque eget felis consequat dictum.
            Integer lobortis sollicitudin ante id mattis. Praesent quis dolor ac
            tellus scelerisque varius eu sit amet dolor. Duis nec elit odio.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job" className=" img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
