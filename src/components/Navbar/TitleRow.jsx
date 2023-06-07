import { useEffect, useRef, useState } from "react";
import { StarIcon, CloudArrowUpIcon, FolderArrowDownIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import IconButton from "../../common/IconButton";
import Tooltip from "../../common/Tooltip";

const INITIAL_TITLE = "Untitled document";

export default function TitleRow({ className = "" }) {
  const [title, setTitle] = useState(INITIAL_TITLE);
  const [isDocFav, setIsDocFav] = useState(false);
  const inputRef = useRef();

  const handleTitleChange = (e) => {
    // If `title` is empty, set it to `INITIAL_TITLE`
    const newTitle = e.target.value || INITIAL_TITLE;
    setTitle(newTitle);
  };

  useEffect(() => {
    document.title = title + " - Google Docs";
  }, [title]);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Tooltip tooltip="Rename">
        <div className="relative rounded text-lg outline-1 outline-gray-600 hover:outline">
          <pre className="invisible inline px-2 font-[inherit]">{title}</pre>
          <input
            ref={inputRef}
            value={title}
            onChange={handleTitleChange}
            className="absolute inset-0 rounded bg-transparent px-2 text-gray-500"
          />
        </div>
      </Tooltip>
      <div className="flex gap-3">
        <IconButton tooltip="Star" onClick={() => setIsDocFav(!isDocFav)}>
          {isDocFav ? (
            <StarIconSolid className="h-4 w-4 text-blue-500" />
          ) : (
            <StarIcon className="h-4 w-4" />
          )}
        </IconButton>
        <IconButton tooltip="Move">
          <FolderArrowDownIcon className="h-4 w-4" />
        </IconButton>
        <IconButton tooltip="See document status">
          <CloudArrowUpIcon className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}
