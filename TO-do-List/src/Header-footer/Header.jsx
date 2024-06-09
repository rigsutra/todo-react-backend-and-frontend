/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

const Header = (props) => {
  const isLoggedin = props.isLoggedin;
  const setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex p-1 ml-0 mr-0 justify-evenly bg-green-300">
      <img src={logo} width={160} alt="Todo Logo" />

      <nav>
        <ul className="flex flex-row m-5 gap-10 ">
          <li className="active:hover:bg-green-700 rounded-sm">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="active:hover:bg-green-400">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="active:hover:bg-green-400">
            <NavLink to="/Contact us">Contact us</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row m-2 gap-4">
        {!isLoggedin && (
          <Link to="signin">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-green-400">
              Login
            </button>
          </Link>
        )}
        {!isLoggedin && (
          <Link to="signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-green-400">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="signin">
            <button
              className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 hover:bg-green-400"
              onClick={() => {
                setIsLoggedin(false);
                toast.success("Logged out");
              }}
            >
              Log out
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/profile">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Profile
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
