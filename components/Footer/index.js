import React from "react";
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative  bg-footer-bg-mobile md:bg-footer-bg bg-cover bg-center h-[613px]  mt-32">

    <div className=" absolute bg-grayHead bg-opacity-5 rounded-full md:p-10 w-28 h-28 md:w-80 md:h-80 flex justify-center items-center md:right-14 top-0 right-[34%]  mt-[-50px] md:mt-[-110px]">
    <div className="absolute bg-grayHead bg-opacity-10 rounded-full md:p-10 w-24 h-24 md:w-72 md:h-72 flex justify-center items-center ">
     <div className="absolute bg-grayIcon rounded-full p-4 md:p-10 w-20 h-20 md:w-64 md:h-64 flex justify-center items-center ">
    {/* Logo-03 sadece mobilde görüntülenecek */}
    <img src="/assets/images/logo/logo-05.png" alt="" className="hidden md:block" />



    {/* Logo-04 sadece masaüstü ve tabletlerde görüntülenecek */}
   
    <img src="/assets/images/logo/logo-03.png" alt="" className="block md:hidden" />
    
    
  </div>
    </div> 
   
    </div>
   
    
   
      <div className=" hidden md:block absolute md:left-32 md:top-32 top-20 left-10 text-sm md:text-base text-grayIcon">
        <div className="flex space-x-8">
          <div>
            <h1>REACH OUT</h1>
          </div>
          <div className="mt-3">
            <p>emraheskibagci@gmail.com</p>
            <p>
              Phone: <span className="underline">(480) 726-7009</span>
            </p>
            <p>
              Fax: <span className="underline">(480) 726-7009</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-8 mt-12">
          <div>
            <h1>ABOUT US </h1>
          </div>
          <div lassName="mt-3">
            <p>Şirketimiz</p>
            <p>Out Doctors</p>
            <p>Career</p>
          </div>
        </div>
        <div className="flex space-x-3 mt-28">
        <div>
        <FaFacebook/>
    </div>
    <div>
        <FaInstagram/>
    </div>
    <div>
        <FaLinkedin/>
    </div>
        </div>
      </div>
      <div className="md:hidden absolute    w-full flex flex-col justify-center items-center top-40">
          <div>
            <h1 className="uppercase font-[300] text-lg  text-grayIcon">
              connect
            </h1>
          </div>   
          <div className="text-grayIcon text-center text-sm mt-5 space-y-3">
            <div>fax:(480) 786-9684</div>
            <div>Phone:(480) 726-7009</div>
          </div>  
          <div className="mt-6 space-y-4">
          <div className="flex bg-linkedinLogo p-2 text-grayIcon  space-x-1 rounded ">
             <div className="mr-3" > <img src="/assets/images/footerLinkedin.png" alt="" /> </div>
             <div className="text-sm font-[200] border-l pl-3  border-solid border-commentTimeText ">Linkedin</div>
          </div>
          <div className="flex bg-facebookLogo p-2 text-grayIcon  space-x-1 rounded ">
             <div className="mr-2" > <img src="/assets/images/footerFacebook.png" alt="" /> </div>
             <div className="text-sm font-[200] border-l pl-3 border-solid border-commentTimeText ">Facebook</div>
          </div>
          </div> 
      </div>
    </div>
  );
}

export default Footer;
