import Tooltip from "./Tooltip";

export default function IconButton({
  children,
  tooltip,
  className = "",
  isRounded = true,
  transparentBold = false,
  ...props
}) {
  const button = (
    <button
      className={`${className} ${
        isRounded ? "rounded-full" : "rounded-sm"
      } hover:bg-gray-200 hover:ring-6 hover:ring-gray-200 active:bg-gray-300 active:ring-6 active:ring-gray-300`}
      {...props}
    >
      {children}
    </button>
  );
  if (!tooltip) {
    return button;
  }
  return (
    <Tooltip tooltip={tooltip} transparentBold={transparentBold}>
      {button}
    </Tooltip>
  );
}
