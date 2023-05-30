import * as RadixTooltip from "@radix-ui/react-tooltip";

export default function Tooltip({ tooltip, children }) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="rounded-sm bg-gray-800 px-2 py-1 text-[0.625rem] text-gray-100"
            sideOffset={8}
            collisionPadding={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            {tooltip}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
