import { FaUser } from "react-icons/fa";
import BgPolygon from "../../assets/polygon.png";
import vector from "../../assets/vector-wave.png";
import PropTypes from "prop-types";

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

function About({ HandlePopup }) {
  return (
    <div style={bgStyle} className="py-14">
      <div className="container min-h-[500px] relative z-10">
        <h1
          data-aos="fade"
          className="pt-20 tracking-wider text-4xl font-semibold text-white text-center"
        >
          About Us
        </h1>

        <div
          data-aos="fade"
          data-aos-delay="300"
          className="bg-white/80 p-10 my-10"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia
          veritatis nulla suscipit, ex labore molestias. Ullam voluptatem
          perspiciatis obcaecati nostrum dignissimos? Beatae voluptas deleniti
          provident officiis illum sequi iure? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum quia veritatis nulla suscipit, ex
          labore molestias. Ullam voluptatem perspiciatis obcaecati nostrum
          dignissimos? Beatae voluptas deleniti provident officiis illum sequi
          iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          quia veritatis nulla suscipit, ex labore molestias. Ullam voluptatem
          perspiciatis obcaecati nostrum dignissimos? Beatae voluptas deleniti
          provident officiis illum sequi iure? labore molestias. Ullam
          voluptatem perspiciatis obcaecati nostrum dignissimos? Beatae voluptas
          deleniti provident officiis illum sequi iure? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illum quia veritatis nulla
          suscipit, ex labore molestias. Ullam voluptatem perspiciatis obcaecati
          nostrum dignissimos? Beatae voluptas deleniti provident officiis illum
          sequi iure?
          <div className="pt-10 flex justify-center">
            <button
              onClick={HandlePopup}
              className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover-scale-105 duration-300"
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full">
        <img src={vector} alt="" className="mx-auto" />
      </div>
    </div>
  );
}
About.propTypes = {
  HandlePopup: PropTypes.func.isRequired,
};

export default About;
