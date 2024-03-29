import React, { useEffect } from "react";
import { GlobalContext } from "../context/Global";
import { Link } from "react-router-dom";
import land1 from "../assets/images/landing-page/land1.png";
import land2 from "../assets/images/landing-page/land2.png";
import land3 from "../assets/images/landing-page/land3.png";
import land4 from "../assets/images/landing-page/land4.png";
import land5 from "../assets/images/landing-page/land5.png";
import Fade from "react-reveal/Fade";

function Homepage() {
  const { rendered, setRendered } = React.useContext(GlobalContext);
  useEffect(() => {
    setRendered("homepage");
  }, []);

  return (
    <>
      <div className="flex h-[80vh] items-center justify-center border-b-2">
        <Fade left>
          <img src={land1} alt="land1" />
        </Fade>
        <Fade right>
          <h1 className="text-9xl">
            Engage in Interesting threads with the people around you.
          </h1>
        </Fade>
      </div>
      <div className="flex h-[80vh] items-center justify-center border-b-2">
        <Fade left>
          <h1 className="text-9xl">
            Do whatever you want , because no one has enough money to moderate
            this anyway.
          </h1>
        </Fade>
        <Fade right>
          <img src={land2} alt="land2" />
        </Fade>
      </div>
      <div className="flex h-[80vh] items-center justify-center border-b-2">
        <Fade left>
          <img src={land3} alt="land3" />
        </Fade>
        <Fade right>
          <h1 className="text-9xl">
            Engage in an heated conversation with that friend of yours.
          </h1>
        </Fade>
      </div>
      <div className="flex h-[80vh] items-center justify-center border-b-2">
        <Fade left>
          <h1 className="text-9xl">
            Over tens of thousands of unique threads curated by our zero
            userbase.
          </h1>
        </Fade>
        <Fade right>
          <img src={land4} alt="land4" />
        </Fade>
      </div>
      <div className="flex h-[80vh] items-center justify-center border-b-2">
        <Fade left>
          <img src={land5} alt="land5" />
        </Fade>
        <Fade right>
          <h1 className="text-9xl">
            For heavensake don't turn this into a dating site.
          </h1>
        </Fade>
      </div>
      <div className="flex h-[80vh] items-center justify-around flex-col border-b-2">
        <h1 className="text-8xl text-center">
          join today for the best experience of your life.
        </h1>
        <Fade bottom>
          <ul>
            <li className="px-8 py-4 rounded-lg bg-transparent text-black ring-2 hover:cursor-pointer ring-pink-500 text-3xl hover:bg-pink-500 hover:text-white">
              <Link to="/register">Join Now</Link>
            </li>
          </ul>
        </Fade>
      </div>
    </>
  );
}

export default Homepage;
