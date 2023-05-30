import { useState } from "react";
import Tooltip from "../../common/Tooltip";
import IconButton from "../../common/IconButton";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function FontSizeActionElement() {
  const [fontSize, setFontSize] = useState(16);

  function handleButtonClick(delta) {
    if ((fontSize === 1 && delta === -1) || (fontSize === 400 && delta === +1)) {
      return;
    }
    setFontSize(fontSize + delta);
  }

  function handleChange(e) {
    if (isNaN(e.target.value)) return;
    const value = +e.target.value;
    if (value < 1) return setFontSize(1);
    if (value > 400) return setFontSize(400);
    return setFontSize(value);
  }

  return (
    <div className="flex items-center gap-3 ps-4">
      <IconButton
        isRounded={false}
        tooltip="Decrease font size (Ctrl+Shift+,)"
        onClick={() => handleButtonClick(-1)}
        className="h-4 w-4"
      >
        <MinusIcon />
      </IconButton>
      <Tooltip tooltip="Font size">
        <input
          className="w-[4ch] rounded bg-transparent text-center text-sm outline-none ring-1 ring-gray-700"
          value={fontSize}
          onChange={handleChange}
        />
      </Tooltip>
      <IconButton
        isRounded={false}
        tooltip="Increase font size (Ctrl+Shift+.)"
        onClick={() => handleButtonClick(+1)}
        className="h-4 w-4"
      >
        <PlusIcon />
      </IconButton>
    </div>
  );
}
