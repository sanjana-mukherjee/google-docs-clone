import {
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Lock2LineIcon from "remixicon-react/Lock2LineIcon";
import IconButton from "../../common/IconButton";
import Tooltip from "../../common/Tooltip";

export default function ProfileRow({ className = "" }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <IconButton tooltip="Last edit was 2 hours ago">
        <ClockIcon className="h-6 w-6" />
      </IconButton>
      <IconButton tooltip="Open comment history">
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
      </IconButton>
      <IconButton tooltip="Join a call here or present this tab to the call">
        <VideoCameraIcon className="h-6 w-6" />
      </IconButton>
      <Tooltip tooltip="Private only to me">
        <button className="inline-flex items-center gap-2 rounded-full bg-[#c2e7ff] px-5 py-2.5 font-medium tracking-wider text-gray-700 hover:shadow-md">
          <Lock2LineIcon size={16} className="text-black" />
          <span className="text-sm">Share</span>
        </button>
      </Tooltip>
      <Tooltip
        tooltip={
          <div>
            <p>Google Account</p>
            <p className="text-gray-400">Sanjana Mukherjee</p>
            <p className="text-gray-400">sanjana2mukherjee@gmail.com</p>
          </div>
        }
        transparentBold
      >
        <img
          className="inline-block h-8 w-8 rounded-full shadow-sm hover:ring-4 hover:ring-gray-200"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </Tooltip>
    </div>
  );
}
