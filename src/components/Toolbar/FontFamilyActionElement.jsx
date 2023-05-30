import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { forwardRef, useState } from "react";
import Tooltip from "../../common/Tooltip";

const OPTIONS = [
  {
    label: <span className="font-['Open_Sans'] text-sm">Open Sans</span>,
    value: "Open Sans",
    onClick: (editor) => editor.chain().focus().setFontFamily("Open Sans").run(),
  },
  {
    label: <span className="font-['Inter'] text-sm">Inter</span>,
    value: "Inter",
    onClick: (editor) => editor.chain().focus().setFontFamily("Inter").run(),
  },
  {
    label: <span className="font-['Oswald'] text-sm">Oswald</span>,
    value: "Oswald",
    onClick: (editor) => editor.chain().focus().setFontFamily("Oswald").run(),
  },
  {
    label: <span className="font-['Playfair'] text-sm">Playfair</span>,
    value: "Playfair",
    onClick: (editor) => editor.chain().focus().setFontFamily("Playfair").run(),
  },
  {
    label: <span className="font-['Roboto_Mono'] text-sm">Roboto Mono</span>,
    value: "Roboto Mono",
    onClick: (editor) => editor.chain().focus().setFontFamily("Roboto Mono").run(),
  },
  {
    label: <span className="font-['Montserrat'] text-sm">Montserrat</span>,
    value: "Montserrat",
    onClick: (editor) => editor.chain().focus().setFontFamily("Montserrat").run(),
  },
  {
    label: <span className="font-['Rubik'] text-sm">Rubik</span>,
    value: "Rubik",
    onClick: (editor) => editor.chain().focus().setFontFamily("Rubik").run(),
  },
  {
    label: <span className="font-['Roboto_Slab'] text-sm">Roboto Slab</span>,
    value: "Roboto Slab",
    onClick: (editor) => editor.chain().focus().setFontFamily("Roboto Slab").run(),
  },
  {
    label: <span className="font-['Nunito_Sans'] text-sm">Nunito Sans</span>,
    value: "Nunito Sans",
    onClick: (editor) => editor.chain().focus().setFontFamily("Nunito Sans").run(),
  },
  {
    label: <span className="font-['Quicksand'] text-sm">Quicksand</span>,
    value: "Quicksand",
    onClick: (editor) => editor.chain().focus().setFontFamily("Quicksand").run(),
  },
  {
    label: <span className="font-['Bitter'] text-sm">Bitter</span>,
    value: "Bitter",
    onClick: (editor) => editor.chain().focus().setFontFamily("Bitter").run(),
  },
];

export default function FontFamilyActionElement({ editor }) {
  const [value, setValue] = useState("Open Sans");

  function handleValueChange(value) {
    OPTIONS.find((opt) => opt.value === value).onClick?.(editor);
    setValue(value);
  }

  return (
    <div className="flex items-center ps-4">
      <Select.Root value={value} onValueChange={handleValueChange}>
        <Tooltip tooltip="Font">
          <Select.Trigger className="inline-flex items-center justify-between gap-2 rounded-sm text-sm leading-none text-gray-700 outline-none hover:bg-gray-200 hover:ring-6 hover:ring-gray-200 active:bg-gray-300 active:ring-6 active:ring-gray-300">
            <Select.Value>
              <span className="inline-block w-16 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                {value}
              </span>
            </Select.Value>
            <Select.Icon className="text-gray-800">
              <ChevronDownIcon className="h-3 w-3" />
            </Select.Icon>
          </Select.Trigger>
        </Tooltip>
        <Select.Portal>
          <Select.Content
            className="overflow-hidden rounded border-2 border-gray-200 bg-white py-2 shadow-md"
            position="popper"
            sideOffset={10}
          >
            <Select.Viewport>
              <Select.Group>
                {OPTIONS.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
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
    className="relative select-none rounded-sm py-1 pe-6 ps-8 outline-none ring-gray-200 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-200 data-[highlighted]:ring-2"
    ref={forwardedRef}
    value={value}
  >
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-1 top-1/2 -translate-y-1/2">
      <CheckIcon className="h-4 w-4" />
    </Select.ItemIndicator>
  </Select.Item>
));

SelectItem.displayName = "SelectItem";
