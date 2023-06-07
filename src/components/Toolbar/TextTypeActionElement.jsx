import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { forwardRef, useState } from "react";
import Tooltip from "../../common/Tooltip";

const OPTIONS = [
  {
    label: <span className="text-sm">Normal text</span>,
    value: "Normal text",
    onClick: (editor) => editor.chain().focus().setParagraph().run(),
  },
  {
    label: <span className="text-4xl">Title</span>,
    value: "Title",
    onClick: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    label: <span className="text-xl text-gray-500">Subtitle</span>,
    value: "Subtitle",
    onClick: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    label: <span className="text-2xl">Heading 1</span>,
    value: "Heading 1",
    onClick: (editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    label: <span className="text-xl">Heading 2</span>,
    value: "Heading 2",
    onClick: (editor) => editor.chain().focus().toggleHeading({ level: 4 }).run(),
  },
  {
    label: <span className="text-lg text-gray-600">Heading 3</span>,
    value: "Heading 3",
    onClick: (editor) => editor.chain().focus().toggleHeading({ level: 5 }).run(),
  },
  {
    label: <span className="text-sm">Options</span>,
    value: "Options",
  },
];

export default function TextTypeActionElement({ editor }) {
  const [value, setValue] = useState("Normal text");

  function handleValueChange(value) {
    OPTIONS.find((opt) => opt.value === value).onClick?.(editor);
    setValue(value);
  }

  return (
    <div className="flex items-center ps-4">
      <Select.Root value={value} onValueChange={handleValueChange}>
        <Tooltip tooltip="Styles">
          <Select.Trigger className="inline-flex w-28 items-center justify-between gap-2 rounded-sm text-sm leading-none text-gray-700 outline-none hover:bg-gray-200 hover:ring-6 hover:ring-gray-200 active:bg-gray-300 active:ring-6 active:ring-gray-300 data-[placeholder]:text-gray-800">
            <Select.Value>{value}</Select.Value>
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
            <Select.Viewport>
              <Select.Group className="divide-y divide-slate-200">
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
    className="relative select-none rounded-sm py-4 pe-6 ps-10 outline-none ring-gray-100 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[highlighted]:ring-2"
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
