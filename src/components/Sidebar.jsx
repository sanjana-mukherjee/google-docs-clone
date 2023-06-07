import calendar from "/calendar.png";
import contacts from "/contacts.png";
import keep from "/keep.png";
import maps from "/maps.png";
import tasks from "/tasks.png";
import { PlusIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import IconButton from "../common/IconButton";
import Tooltip from "../common/Tooltip";

const ITEMS = [
  { imgSrc: calendar, tooltip: "Calendar" },
  { imgSrc: keep, tooltip: "Keep" },
  { imgSrc: tasks, tooltip: "Tasks" },
  { imgSrc: contacts, tooltip: "Contacts" },
  { imgSrc: maps, tooltip: "Maps" },
];

export default function Sidebar({ isSidebarVisible, onSidebarVisibilityToggle }) {
  return (
    <div className="ms-3">
      {isSidebarVisible && (
        <div className="flex flex-col items-center gap-8 p-3">
          {ITEMS.map(({ imgSrc, tooltip }) => (
            <IconButton key={imgSrc} tooltip={tooltip}>
              <img src={imgSrc} className="h-7 w-7 p-1" />
            </IconButton>
          ))}
          <div className="h-0.5 w-full bg-gray-300"></div>
          <IconButton tooltip="Get Add-ons">
            <PlusIcon className="h-6 w-6" />
          </IconButton>
        </div>
      )}
      <Tooltip tooltip={isSidebarVisible ? "Hide side panel" : "Show side panel"}>
        <button
          onClick={onSidebarVisibilityToggle}
          className={`fixed bottom-3 flex items-center rounded-full p-2.5 transition-all duration-300 ${
            isSidebarVisible ? "right-2" : "-right-8 bg-white pe-10 shadow-lg hover:-right-5"
          } hover:bg-gray-200 active:bg-gray-300`}
        >
          <ChevronRightIcon
            className={`h-4 w-4 transition duration-300 ${isSidebarVisible ? "" : "rotate-180"}`}
          />
        </button>
      </Tooltip>
    </div>
  );
}
