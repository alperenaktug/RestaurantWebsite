import { FaCaretDown, FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Gains",
    link: "/#",
  },
];

function Navbar({ HandlePopup }) {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          <div className="font-bold">N&F</div>
          <div>
            <ul className="flex items-center gap-10">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}

              <li className="cursor-pointer group  ">
                <a
                  href="
                /#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black show-md p-2">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl inline-block w-full rounded-md p-2 hover:primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover-scale-105 duration-300"
                >
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
Navbar.propTypes = {
  HandlePopup: PropTypes.func.isRequired,
};

export default Navbar;
