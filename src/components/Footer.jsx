import Link from "next/link";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="text-center text-lg text-slate-700 py-4 border-t-2 sm:mx-3 lg:mx-0 dark:text-neutral-200">
      <div className="flex justify-center text-lg py-1">
        <a href="tel:+8801971258803" className="footer-icon-hover">
          <AiFillPhone className="footer-icon" />
        </a>
        <a
          href="mailto:nadim-chowdhury@outlook.com"
          className="footer-icon-hover"
        >
          <GrMail className="footer-icon" />
        </a>
      </div>
      <h3>Dhaka, Bangladesh</h3>

      <div className="flex justify-center text-lg py-1">
        <Link
          href="https://www.facebook.com/nadim.ch0wdhury"
          className="footer-icon-hover"
        >
          <AiFillFacebook className="footer-icon" />
        </Link>
        <Link
          href="https://twitter.com/nadim_ch0wdhury"
          className="footer-icon-hover"
        >
          <AiFillTwitterCircle className="footer-icon" />
        </Link>
        <Link
          href="https://www.youtube.com/@nadim-chowdhury"
          className="footer-icon-hover"
        >
          <AiFillYoutube className="footer-icon" />
        </Link>
        <Link
          href="https://github.com/nadim-chowdhury"
          className="footer-icon-hover"
        >
          <AiFillGithub className="footer-icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nadim-chowdhury"
          className="footer-icon-hover"
        >
          <AiFillLinkedin className="footer-icon" />
        </Link>
      </div>

      <h3>Designed & Developed By <br/> Nadim Chowdhury</h3>
    </footer>
  );
}
