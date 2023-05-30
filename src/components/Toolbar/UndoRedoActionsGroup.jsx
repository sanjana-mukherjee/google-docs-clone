import { CheckBadgeIcon, PaintBrushIcon, PrinterIcon } from "@heroicons/react/24/outline";
import ArrowGoBackFillIcon from "remixicon-react/ArrowGoBackFillIcon";
import ArrowGoForwardFillIcon from "remixicon-react/ArrowGoForwardFillIcon";

import IconButton from "../../common/IconButton";
import ZoomActionElement from "./ZoomActionElement";

const ACTION_BUTTONS = [
  {
    icon: <ArrowGoBackFillIcon size={14} />,
    tooltip: "Undo (Ctrl + U)",
    onClick: (editor) => editor.chain().focus().undo().run(),
  },
  {
    icon: <ArrowGoForwardFillIcon size={14} />,
    tooltip: "Redo (Ctrl + Y)",
    onClick: (editor) => editor.chain().focus().redo().run(),
  },
  { icon: <PrinterIcon />, tooltip: "Print (Ctrl + P)", onClick: print },
  { icon: <CheckBadgeIcon />, tooltip: "Spelling and grammer check" },
  { icon: <PaintBrushIcon />, tooltip: "Paint format" },
];

export default function UndoRedoActionsGroup({ editor }) {
  return (
    <div className="flex items-center gap-4">
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
      <ZoomActionElement />
    </div>
  );
}
