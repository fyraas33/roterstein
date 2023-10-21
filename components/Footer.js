import React from "react";
import gglog from "../assest/img/ggl.png";
import logo from "../assest/img/logoblk.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="fotter">
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      ></link>

      <footer className="bg-neutral-100  text-center text-neutral-600 dark:6 lg:text-left">
        <div className="flex content-center bg-red-700 justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-center">
          <div className=" mr-12 text-white lg:block ">
            <h1 className="text-5xl">Folge uns auf</h1>
          </div>{" "}
          <a href="https://www.facebook.com/" target="blank">
            <i className="lab la-facebook-square  flex text-6xl mr-12 text-white justify-center "></i>
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <i className="lab la-instagram flex text-6xl mr-12 text-white justify-center"></i>
          </a>
        </div>
       
        <div className=" content-center cntttnt justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-center">
          <div className="grid-1 grid gap-8 md:grid-cols-5 lg:flex space-x-4  ftrabts">
          

            <div className=" ftrimg">
              <Image
                src={logo}
                alt=" Logo"
                className=""
                width={350}
                height={50}
                priority
              />
            
            </div>
            <div className="">
            <div className="vl"></div>
        
       </div>
            <div className="ftrcntc ">
              
              <p className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Herrligstrasse 39, 8048 Zurich
              </p>
              <p className=" flex items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href="mailto:info@roter-stein.ch"
                  className="body-4 sidebar-link"
                >
                  info@roter-stein.ch
                </a>
              </p>
              <p className=" flex items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="tel:043 541 82 62"
                  className="body-4 body-4 sidebar-link"
                >
                  043 541 82 62
                </a>
              </p>
            </div>
          
       {/* Products section */}
     
        
       <div className="lg:flex gglftr">
       <h1>Bewerte Uns Unter</h1>
 
   <div className="ggllog ">
              <Image
                src={gglog}
                alt=" Logo"
                className=""
                width={150}
                height={50}
                priority
              />
            
            </div>
       </div>
     
           
          </div>
          
        </div>
        
        {/*Copyright section*/}
        <div className="bg-black p-6 lg:flex justify-between  frtdwn  dark:bg-black">
          <a
            className="font-semibold text-white ml-8"
            href="https://oaase.netlify.app//"
            target="blank"
          >
            2023 © Restaurant Roter Stein - Alle Rechte Vorbehalten - Designed By OAASE
          </a>
   <div className="flex">
            <a
              className="font-semibold text-white "
              href="https://oaase.netlify.app//"
              target="blank"
            >
            Impressum 
            </a>
            <p className="font-semibold text-white mx-6">|</p>
            <a
              className="font-semibold text-white mr-8"
              href="https://oaase.netlify.app//"
              target="blank"
            >
             Datenschutz
            </a>
   </div>
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
