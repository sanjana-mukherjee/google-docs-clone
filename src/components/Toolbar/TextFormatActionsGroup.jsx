import BoldIcon from "remixicon-react/BoldIcon";
import ItalicIcon from "remixicon-react/ItalicIcon";
import UnderlineIcon from "remixicon-react/UnderlineIcon";
import FontColorIcon from "remixicon-react/FontColorIcon";
import MarkPenLineIcon from "remixicon-react/MarkPenLineIcon";

import IconButton from "../../common/IconButton";
import ColourActionElement from "./ColorActionElement";

const ACTION_BUTTONS = [
  {
    icon: <BoldIcon size={16} />,
    tooltip: "Bold (Ctrl+B)",
    onClick: (editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    icon: <ItalicIcon size={16} />,
    tooltip: "Italic (Ctrl+I)",
    onClick: (editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    icon: <UnderlineIcon size={16} />,
    tooltip: "Underline (Ctrl+U)",
    onClick: (editor) => editor.chain().focus().toggleUnderline().run(),
  },
];

export default function TextFormatActionsGroup({ editor }) {
  return (
    <div className="flex items-center gap-4 ps-4">
      {ACTION_BUTTONS.map(({ tooltip, icon, onClick }, index) => (
        <IconButton
          key={index}
          isRounded={false}
          tooltip={tooltip}
          onClick={() => onClick(editor)}
          className={`inline-flex h-4 w-4 items-center justify-center text-gray-800`}
        >
          {icon}
        </IconButton>
      ))}
      <ColourActionElement onClick={(color) => editor.chain().focus().setColor(color).run()}>
        <FontColorIcon size={16} />
      </ColourActionElement>
      <ColourActionElement
        onClick={(color) => editor.chain().focus().toggleHighlight({ color }).run()}
      >
        <MarkPenLineIcon size={16} />
      </ColourActionElement>
    </div>
  );
}
