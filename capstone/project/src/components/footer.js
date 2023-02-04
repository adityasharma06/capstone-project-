import { FaAngleDoubleRight } from "react-icons/fa";
import { FaGenderless } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import React from 'react'

export default function Footer() {
  return (
    <div>
          <div className="flex flex-col bottom-0">
      <footer className="bg-sky-700 text-white flex flex-wrap justify-around mt-12 pt-0">
        {/*slider code starts from here */}
        <div className="border-t-2 border-b-2 border-sky-900 flex bg-white ">
          <Marquee speed={45} pauseOnHover={true} gradientWidth={30}>
            
            <div className="flex flex-wrap">
              <div className="py-2 px-10">
                <a href="https://www.aicte-india/">
                  <img src={"image-icons/aicte.jpg"} alt="aicte"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://dte.maharashtra.gov.in/">
                  <img src={"image-icons/dte.jpg"} alt="dte"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="http://www.dtemaharashtra.gov.in/">
                  <img src={"image-icons/hat.jpg"} alt="h&t edu"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://www.india.gov.in/">
                  <img src={"image-icons/indiagov.jpg"} alt="indiagov"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://aaplesarkar.mahaonline.gov.in/">
                  <img src={"image-icons/mahadbt.jpg"} alt="mahadbt"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://www.maharashtra.gov.in/">
                  <img src={"image-icons/mahagov.jpg"} alt="mahagov"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://msbte.org.in/">
                  <img src={"image-icons/msbte.jpg"} alt="msbte"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://nad.gov.in/">
                  <img src={"image-icons/nad-logo-new.png"} alt="Nad"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://www.ncs.gov.in/">
                  <img src={"image-icons/ncs.png"} alt="Ncs"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://mahaeschol.maharashtra.gov.in/">
                  <img src={"image-icons/scholarship.jpg"} alt="Scholarship"></img>
                </a>
              </div>
              <div className="py-2 px-10">
                <a href="https://unnatbharatabhiyan.gov.in/">
                  <img src={"image-icons/unnatbharat.jpg"} alt="unnatbharat"></img>
                </a>
              </div>
            </div>
          </Marquee>
        </div>
        {/*Slider ends and rest of footer starts*/}
        <div className="pt-3">
          <h5 className="text-2xl pb-2 pt-3 font-semibold">
            <div className="flex items-center text-xl ">
              
              {">"} Quick Links
            </div>
          </h5>
          <ul className="list-unstyled mb-0 px-3 pt-2 pb-4">
            <li className="py-2">
              <a href="#!" className="">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Home
                </div>
              </a>
            </li>
            <li className="py-2">
              <a href="#!" className="text-white">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Community Polytechnic, Jalgaon
                </div>
              </a>
            </li>
            <li className="py-2">
              <a href="#!" className="text-white">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Right to information Act
                </div>
              </a>
            </li>
            <li className="py-2">
              <a href="#!" className="text-white">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Policies
                </div>
              </a>
            </li>
            <li className="py-2">
              <a href="#!" className="text-white">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Visit Old Website
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:border-l-2 my-10 hidden md:block">
          <br></br>
        </div>
        <div className="mr-9 pt-3 ">
          <h5 className="text-2xl pb-2 pt-3 font-semibold">
            <div className="flex items-center text-xl">
            {">"}  Other Links
            </div>
          </h5>
          <ul className="list-unstyled mb-0 px-3 pt-2 pb-4">
            <li className="py-2">
              <a href="#!" className="text-white">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Maharashtra State Board Of
                </div>
                Technical Education(MSBTE)
              </a>
            </li>
            <li className="py-2">
              <a href="#!" className="text-white">
                <div className="flex items-center">
                  <FaAngleDoubleRight className="mr-3" />
                  Directorate Of Technical{" "}
                </div>
                Education (DTE)
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="p-3 flex justify-center items-center bg-neutral-900 text-white mb-0">
        <div className="px-1">
          <FaCopyright />
        </div>
        2022 Copyright : Govt Poly, Jalgaon
      </div>
    
              </div>
      {/* <div className="p-3 flex justify-center items-center bg-neutral-900 text-white">
        <div className="px-1">
      <p>Developed by :- Aditya Sharma <br/>
      Prathamesh Sangale <br />
      Nikunj Ranga <br />
      Kushi Fule  </p>
      
      
  </div>
  */}
    </div>
  )
}