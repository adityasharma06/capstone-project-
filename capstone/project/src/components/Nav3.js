import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react';

import { BiChevronDown } from "react-icons/bi";
import {  NavLink } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
    {/* <marquee className=" mt-1 bg-nav-bg p-4 rounded-md" behavior="scroll" direction="left"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui atque veniam quas perferendis ea commodi consequatur vitae, molestias accusantium? Tenetur eligendi exercitationem ipsa ipsam culpa expedita at, vel dolores fugit.</marquee> */}
      <div className='xl:flex justify-center my-1'>
        <nav className="lg:bg-nav-bg xl:rounded-2xl w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-baseline space-x-4 w-full ">
  
  
                    {/* home */}
  
                  <NavLink to="/" className='className=links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Home</NavLink>
  
                   {/* about */}
  
                    <Menu className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      About
                                      <BiChevronDown className={`icon -mr-1 ml-2 mt-1 h-5 w-5 `} aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Institute
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Principal's Desk
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to ="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Vision & Mission
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Citizen Charter
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mandatory Disclosure
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Approvals
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Menu>
  
                    
                      {/* ----------------- Admission ----------------- */}
  
                      <NavLink to="/" className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Admission</NavLink>
  
  
                         {/* ----------------- Departments ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Departments
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Information Technology
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Computer Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mechanical Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Civil Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electrical Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electronics & Telecommunication Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Pharmacy
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Science
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Workshop
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Applied Mechanics
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
                    </Menu>
  
  
  
                    {/* ----------------- Placement ----------------- */}
  
                      <NavLink to="/" className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Placement</NavLink>
  
  
                      {/* ----------------- Students Corner ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Students Corner
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5 opacity-80" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Library
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Hostel
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to="/"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Scholarships
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Facilities
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Events
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
                      </Menu>
  
  
  
                      {/* ----------------- Others ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Others
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Alumni
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Grievance
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      MCSR
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                   <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
  
  
                                                      {/* ----- nested ----- */}
  
  
  
  
                                                      <Menu as="div" className="relative inline-block text-left">
                                                          <div>
                                                              <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                                                  Committee
                                                                  <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5 opacity-80" aria-hidden="true" />
                                                              </Menu.Button>
                                                          </div>
  
                                                          <Transition
                                                              as={Fragment}
                                                              enter="transition ease-out duration-200"
                                                              enterFrom="transform opacity-0 scale-95"
                                                              enterTo="transform opacity-100 scale-100"
                                                              leave="transition ease-in duration-75"
                                                              leaveFrom="transform opacity-100 scale-100"
                                                              leaveTo="transform opacity-0 scale-95"
                                                          >
                                                              <Menu.Items className="absolute right-55 z-10 mt-12 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                                                  <div className="py-1">
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Anti-Ragging Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Women Complaint Redressal Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
  
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Internal Complaint Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Grievance Redressal Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                              className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Committee For SC ST
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Right To Information ( RTI )
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
                                                                  </div>
                                                              </Menu.Items>
                                                          </Transition>
                                                      </Menu>
  
                                                  </NavLink>
  
                                                  
                                              )}
                                          </Menu.Item>
  
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                      </Menu>
  
  
  
                      {/* ----------------- Resources ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Resourses
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5 opacity-80" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink
                                                      to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      NPTEL Lectures
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                 <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      National Digital Library
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Swayam - Free Online Education
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Menu>
  
  
  
                      {/* ----------------- Contact ----------------- */}
  
                      <NavLink to={"/"}className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Contact</NavLink>


  
                  </div>
                </div>
              </div>



              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-600"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div ref={ref} className="p-10 space-y-1 sm:px-3">


                <NavLink to={"/"} className='className=links p-3 m-3 text-primary duration-500'>Home</NavLink> <br/><br/><br/>


                  {/* about */}
  
                    <Menu className='links p-3 m-3 text-primary rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      About
                                      <BiChevronDown className={`icon -mr-1 ml-2 mt-1 h-5 w-5 `} aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Institute
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Principal's Desk
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Vision & Mission
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Citizen Charter
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mandatory Disclosure
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Approvals
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Menu><br/><br/><br/>
  
                    
                      {/* ----------------- Admission ----------------- */}
  
                      <NavLink to={"/"} className='links p-3 m-3 text-primary rounded-md duration-500'>Admission</NavLink><br/><br/><br/>
  
  
                         {/* ----------------- Departments ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary rounded-md duration-500'>
  
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Departments
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Information Technology
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Computer Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mechanical Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Civil Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electrical Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electronics & Telecommunication Engineering
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Pharmacy
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Science
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Workshop
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Applied Mechanics
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                    </Menu><br/><br/><br/>
  
  
  
                    {/* ----------------- Placement ----------------- */}
  
                      <NavLink to={"/"} className='links p-3 m-3 text-primary rounded-md duration-500'>Placement</NavLink><br/><br/><br/>
  
  
                      {/* ----------------- Students Corner ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Students Corner
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5 opacity-80" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Library
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Hostel
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Scholarships
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Facilities
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Events
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Menu><br/><br/><br/>
  
  
  
                      {/* ----------------- Others ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Others
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Alumni
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Grievance
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      MCSR
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                   <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
  
  
                                                      {/* ----- nested ----- */}
  
  
  
  
                                                      <Menu as="div" className="relative inline-block text-left">
                                                          <div>
                                                              <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                                                  Committee
                                                                  <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5 opacity-80" aria-hidden="true" />
                                                              </Menu.Button>
                                                          </div>
  
                                                          <Transition
                                                              as={Fragment}
                                                              enter="transition ease-out duration-200"
                                                              enterFrom="transform opacity-0 scale-95"
                                                              enterTo="transform opacity-100 scale-100"
                                                              leave="transition ease-in duration-75"
                                                              leaveFrom="transform opacity-100 scale-100"
                                                              leaveTo="transform opacity-0 scale-95"
                                                          >
                                                              <Menu.Items className="absolute right-55 z-10 mt-12 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                                                  <div className="py-1">
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Anti-Ragging Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Women Complaint Redressal Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
  
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Internal Complaint Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Grievance Redressal Committee
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Committee For SC ST
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <NavLink to={"/"}
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Right To Information ( RTI )
                                                                              </NavLink>
                                                                          )}
                                                                      </Menu.Item>
                                                                  </div>
                                                              </Menu.Items>
                                                          </Transition>
                                                      </Menu>
  
                                                  </NavLink>
  
                                                  
                                              )}
                                          </Menu.Item>
  
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                      </Menu><br/><br/><br/>
  
  
  
                      {/* ----------------- Resources ----------------- */}
  
                      <Menu className='links p-3 m-3 text-primary rounded-md duration-500'>
  
                          <Menu as="div" className="relative inline-block text-left">
                              <div>
                                  <Menu.Button className="inline-flex w-full justify-center rounded-md p-0 font-medium shadow-sm focus:outline-none">
                                      Resourses
                                      <BiChevronDown className="-mr-1 ml-2 mt-1 h-5 w-5 opacity-80" aria-hidden="true" />
                                  </Menu.Button>
                              </div>
  
                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                              >
                                  <Menu.Items className="absolute right-55 z-10 mt-10 w-60 p-5 origin-top-left rounded-xl bg-nav-bg shadow-lg duration-300 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      NPTEL Lectures
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      National Digital Library
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <NavLink to={"/"}
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Swayam - Free Online Education
                                                  </NavLink>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Menu><br/><br/><br/>
  
  
  
                      {/* ----------------- Contact ----------------- */}
  
                      <NavLink to={"/"} className='links p-3 m-3 text-primary rounded-md duration-500'>Contact</NavLink>
  
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
      </>
    );
  }
  
  