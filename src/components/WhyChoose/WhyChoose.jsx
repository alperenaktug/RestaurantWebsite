import { FaBus } from "react-icons/fa";

function WhyChoose() {
  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container">
          <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
            Why Choose Us
          </h1>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit amet color consectetur, adipisicing
                </p>
                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                  ...
                </p>
                <FaBus className="text-5xl text-primary" />
              </div>{" "}
              {/* Close the first grid item div here */}
              <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                <FaBus className="text-5xl text-secondary" />
                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                  ...
                </p>
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit amet color consectetur, adipisicing
                </p>
              </div>
              <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit amet color consectetur, adipisicing
                </p>
                <p className="text-5xl rotate-90 text-primary text-center translate-x-5">
                  ...
                </p>
                <FaBus className="text-5xl text-primary" />
              </div>{" "}
              {/* Close the first grid item div here */}
              <div className="flex text-center justify-center items-center flex-col gap-2 px-2">
                <FaBus className="text-5xl text-secondary" />
                <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                  ...
                </p>
                <p className="text-dark/70 font-semibold">
                  Lorem ipsum dolor sit amet color consectetur, adipisicing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
