import { useState, useEffect } from "react";
import { getTranslations } from "../../translations/data";

// import { FaChevronRight } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { MdWhatsapp } from "react-icons/md";
// function Footer() {
//   const [data, setData] = useState(null);
//   const [language, setLanguage] = useState(localStorage.getItem("language"));

//   useEffect(() => {
//     const fetchData = async () => {
//       const translations = await getTranslations(language);
//       setData(translations);
//     };

//     fetchData();
//   }, [language]);
//   console.log(language);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   console.log(data);
//   return (
//     <div>
//       <footer className="py-10 mx-[10%] mt-10">
//         <div className="mx-auto px-4 flex flex-col md:flex-row">
//           <div className="basis-full md:basis-1/3 mb-8 text-center">
//             <img
//               src="https://www.gajerachildrenhospital.in/images/logo4.png"
//               alt="Hospital Logo"
//               className="mx-auto mb-4 w-[150px] md:w-[250px] h-[90px]"
//             />
//             <p className="text-[#023F88] mt-4 font-medium">
//               {data.footer.pera}
//             </p>
//           </div>
//           <div className="basis-full text-start md:basis-1/3 mb-8 md:text-center">
//             <h3 className="text-[#023F88] text-xl md:text-2xl font-bold border-b-2 border-orange-500 inline-block mb-4">
//               QUICK CONTACT
//             </h3>
//             <ul className="text-[#023F88] space-y-2 md:ml-28">
//               {[
//                 "house",
//                 "about",
//                 "service",
//                 "facility",
//                 "Gallery",
//                 "contact us",
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start justify-start md:justify-start"
//                 >
//                   <FaChevronRight />
//                   <a href="#" className="ml-1 hover:text-orange-500">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="basis-full md:basis-1/3 text-start md:text-left">
//             <h3 className="text-[#023F88] text-xl md:text-2xl font-bold border-b-2 border-orange-500 inline-block mb-4">
//               GET IN TOUCH
//             </h3>
//             <p className="text-[#023F88]">
//               Ishwar Palace, Varachha Main Road, Near Soham Nagar, Opposite
//               Sargam Doctor House, Hirabagh, Surat, Gujarat 395006
//             </p>
//             <p className="text-[#023F88] mt-2">
//               <strong>Phone :</strong> (0261) 2550251
//             </p>
//             <p className="text-[#023F88] mt-2">
//               <strong>Email :</strong> vasant_gajera@yahoo.com
//             </p>
//             <div className="flex justify-center md:justify-start m-6 space-x-4 text-2xl">
//               <a href="#" className="text-blue-900">
//                 <FaYoutube />
//               </a>
//               <a href="#" className="text-blue-900">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="text-blue-900">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="text-blue-900">
//                 <MdWhatsapp />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <div className="bg-[#023F88] text-white text-center py-2 text-sm md:text-lg">
//         <p className="font-bold">
//           &copy; 2024 Copyright Gajera Children Hospital. All Rights Reserved
//         </p>
//         <p className="text-xs md:text-sm">Powered By : Divine Mite Infotech</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
function Footer({ language }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const translations = await getTranslations(language);
      setData(translations);
    };

    fetchData();
  }, [language]);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <footer className="py-10 mx-auto md:mx-[9%] mt-10">
        <div className="mx-auto px-4 flex flex-col md:flex-row text-md">
          <div className="basis-full md:basis-1/3 mb-8 text-center">
            <img
              src="https://www.gajerachildrenhospital.in/images/logo4.png"
              alt="Hospital Logo"
              className="mx-auto mb-4 w-[250px] h-[90px]"
            />
            <p className="text-[#023F88] mt-4 text-xl font-[400] tracking-tighter">
              {/* Gajera Children Hospital started in 1993. We are committed to
              compassionate care and innovation. Serving the community with
              excellence, we prioritize your well-being and recovery. */}
              {data.footer.pera}
            </p>
          </div>
          <div className="basis-full text-start md:basis-1/3 mb-8 md:text-center">
            <h3 className="text-[#023F88] text-xl md:text-2xl font-bold border-b-2 border-orange-500 inline-block mb-4">
              {/* QUICK CONTACT */}
              {data.footer.quickContact.name}
            </h3>
            <ul className="text-[#023F88] space-y-2 md:ml-28">
              {[
                `${data.footer.quickContact.home}`,
                `${data.footer.quickContact.about}`,
                `${data.footer.quickContact.service}`,
                `${data.footer.quickContact.facility}`,
                `${data.footer.quickContact.gallery}`,
                `${data.footer.quickContact.contact}`,
              ].map((item, index) => (
                <li key={index} className="flex items-center font-[500]">
                  <FaChevronRight className="text-orange-500" />
                  <a href="#" className="ml-1 hover:text-orange-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-full md:basis-1/3 text-start md:text-left text-xl font-[400] tracking-tighter">
            <h3 className="text-[#023F88] text-xl md:text-2xl font-bold border-b-2 border-orange-500 inline-block mb-4">
              {/* GET IN TOUCH */}
              {data.footer.getInTouch.name}
            </h3>
            <p className="text-[#023F88]">
              {/* Ishwar Palace, Varachha Main Road, Near Soham Nagar, Opposite
              Sargam Doctor House, Hirabagh, Surat, Gujarat 395006 */}
              {data.footer.getInTouch.address}
            </p>
            <p className="text-[#023F88] mt-2">
              <span className="flex ">
                <strong>Phone :</strong>{" "}
                <div className="ml-2">
                  {data.footer.getInTouch.phone.phone1}
                  <br />
                  {data.footer.getInTouch.phone.phone2}
                </div>
              </span>
            </p>
            <p className="text-[#023F88] mt-2">
              <strong>Mobile :</strong> +91 {data.footer.getInTouch.mobile}
            </p>
            <p className="text-[#023F88] mt-2">
              <strong>Email :</strong> {data.footer.getInTouch.email}
            </p>
            <div className="flex justify-center md:justify-start m-6 space-x-4 text-2xl">
              <a
                href="https://www.youtube.com/channel/UCaVGlN3g_OpIeialUlhgk4A"
                target="_blank"
                className="text-blue-900 hover:bg-[#023F88] hover:text-white p-2 rounded-full transition delay-100 duration-300 ease-in-out"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/gajerachildrenhospital/"
                target="_blank"
                className="text-blue-900 hover:bg-[#023F88] hover:text-white p-2 rounded-full transition delay-100 duration-300 ease-in-out"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/drvasantgajera/?hl=en"
                target="_blank"
                className="text-blue-900 hover:bg-[#023F88] hover:text-white p-2 rounded-full transition delay-150 duration-300 ease-in-out"
              >
                <FaInstagram />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9824310103&text&type=phone_number&app_absent=0"
                target="_blank"
                className="text-blue-900 hover:bg-[#023F88] hover:text-white p-2 rounded-full transition delay-150 duration-300 ease-in-out"
              >
                <MdWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#023F88] text-white text-center py-2 text-sm md:text-lg">
        <p className="font-bold">
          &copy; 2024 Copyright Gajera Children Hospital. All Rights Reserved
        </p>
        <p className="text-xs md:text-sm tracking-tighter pt-1">
          Powered By : Divine Mite Infotech
        </p>
      </div>
    </div>
  );
}

export default Footer;
