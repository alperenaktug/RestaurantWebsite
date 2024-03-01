import PrimaryButton from "../Shared/PrimaryButton";
import HeroBg from "../../assets/heroBg.png";
import HeroImg from "../../assets/hero.png";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

function Hero() {
  return (
    <div style={BgStyle} className="relative z-[-1]">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <div className="space-y-7 text-dark flex flex-col justify-center items-center sm:items-start sm:text-left">
            <h1 data-aos="fade-up" className="text-5xl">
              Fresh & Healty Meal plan{" "}
              <span className="text-secondary font-cursive text-7xl">
                Delivery
              </span>{" "}
              in Miami
            </h1>
            <p data-aos-delay="500" className="lg:pr-64">
              Delicious Meals Delivered to Your Door From $132.95 per week
            </p>
            <div>
              <PrimaryButton />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="relative z-30 order-1 sm:order-2"
          >
            <img
              src={HeroImg}
              alt=""
              className="w-full sm:scale-125 sm:translate-y-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
