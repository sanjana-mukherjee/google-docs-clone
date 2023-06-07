import ProfileRow from "./ProfileRow";
import MenuRow from "./MenuRow";
import TitleRow from "./TitleRow";
import docSvg from "/doc.svg";
import Tooltip from "../../common/Tooltip";

export default function Navbar() {
  return (
    <nav className="mb-3 grid grid-cols-[auto_1fr_auto] items-center gap-2">
      <Tooltip tooltip="Docs home">
        <img src={docSvg} className="row-start-1 row-end-3 w-8" />
      </Tooltip>
      <TitleRow className="row-start-1 row-end-1 -ml-1" />
      <ProfileRow className="row-start-1 row-end-3" />
      <MenuRow />
    </nav>
  );
}
