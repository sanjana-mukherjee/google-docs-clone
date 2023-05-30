import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import IconButton from "../../common/IconButton";

export default function NavbarHideButton({ isNavbarVisible, onNavbarVisibilityToggle }) {
  return (
    <div className="flex items-center ps-4">
      <IconButton
        isRounded={false}
        tooltip={`${isNavbarVisible ? "Hide" : "Show"} the menus (Ctrl+Shift+F)`}
        className="h-4 w-4"
        onClick={onNavbarVisibilityToggle}
      >
        <div>{isNavbarVisible ? <ArrowUpTrayIcon /> : <ArrowDownTrayIcon />}</div>
      </IconButton>
    </div>
  );
}
