import ListUnorderedIcon from "remixicon-react/ListUnorderedIcon";
import ListOrderedIcon from "remixicon-react/ListOrderedIcon";
import IndentIncreaseIcon from "remixicon-react/IndentIncreaseIcon";
import IndentDecreaseIcon from "remixicon-react/IndentDecreaseIcon";
import FormatClearIcon from "remixicon-react/FormatClearIcon";

import IconButton from "../../common/IconButton";
import TextAlignActionElement from "./TextAlignActionElement";

const ACTION_BUTTONS = [
  {
    icon: <ListUnorderedIcon size={16} />,
    tooltip: "Bulleted list (Ctrl+Shift+8)",
    onClick: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    icon: <ListOrderedIcon size={16} />,
    tooltip: "Numbered list (Ctrl+Shift+7)",
    onClick: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    icon: <IndentDecreaseIcon size={16} />,
    tooltip: "Decrease Indent (Ctrl+[])",
  },
  {
    icon: <IndentIncreaseIcon size={16} />,
    tooltip: "Increase Indent (Ctrl+])",
  },
  {
    icon: <FormatClearIcon size={16} />,
    tooltip: "Clear formatting (Ctrl+\\)",
    onClick: (editor) => editor.chain().focus().unsetAllMarks().run(),
  },
];

export default function AlignIndentActionsGroup({ editor }) {
  return (
    <div className="flex items-center gap-4 ps-4">
      <TextAlignActionElement editor={editor} />
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
