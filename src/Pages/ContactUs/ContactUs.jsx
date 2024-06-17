import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
function ContactUs() {
  AOS.init({
    duration: 2000,
  });
  return (
    <>
      <div className="text-center my-10" data-aos="fade-up">
        <h1 className="text-[#023F88] p-2 text-3xl md:text-4xl font-semibold border-b-2 border-orange-500 inline-block mb-4">
          Stay in touch with us
        </h1>
        <p className="text-2xl text-black">
          If you have any questions, feel free to contact us
        </p>
      </div>
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mx-4 md:mx-44 p-4">
        <div
          class="basis-full md:basis-1/3 flex items-center bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-4"
          data-aos="fade-up"
        >
          <div class="bg-[#023F88] text-white text-3xl p-3 rounded-md">
            <FaPhone />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100 opacity-95">
              Call To Make An Appointment
            </h3>
            <p class="text-[rgb(13,110,253)] text-lg">
              <a href="tel:(0261) 2550251">(0261) 2550251</a>
            </p>
            <p class="text-[rgb(13,110,253)] text-lg">
              <a href="tel:9824310103">9824310103</a>
            </p>
          </div>
        </div>
        <div
          class="basis-full md:basis-1/3 flex items-center bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-4"
          data-aos="fade-up"
        >
          <div class="bg-[#023F88] text-white text-3xl p-3 rounded-md">
            <FaLocationDot />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100 opacity-95">
              Visit Our Hospital
            </h3>
            <p class="text-[rgb(13,110,253)] text-md">
              14, Ishwar Palace, Varachha Main Road, Near Soham Nagar, Opposite
              Sargam Doctor House, Hirabagh, Surat, Gujarat 395006
            </p>
          </div>
        </div>
        <div
          class="basis-full md:basis-1/3 flex items-center bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-4"
          data-aos="fade-up"
        >
          <div class="bg-[#023F88] text-white text-3xl p-3 rounded-md">
            <FaEnvelopeOpen />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100 opacity-95">
              Email To Get Enquiry
            </h3>
            <p class="text-[rgb(13,110,253)] text-md">
              <a href="mailto:vasant_gajera@yahoo.com">
                vasant_gajera@yahoo.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-16 mx-4 md:mx-36" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4536370883507!2d72.85827607431155!3d21.21385268139741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f468ad3bfaf%3A0x3fecdcb920f8cc52!2sGajera%20Children%20Hospital!5e0!3m2!1sen!2sin!4v1706107184868!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
