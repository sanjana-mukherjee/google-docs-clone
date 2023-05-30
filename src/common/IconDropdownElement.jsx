import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import IconButton from "./IconButton";

export default function IconDropdownElement({ tooltip, icon, children }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="flex items-center">
          <IconButton isRounded={false} tooltip={tooltip} className="h-4 w-4">
            {icon}
          </IconButton>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="rounded-md bg-white p-1.5 shadow-md" sideOffset={5}>
          {children.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className="rounded px-2.5 py-2 text-xs leading-none outline-none"
            >
              {item}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
