import Link from "next/link";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-center text-md sm:text-xl text-slate-700 py-3 border-t-2 sm:mx-3 lg:mx-0">
      <h3>+880 1971 258803</h3>
      <h3>nadim-chowdhury@outlook.com</h3>
      <h3>Dhaka, Bangladesh</h3>

      <div className="flex justify-center text-2xl py-1">
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

      <h3>Design & Developed By Nadim Chowdhury</h3>
    </footer>
  );
}
