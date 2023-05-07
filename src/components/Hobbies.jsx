import { BsBookHalf, BsCameraFill, BsFileMusicFill } from "react-icons/bs";
import { IoLogoGameControllerB, IoMdFootball } from "react-icons/io";

export default function Hobbies() {
  return (
    <div className="py-2 sm:mx-3 lg:mx-0">
      <h2 className="title">My Hobbies</h2>

      <div className="grid grid-cols-3 gap-2 my-3">
        <h4 className="hobbies">
          <BsBookHalf className="mr-2 w-4 h-4" />
          Reading
        </h4>
        <h4 className="hobbies">
          <IoLogoGameControllerB className="mr-2 w-4 h-4" />
          Gaming
        </h4>
        <h4 className="hobbies">
          <BsFileMusicFill className="mr-2 w-4 h-4" />
          Listening
        </h4>
        <h4 className="hobbies">
          <BsCameraFill className="mr-2 w-4 h-4" />
          Photography
        </h4>
        <h4 className="hobbies">
          <IoMdFootball className="mr-2 w-4 h-4" />
          Playing
        </h4>
      </div>
    </div>
  );
}
