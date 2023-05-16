import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import {IoIosContact} from 'react-icons/io';





const DirectLink = () => {
  return (
    <>
      <div className="relative">
        <img className="h-[600px]" src={"./image/main.webp"} alt="" srcset="" />
      </div>

      <div className="absolute top-60 left-1/3 text-white">
        <h3 className="text-lg ml-36">~~BE MY GUEST~~</h3>
        <h1 className="text-6xl">Welcome to Rio</h1>
      </div>

      <div className="absolute top-5 left-1/3 ">
        <nav className="">
          <ul className="flex space-x-36 justify-evenly text-white">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/rio">Rio</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      <Outlet/>
      </div>

      {/* second part */}

      <div className="w-2/3  h-auto text-slate-400 bg-white absolute top-[540px] left-48">
        <h1 className="mt-16 text-3xl text-center">
          A Home in the Heart of the City
        </h1>
        <div className="border w-8 m-auto mt-9 border-orange-300"></div>
        <p className=" w-[700px] ml-20 mt-9  text-center ">
          Stay in a beautiful highrise in Ipanema just off the beach close to
          many world-class cafes and restaurants. Enjoy Bossa Nova with a cold
          beer!
        </p>

        <div className="flex w-full flex-wrap mt-14 ">
          <div className="w-4/12 bg-cadet_blue text-white text-3xl">
            <h3 className="ml-20 text-center mt-20 mb-2 w-24"><span className="ml-11">Our</span> Apartment</h3>
            <div className="border w-8 m-auto border-orange-300"></div>
          </div>
          <div className="w-8/12">
            <img className="" src={"./image/apartment.webp"} alt="" srcset="" />
          </div>
          <div className="w-4/12 flex-none bg-gray-800">
            <img src={"./image/bed.webp"} alt="" srcset="" />
          </div>
          <div className="w-7/12 flex ml-16 items-center">
            <p className="text-sm w-11/12 text-justify">
              The apartment is spacious with high ceilings, large windows, an
              open balcony and a beautiful view of the beach. Stay cool with
              central A/C and wind-down comfortably in the queen sized bedroom.
            </p>
          </div>
        </div>
      </div>

      {/* second part end */}
      <div className="bg-slate-100 w-full h-[2100px] "></div>

      {/* Third part */}

      <div className="w-2/3  h-auto text-slate-400 bg-white absolute top-[1400px] left-48">
        <div className="flex w-full flex-wrap  ">
          <div className="w-8/12">
            <img
              className="max-w-xl"
              src={"./image/building.webp"}
              alt=""
              srcset=""
            />
          </div>
          <div className="w-4/12  bg-cadet_blue text-white text-3xl">
            <h3 className="ml-20 text-center mt-20 mb-2 w-28">
              Location
            </h3>
            <div className="border w-8 m-auto mt-5 border-orange-300"></div>

          </div>

          <div className="w-full h-48 mb-14">
            <p className="w-10/12  text-center mx-auto mt-14">
              Conveniently located just opposite Leblon Beach in Ipanema, our
              apartment will sweep you into the charm and excitements of Rio!
              Dine at one of our neighborhood’s many world-renowned restaurants,
              enjoy fresh-squeezed juices from one of the colourful stalls along
              the beach, and don’t miss live bossy-nova show in one of the local
              bars.
            </p>
            <ul className="text-center mt-5 hover:text-blue-400">
              <li>
                <Link to='/view-map'>VIEW MAP</Link>
              </li>
            </ul>
          </div>

          <div className="w-4/12 flex-none bg-gray-800">
            <img src={"./image/family.webp"} alt="" srcset="" />
          </div>
          <div className="w-8/12 bg-cadet_blue text-white">
            <div className="ml-10">
              <h3 className="mt-20 text-2xl">About Camila & Tiago </h3>
              <div className="border w-8 mt-6 border-orange-300"></div>
              <p className="text-sm w-10/12 text-justify mt-6">
                Hi, my name is Camila and I’m a nutritionist from the south of
                Brazil. I moved to the beautiful Ipanema neighborhood two years
                ago with my husband, Tiago. We live in a homie highrise just off
                the Leblon Beach, but in the summer we travel!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 absolute top-[2300px] left-48">
      {/* footer section one */}
        <div className="flex text-lg text-slate-700">
          <p className="w-4/12">Contact Us</p>
          <p className="w-4/12">Follow Us</p>
          <p className="w-4/12">Subscribe for Updates & Offers</p>
        </div>
        {/* footer section two */}
        <div className="flex mt-7">
          <div className="w-4/12">
          <p className="w-8 border border-yellow-400 "></p>
          </div>
          <div className="w-4/12">
          <p className="w-8 border border-yellow-400 "></p>
          </div>
          <div className="w-4/12">
          <p className="w-8 border border-yellow-400 "></p>
          </div>
        </div>

        {/* footer section three */}

        <div className="flex mt-10 text-slate-400">
          <div className="w-4/12">
          <p className="text-base w-10/12">Ask us anything! We’re here to answer any questions you have.</p>
          <p className="text-base mt-4">Email: info@mysite.com</p>
          </div>
          <div className="w-4/12 flex space-x-4 text-2xl ">
          <p className=""><FaTripadvisor/></p>
          <p className=""><FaFacebookF/></p>
          <p className=""><BsInstagram /></p>
          </div>
          <div className="w-4/12">
              <form action="">
                <input className="block w-11/12 border-[3px] py-1 px-5 outline-none  border-red-500" placeholder="Enter your email here"  type="text" />
                <button className="bg-light_gray text-white w-11/12 p-2 mt-2">Subscrib Now</button>
              </form>
          </div>
        </div>


        {/* footer section four */}

        <div className="flex mt-16 text-slate-400 space-x-1 ">
          <p ><span className="inline-block" ><AiOutlineCopyrightCircle/></span> Be my guest in Rio. Powered and secured by</p>
          <p className="underline">Wix</p>
        </div>

      </div>

      <div className="absolute top-[2600px] right-9 bg-cadet_blue p-1 w-52 rounded-lg">
        <p className=""><span className=" text-4xl text-slate-100 inline-block relative mt-4 ml-4"><IoIosContact/></span> <span className="absolute left-16 top-5 text-2xl text-white">Let's Chat!</span></p>
      </div>

    </>
  );
};

export default DirectLink;
