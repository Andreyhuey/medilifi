import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="min-h-screen section flex flex-col lg:flex-row gap-12 justify-between">
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126830.70957847485!2d3.342336!3d6.5896448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1687882992552!5m2!1sen!2sng"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center">
        <div>
          <p className="text-[#A1A7B0]">CONTACT</p>
          <h1 className="lg:text-[56px] text-[46px] font-bold lg:leading-[64px] leading-[50px] lg:max-w-[396px] text-left pt-2">
            Get In Touch With Us
          </h1>
        </div>
        <div className="flex flex-col justify-start gap-8 pt-4">
          <div className="flex gap-3">
            <div className="rounded-full p-4 bg-[#EEFAFF]">
              <AiFillMail className="bg-[#478CF7]" />
            </div>
            <div>
              <p className="text-[#3333338e]">Address</p>
              <p className="text-[#333333 font-semibold]">
                587 George Rd. Marietta, GA 30008
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-3">
            <div className="rounded-full p-4 bg-[#EEFAFF]">
              <AiFillMail className="bg-[#478CF7]" />
            </div>
            <div>
              <p className="text-[#3333338e]">Phone</p>
              <p className="text-[#333333] font-semibold">+1 (234) 567-89-00</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-3">
            <div className="rounded-full p-4 bg-[#EEFAFF]">
              <AiFillMail className="bg-[#478CF7]" />
            </div>
            <div>
              <p className="text-[#3333338e]">Mail</p>
              <p className="text-[#333333] font-semibold">help@med.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
