import { ChatBubbleBottomCenterTextIcon, LinkIcon, PhotoIcon } from "@heroicons/react/24/outline";
import IconButton from "../../common/IconButton";

const getUrl = () => window.prompt("URL");

const ACTION_BUTTONS = [
  {
    icon: <LinkIcon />,
    tooltip: "Insert link (Ctrl+K)",
    onClick: (editor) => editor.chain().focus().toggleLink({ href: getUrl() }).run(),
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon />,
    tooltip: "Add comment (Ctrl+Alt+M)",
  },
  {
    icon: <PhotoIcon />,
    tooltip: "Insert image",
    onClick: (editor) => editor.chain().focus().setImage({ src: getUrl() }).run(),
  },
];

export default function LinkCommentActionsGroup({ editor }) {
  return (
    <div className="flex items-center gap-4 ps-4">
      {ACTION_BUTTONS.map(({ tooltip, icon, onClick }, index) => (
        <IconButton
          key={index}
          isRounded={false}
          tooltip={tooltip}
          className={`h-4 w-4`}
          onClick={() => onClick(editor)}
        >
          {icon}
        </IconButton>
      ))}
    </div>
  );
}
