import React from 'react';
// import 'tailwindcss/dist/base.css';
import logo from './imgs/logo.png'

const Header = () => {
return (
<>
<div>
<div className='bg-primary h-48 mt-0 rounded-xl'>
<img
className="w-36 h-38 sm:m-auto ml-4 pt-6 lg:pl-6 float-left"
src={logo}
alt="College Logo"
/>
<div className="flex justify-center  items-center text-center">
<div className="ml-4">
<h1 className="font-bold text-white stext-center text-xl lg:text-5xl pt-8 pb-2">Government Polytechnic Jalgaon </h1> 
<h2 className=" font-medium text-white text-center   lg:text-2xl py-4"> शासकीय तंत्रनिकेतन, जळगांव </h2>
<p className="text-sm text-white mx-auto text-center">MSBTE Code: 5008 | MSBTE Code: 0018/1564 </p>
</div>
</div>
</div>
</div>
</>
);
};

export default Header;

//save file as header.jsx