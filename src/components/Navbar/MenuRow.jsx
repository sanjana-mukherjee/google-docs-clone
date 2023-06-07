import * as Menubar from "@radix-ui/react-menubar";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { MENU_ITEMS } from "../../constants/navbarMenuItems";
import { Fragment } from "react";

export default function MenuRow() {
  const renderSubmenuItems = (submenuItems) =>
    submenuItems.map(({ icon, label, subLabel, submenuItems, disabled, showSeparator }, index) => (
      <Fragment key={index}>
        {submenuItems ? (
          <Menubar.Sub>
            <Menubar.SubTrigger className="relative flex select-none items-center gap-2 rounded px-2.5 py-2 text-xs leading-none outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-gray-100 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-gray-100 data-[highlighted]:to-gray-200 data-[disabled]:text-gray-500">
              {icon && <div className="h-4 w-4 text-gray-500">{icon}</div>}
              <span className="flex-1">{label}</span>
              <ChevronRightIcon className="h-3 w-3" />
            </Menubar.SubTrigger>
            <Menubar.Portal>
              <Menubar.SubContent
                className="min-w-[220px] rounded-md bg-white p-1.5 shadow-md"
                alignOffset={-5}
              >
                {renderSubmenuItems(submenuItems)}
              </Menubar.SubContent>
            </Menubar.Portal>
          </Menubar.Sub>
        ) : (
          <Menubar.Item
            disabled={disabled}
            className="relative flex select-none items-center gap-2 rounded px-2.5 py-2 text-xs leading-none outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-gray-100 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-gray-100 data-[highlighted]:to-gray-200 data-[disabled]:text-gray-500"
          >
            {icon && <div className="h-4 w-4 text-gray-500">{icon}</div>}
            <span className="flex-1">{label}</span>
            {subLabel && <div className="text-gray-500">{subLabel}</div>}
          </Menubar.Item>
        )}
        {showSeparator && <Menubar.Separator className="h-[1px] bg-gray-200" />}
      </Fragment>
    ));

  return (
    <Menubar.Root className="flex gap-2">
      {MENU_ITEMS.map(({ label, submenuItems }) => (
        <Menubar.Menu key={label}>
          <Menubar.Trigger className="select-none rounded-[0.0625rem] px-1 text-sm leading-none text-gray-700 outline-none ring-gray-200 hover:bg-gray-200 hover:ring-4 data-[state=open]:bg-gray-200 data-[state=open]:ring-4">
            {label}
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="min-w-[220px] rounded-md bg-white p-1.5 shadow-md"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              {renderSubmenuItems(submenuItems)}
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      ))}
    </Menubar.Root>
  );
}
