import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import logo from  '../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-zinc-700 text-white">
        <div className="md:ml-28">
          <span className="text-2xl font-semibold">Hours</span>
          <p className="text-gray-400 ">
            Weekdays : <span className="text-white ml-4"> 9:30am – 7:00pm</span>
          </p>
          <p className="text-gray-400 ">
            Saturday : <span className="text-white ml-5">10:00am – 6:00pm</span>
          </p>
          <p className="text-gray-400 ">
            Sunday : <span className="text-white ml-8">Closed</span>
          </p>

          <div className="flex space-x-3 mt-3">
            <Link className="p-3 bg-zinc-600 hover:bg-yellow-400 hover:text-zinc-700 ">
              {" "}
              <BsTwitter></BsTwitter>
            </Link>
            <Link className="p-3 bg-zinc-600 hover:bg-yellow-400 hover:text-zinc-700 ">
              <BsInstagram></BsInstagram>
            </Link>
            <Link className="p-3 bg-zinc-600 hover:bg-yellow-400 hover:text-zinc-700 ">
              <FaFacebookF></FaFacebookF>
            </Link>
          </div>
        </div>
        <div>
          <span className="text-2xl font-semibold">Link</span>
          <Link className="text-gray-400 hover:text-yellow-400">
            {">"} About us
          </Link>
          <Link className="text-gray-400 hover:text-yellow-400">
            {">"} Find a Used Car
          </Link>
          <Link className="text-gray-400 hover:text-yellow-400">
            {">"} Services
          </Link>
          <Link to="/blog" className="text-gray-400 hover:text-yellow-400">
            {">"} Blog
          </Link>
          <Link className="text-gray-400 hover:text-yellow-400">
            {">"} Contact
          </Link>
        </div>
        <div>
          <span className="text-2xl font-semibold">Newsletter</span>
          <div className="form-control w-80">
            <span className="text-gray-400">
              By subscribing to our company newsletter you will always be
              up-to-date on our latest promotions, deals and vehicle inventory!
            </span>

            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Email"
                className="p-4 w-full pr-16 text-xl bg-zinc-600"
              />
              <button className="p-5 bg-yellow-500 absolute top-0 right-0 rounded-l-none uppercase text-zinc-800 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-24 bg-zinc-600 flex items-center flex-col md:flex-row py-5">
      <Link to='/' className="flex justify-center space-x-1 lg:justify-start">
				<div className="flex items-center justify-center w-20 md:ml-36">
					<img src={logo} alt="" />
				</div>
				<span className="self-center text-gray-400 text-xl md:text-2xl font-semibold italic">Budget Cars</span>
			</Link>
      <p className=" text-sm  text-gray-400 my-2 md:my-0 md:ml-32">© 2022 Company Co. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
