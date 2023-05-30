import { EyeDropperIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import IconButton from "../../common/IconButton";
import IconDropdownElement from "../../common/IconDropdownElement";

function generateColorNodes(r, c) {
  const randomColors = [];
  let h, s, l;
  for (let i = 0; i < r; i++) {
    s = 100 - (100 / r) * i;
    for (let j = 0; j < c; j++) {
      h = (360 / c) * j;
      l = 40;
      randomColors.push(`hsl(${h}deg ${s}% ${l}%)`);
    }
  }
  return randomColors;
}

const RANDOMCOLORS = generateColorNodes(8, 10);

export default function ColourActionElement({ onClick, children }) {
  return (
    <IconDropdownElement tooltip="Text Color" icon={children}>
      <div className="grid grid-cols-10 gap-[2px]">
        {RANDOMCOLORS.map((color) => (
          <button
            key={color}
            className="h-5 w-5 rounded-full ring-gray-200 hover:ring-2"
            onClick={() => onClick(color)}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      <div>
        <div className="cursor-pointer rounded-sm text-gray-800 hover:bg-gray-200 hover:ring-6 hover:ring-gray-200 active:bg-gray-300 active:ring-6 active:ring-gray-300">
          CUSTOM
        </div>
      </div>
      <div className="flex gap-3">
        <IconButton
          isRounded={false}
          className={`inline-flex h-4 w-4 items-center justify-center text-gray-800`}
          tooltip="Add a custom color"
        >
          <PlusCircleIcon />
        </IconButton>
        <IconButton
          isRounded={false}
          className={`inline-flex h-4 w-4 items-center justify-center text-gray-800`}
          tooltip="Pick a custom color"
        >
          <EyeDropperIcon />
        </IconButton>
      </div>
    </IconDropdownElement>
  );
}
