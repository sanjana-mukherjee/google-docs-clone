import * as Select from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  PencilSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { forwardRef, useState } from "react";
import Tooltip from "../../common/Tooltip";

const OPTIONS = [
  {
    icon: <PencilSquareIcon />,
    label: "Editing",
    desc: "Edit documents directly",
    value: "editing",
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon />,
    label: "Suggesting",
    desc: "Edits become suggestions",
    value: "suggesting",
  },
  {
    icon: <EyeIcon />,
    label: "Viewing",
    desc: "Read or print final document",
    value: "viewing",
  },
];

export default function EditingModeActionElement() {
  const [value, setValue] = useState("editing");
  return (
    <div className="ms-auto flex items-center border-none">
      <Select.Root value={value} onValueChange={setValue}>
        <Tooltip tooltip={`${value.charAt(0).toUpperCase() + value.slice(1)} mode`}>
          <Select.Trigger className="inline-flex w-32 items-center justify-between gap-2 rounded-sm text-sm leading-none outline-none hover:bg-gray-200 hover:ring-6 hover:ring-gray-200">
            <Select.Value>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4">{OPTIONS.find((opt) => opt.value === value).icon}</div>
                <div className="text-gray-800">
                  {OPTIONS.find((opt) => opt.value === value).label}
                </div>
              </div>
            </Select.Value>
            <Select.Icon className="text-gray-800">
              <ChevronDownIcon className="h-3 w-3" />
            </Select.Icon>
          </Select.Trigger>
        </Tooltip>
        <Select.Portal>
          <Select.Content
            className="overflow-hidden rounded border-2 border-gray-200 bg-white shadow-md"
            position="popper"
            sideOffset={10}
          >
            <Select.Viewport className="py-2">
              <Select.Group>
                {OPTIONS.map(({ value, label, icon, desc }) => (
                  <SelectItem key={value} value={value}>
                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5">{icon}</div>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

const SelectItem = forwardRef(({ value, children }, forwardedRef) => (
  <Select.Item
    className="select-none rounded-sm px-3 py-1 text-sm outline-none ring-gray-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:ring-2"
    ref={forwardedRef}
    value={value}
  >
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));

SelectItem.displayName = "SelectItem";
