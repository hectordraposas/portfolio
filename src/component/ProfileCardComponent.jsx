import myImg from "..//images/me.png";
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { IoFootsteps } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ProfileCardComponent = () => {
  return (
    <div className=" border-b-yellow-500 border-b-5 relative overflow-hidden bg-amber-50 h-[430px] md:h-[calc(100dvh_-_90px)] max-sm:w-[95%] max-md:w-[70%] max-lg:w-[50%] w-[40%] min-w-[320px] mx-auto mt-2 rounded-md shadow-2xl">
      <img
        src={myImg}
        alt="MyProfile"
        className="w-full h-full object-cover object-top mask-b-from-50% mask-b-to-90%"
      />
      <div className="absolute bottom-0 bg-black/70 h-50 w-full p-5">
        <figure className="text-slate-50 p-2">
          <h1>Hi! This is Hector Dela Cruz Raposas.</h1>
          <span className="mt-2 block">
            I build website solutions that will align perfectly with your
            business needs.
          </span>
        </figure>
        <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md mt-1">
          <figure className="text-slate-900 flex items-center gap-1 cursor-pointer">
            <span>Resume</span>
            <HiOutlineDownload />
          </figure>
          <figure className="text-slate-900 flex items-center gap-1 cursor-pointer">
            <span>Hire Me</span>
            <FaBriefcase />
          </figure>

          <figure className="text-slate-900 flex items-center gap-1 cursor-pointer">
            <span>Experiences</span>
            <IoFootsteps />
          </figure>
        </div>
        <div className="flex justify-between mt-2.5">
          <figure className="pl-2 text-xs flex items-center gap-1">
            <span className="text-slate-50">Stack: </span>
            <figure className="flex gap-0.5">
              <FaHtml5 className="text-slate-50 cursor-pointer" />
              <FaCss3Alt className="text-slate-50 cursor-pointer" />
              <FaJs className="text-slate-50 cursor-pointer" />
              <FaReact className="text-slate-50 cursor-pointer" />
              <RiTailwindCssFill className="text-slate-50 cursor-pointer" />
            </figure>
          </figure>
          <figure className="text-xs pr-2 flex items-center gap-1">
            <span className="text-slate-50">Socials: </span>
            <FaFacebookF className="text-slate-50 cursor-pointer" />
            <FaInstagram className="text-slate-50 cursor-pointer" />
            <FaTiktok className="text-slate-50 cursor-pointer" />
            <FaGithub className="text-slate-50 cursor-pointer" />
            <FaSnapchatGhost className="text-slate-50 cursor-pointer" />
            <FaXTwitter className="text-slate-50 cursor-pointer" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardComponent;
