import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Dept from './Dept.jsx'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav2() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className='xl:flex justify-center my-3'>
        <nav className="lg:bg-nav-bg xl:rounded-2xl lg:w-[94rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-baseline space-x-4 w-full ">
  
  
                    {/* home */}
  
                  <Link to="/" className='className=links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Home</Link>
  
                   {/* about */}
  
                    <Link className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Institute
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Principal's Desk
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Vision & Mission
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Citizen Charter
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mandatory Disclosure
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Approvals
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Link>
  
                    
                      {/* ----------------- Admission ----------------- */}
  
                      <Link to="" className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Admission</Link>
  
  
                         {/* ----------------- Departments ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
  
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
                                                  <Link
                                                      to="Dept"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Information Technology
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Computer Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mechanical Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Civil Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electrical Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electronics & Telecommunication Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Pharmacy
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Science
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Workshop
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Applied Mechanics
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                    </Link>
  
  
  
                    {/* ----------------- Placement ----------------- */}
  
                      <Link to="" className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Placement</Link>
  
  
                      {/* ----------------- Students Corner ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Library
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Hostel
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Scholarships
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Facilities
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Events
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Link>
  
  
  
                      {/* ----------------- Others ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Alumni
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Grievance
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      MCSR
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                   <Link
                                                      to="#"
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
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Anti-Ragging Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Women Complaint Redressal Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
  
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Internal Complaint Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Grievance Redressal Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Committee For SC ST
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Right To Information ( RTI )
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
                                                                  </div>
                                                              </Menu.Items>
                                                          </Transition>
                                                      </Menu>
  
                                                  </Link>
  
                                                  
                                              )}
                                          </Menu.Item>
  
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                      </Link>
  
  
  
                      {/* ----------------- Resources ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      NPTEL Lectures
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      National Digital Library
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Swayam - Free Online Education
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Link>
  
  
  
                      {/* ----------------- Contact ----------------- */}
  
                      <Link to="" className='links p-3 m-3 text-primary hover:bg-primary hover:text-tc-nav rounded-md duration-500'>Contact</Link>


  
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


                <Link to="/" className='className=links p-3 m-3 text-primary duration-500'>Home</Link> <br/><br/><br/>


                  {/* about */}
  
                    <Link className='links p-3 m-3 text-primary rounded-md duration-500'>
  
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
                                                  <a
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Institute
                                                  </a>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <a
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Principal's Desk
                                                  </a>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <a
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Vision & Mission
                                                  </a>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <a
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Citizen Charter
                                                  </a>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <a
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mandatory Disclosure
                                                  </a>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <a
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Approvals
                                                  </a>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Link><br/><br/><br/>
  
                    
                      {/* ----------------- Admission ----------------- */}
  
                      <Link to="" className='links p-3 m-3 text-primary rounded-md duration-500'>Admission</Link><br/><br/><br/>
  
  
                         {/* ----------------- Departments ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary rounded-md duration-500'>
  
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Information Technology
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Computer Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Mechanical Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Civil Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electrical Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Electronics & Telecommunication Engineering
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Pharmacy
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Science
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Workshop
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Applied Mechanics
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                    </Link><br/><br/><br/>
  
  
  
                    {/* ----------------- Placement ----------------- */}
  
                      <Link to="" className='links p-3 m-3 text-primary rounded-md duration-500'>Placement</Link><br/><br/><br/>
  
  
                      {/* ----------------- Students Corner ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Library
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Hostel
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Scholarships
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Facilities
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Events
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Link><br/><br/><br/>
  
  
  
                      {/* ----------------- Others ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Alumni
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Grievance
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      MCSR
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                   <Link
                                                      to="#"
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
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Anti-Ragging Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Women Complaint Redressal Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
  
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Internal Complaint Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Grievance Redressal Committee
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Committee For SC ST
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
  
                                                                      <Menu.Item>
                                                                          {({ active }) => (
                                                                              <Link
                                                                                  to="#"
                                                                                  className={classNames(
                                                                                      active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                                                      'block px-4 py-2 text-sm'
                                                                                  )}
                                                                              >
                                                                                  Right To Information ( RTI )
                                                                              </Link>
                                                                          )}
                                                                      </Menu.Item>
                                                                  </div>
                                                              </Menu.Items>
                                                          </Transition>
                                                      </Menu>
  
                                                  </Link>
  
                                                  
                                              )}
                                          </Menu.Item>
  
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
                      </Link><br/><br/><br/>
  
  
  
                      {/* ----------------- Resources ----------------- */}
  
                      <Link className='links p-3 m-3 text-primary rounded-md duration-500'>
  
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
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      NPTEL Lectures
                                                  </Link>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      National Digital Library
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
  
                                          <Menu.Item>
                                              {({ active }) => (
                                                  <Link
                                                      to="#"
                                                      className={classNames(
                                                          active ? 'bg-primary text-white rounded-md' : 'text-primary',
                                                          'block px-4 py-2 text-sm'
                                                      )}
                                                  >
                                                      Swayam - Free Online Education
                                                  </Link>
                                              )}
                                          </Menu.Item>
  
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
  
  
                      </Link><br/><br/><br/>
  
  
  
                      {/* ----------------- Contact ----------------- */}
  
                      <a to="" className='links p-3 m-3 text-primary rounded-md duration-500'>Contact</a>
  
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    );
  }