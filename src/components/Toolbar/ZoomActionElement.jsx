import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment, forwardRef } from "react";
import Tooltip from "../../common/Tooltip";

const OPTIONSGROUP = [
  [
    {
      label: "Fit",
      value: "fit",
    },
  ],
  [
    {
      label: "50%",
      value: "50",
    },
    {
      label: "75%",
      value: "75",
    },
    {
      label: "90%",
      value: "90",
    },
    {
      label: "100%",
      value: "100",
    },
    {
      label: "125%",
      value: "125",
    },
    {
      label: "150%",
      value: "150",
    },
    {
      label: "200%",
      value: "200",
    },
  ],
];

export default function ZoomActionElement() {
  return (
    <Select.Root defaultValue="100">
      <Tooltip tooltip="Zoom">
        <Select.Trigger className="inline-flex w-14 items-center justify-between gap-2 rounded-sm text-sm leading-none text-gray-800 outline-none hover:bg-gray-200 hover:ring-6 hover:ring-gray-200 active:bg-gray-300 active:ring-6 active:ring-gray-300 data-[placeholder]:text-gray-800">
          <Select.Value />
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
          <Select.Viewport className="py-2 text-gray-700">
            {OPTIONSGROUP.map((options, index) => (
              <Fragment key={index}>
                <Select.Group>
                  {options.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </Select.Group>
                {index + 1 != OPTIONSGROUP.length && (
                  <Select.Separator className="my-2 h-[1px] bg-gray-300" />
                )}
              </Fragment>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef(({ value, children }, forwardedRef) => (
  <Select.Item
    className="my-1 select-none rounded-sm px-4 py-1 text-sm outline-none ring-gray-100 data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[highlighted]:ring-2"
    ref={forwardedRef}
    value={value}
  >
    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));

SelectItem.displayName = "SelectItem";
