import AlignLeftIcon from "remixicon-react/AlignLeftIcon";
import AlignCenterIcon from "remixicon-react/AlignCenterIcon";
import AlignRightIcon from "remixicon-react/AlignRightIcon";
import AlignJustifyIcon from "remixicon-react/AlignJustifyIcon";

import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";
import Tooltip from "../../common/Tooltip";

const OPTIONS = [
  {
    label: <AlignLeftIcon size={16} />,
    value: "left",
    tooltip: "Left align (Ctrl+Shift+L)",
    onClick: (editor) => editor.chain().focus().setTextAlign("left").run(),
  },
  {
    label: <AlignCenterIcon size={16} />,
    value: "center",
    tooltip: "Center align (Ctrl+Shift+E)",
    onClick: (editor) => editor.chain().focus().setTextAlign("center").run(),
  },
  {
    label: <AlignRightIcon size={16} />,
    value: "right",
    tooltip: "Right align (Ctrl+Shift+R)",
    onClick: (editor) => editor.chain().focus().setTextAlign("right").run(),
  },
  {
    label: <AlignJustifyIcon size={16} />,
    value: "justify",
    tooltip: "Justify (Ctrl+Shift+J)",
    onClick: (editor) => editor.chain().focus().setTextAlign("justify").run(),
  },
];

export default function TextAlignActionElement({ editor }) {
  function handleValueChange(value) {
    OPTIONS.find((opt) => opt.value === value).onClick(editor);
  }

  return (
    <Select.Root defaultValue="left" onValueChange={handleValueChange}>
      <Tooltip tooltip="Align">
        <Select.Trigger className="inline-flex items-center gap-2 rounded-sm text-sm leading-none outline-none hover:bg-gray-200 hover:ring-6 hover:ring-gray-200 active:bg-gray-300 active:ring-6 active:ring-gray-300 data-[placeholder]:text-gray-800">
          <Select.Value />
          <Select.Icon className="text-gray-800">
            <ChevronDownIcon className="h-3 w-3" />
          </Select.Icon>
        </Select.Trigger>
      </Tooltip>
      <Select.Portal>
        <Select.Content
          className="overflow-hidden rounded border-2 border-gray-200 bg-gray-100 shadow-md"
          position="popper"
          sideOffset={10}
        >
          <Select.Viewport className="py-2">
            <Select.Group className="flex gap-2 px-2">
              {OPTIONS.map(({ value, label, tooltip }) => (
                <SelectItem value={value} key={value} tooltip={tooltip}>
                  {label}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef(({ value, children, tooltip }, forwardedRef) => (
  <Select.Item
    className="select-none rounded-sm p-1 text-sm outline-none ring-gray-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[state='checked']:bg-blue-100 data-[highlighted]:ring-2 data-[state='checked']:ring-2 data-[state='checked']:ring-blue-100"
    ref={forwardedRef}
    value={value}
  >
    <Select.ItemText>
      <Tooltip tooltip={tooltip}>
        <div className="h-4 w-4">{children}</div>
      </Tooltip>
    </Select.ItemText>
  </Select.Item>
));

SelectItem.displayName = "SelectItem";
