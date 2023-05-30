import {
  FolderIcon,
  DocumentDuplicateIcon,
  UserPlusIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
  PencilSquareIcon,
  TrashIcon,
  ClockIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PrinterIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  ScissorsIcon,
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  Square2StackIcon,
  ViewfinderCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import {
  DocumentTextIcon as DocumentTextIconSolid,
  GlobeAmericasIcon as GlobeAmericasIconSolid,
} from "@heroicons/react/24/solid";

const MENU_ITEMS = [
  {
    label: "File",
    submenuItems: [
      {
        icon: <DocumentTextIconSolid />,
        label: "New",
        submenuItems: [
          { icon: <DocumentTextIconSolid className="text-blue-500" />, label: "Document" },
          { icon: <PencilSquareIcon />, label: "From template gallery" },
        ],
      },
      { icon: <FolderIcon />, label: "Open", subLabel: "Ctrl+O" },
      { icon: <DocumentDuplicateIcon />, label: "Make a copy", showSeparator: true },
      {
        icon: <UserPlusIcon />,
        label: "Share",
        submenuItems: [
          { icon: <UserPlusIcon />, label: "Share with others" },
          { icon: <GlobeAmericasIconSolid />, label: "Publish to web" },
        ],
      },
      {
        icon: <EnvelopeIcon />,
        label: "Email",
        submenuItems: [
          { label: "Email this file" },
          { label: "Email collaborators", disabled: true },
          { label: "Email draft" },
        ],
      },
      {
        icon: <ArrowDownTrayIcon />,
        label: "Download",
        submenuItems: [
          { label: "Microsoft Word (.docx)" },
          { label: "OpenDocument Format (.odt)" },
          { label: "Rich Text Format (.rtf)" },
          { label: "PDF Document (.pdf)" },
          { label: "Plain Text (.txt)" },
          { label: "Web Page (.html, zipped)" },
          { label: "EPUB Publication (.epub)" },
        ],
        showSeparator: true,
      },
      { icon: <PencilSquareIcon />, label: "Rename" },
      { icon: <TrashIcon />, label: "Move to trash" },
      {
        icon: <ClockIcon />,
        label: "Version history",
        submenuItems: [
          { label: "Name current version" },
          { label: "See version history", subLabel: "Ctrl+Alt+Shift+H" },
        ],
      },
      {
        icon: <CheckCircleIcon />,
        label: "Make available offline",
        showSeparator: true,
      },
      { icon: <InformationCircleIcon />, label: "Details" },
      { icon: <GlobeAltIcon />, label: "Language" },
      { icon: <DocumentTextIcon />, label: "Page Setup" },
      {
        icon: <PrinterIcon />,
        label: "Print",
        subLabel: "Ctrl+P",
      },
    ],
  },
  {
    label: "Edit",
    submenuItems: [
      {
        icon: <ArrowUturnLeftIcon />,
        label: "Undo",
        subLabel: "Ctrl+Z",
      },
      {
        icon: <ArrowUturnRightIcon />,
        label: "Redo",
        subLabel: "Ctrl+Y",
        showSeparator: true,
      },
      {
        icon: <ScissorsIcon />,
        label: "Cut",
        subLabel: "Ctrl+X",
      },
      {
        icon: <Square2StackIcon />,
        label: "Copy",
        subLabel: "Ctrl+C",
      },
      {
        icon: <ClipboardIcon />,
        label: "Paste",
        subLabel: "Ctrl+V",
      },
      {
        icon: <ClipboardDocumentCheckIcon />,
        label: "Paste without formatting",
        subLabel: "Ctrl+Shift+V",
        showSeparator: true,
      },
      {
        icon: <ViewfinderCircleIcon />,
        label: "Select all",
        subLabel: "Ctrl+A",
      },
      { icon: <TrashIcon />, label: "Delete", showSeparator: true },
      {
        icon: <ArrowPathIcon />,
        label: "Find and Replace",
        subLabel: "Ctrl+H",
      },
    ],
  },
  {
    label: "View",
    submenuItems: [
      {
        icon: <DocumentTextIconSolid />,
        label: "New",
        submenuItems: [
          { icon: <DocumentTextIconSolid className="text-blue-500" />, label: "Document" },
          { icon: <PencilSquareIcon />, label: "From template gallery" },
        ],
      },
      { icon: <FolderIcon />, label: "Open", subLabel: "Ctrl+O" },
      { icon: <DocumentDuplicateIcon />, label: "Make a copy", showSeparator: true },
      {
        icon: <UserPlusIcon />,
        label: "Share",
        submenuItems: [
          { icon: <UserPlusIcon />, label: "Share with others" },
          { icon: <GlobeAmericasIconSolid />, label: "Publish to web" },
        ],
      },
      {
        icon: <EnvelopeIcon />,
        label: "Email",
        submenuItems: [
          { label: "Email this file" },
          { label: "Email collaborators", disabled: true },
          { label: "Email draft" },
        ],
      },
      {
        icon: <ArrowDownTrayIcon />,
        label: "Download",
        submenuItems: [
          { label: "Microsoft Word (.docx)" },
          { label: "OpenDocument Format (.odt)" },
          { label: "Rich Text Format (.rtf)" },
          { label: "PDF Document (.pdf)" },
          { label: "Plain Text (.txt)" },
          { label: "Web Page (.html, zipped)" },
          { label: "EPUB Publication (.epub)" },
        ],
        showSeparator: true,
      },
      { icon: <PencilSquareIcon />, label: "Rename" },
      { icon: <TrashIcon />, label: "Move to trash" },
      {
        icon: <ClockIcon />,
        label: "Version history",
        submenuItems: [
          { label: "Name current version" },
          { label: "See version history", subLabel: "Ctrl+Alt+Shift+H" },
        ],
      },
      {
        icon: <CheckCircleIcon />,
        label: "Make available offline",
        showSeparator: true,
      },
      { icon: <InformationCircleIcon />, label: "Details" },
      { icon: <GlobeAltIcon />, label: "Language" },
      { icon: <DocumentTextIcon />, label: "Page Setup" },
      {
        icon: <PrinterIcon />,
        label: "Print",
        subLabel: "Ctrl+P",
      },
    ],
  },
  {
    label: "Insert",
    submenuItems: [
      {
        icon: <ArrowUturnLeftIcon />,
        label: "Undo",
        subLabel: "Ctrl+Z",
      },
      {
        icon: <ArrowUturnRightIcon />,
        label: "Redo",
        subLabel: "Ctrl+Y",
        showSeparator: true,
      },
      {
        icon: <ScissorsIcon />,
        label: "Cut",
        subLabel: "Ctrl+X",
      },
      {
        icon: <Square2StackIcon />,
        label: "Copy",
        subLabel: "Ctrl+C",
      },
      {
        icon: <ClipboardIcon />,
        label: "Paste",
        subLabel: "Ctrl+V",
      },
      {
        icon: <ClipboardDocumentCheckIcon />,
        label: "Paste without formatting",
        subLabel: "Ctrl+Shift+V",
        showSeparator: true,
      },
      {
        icon: <ViewfinderCircleIcon />,
        label: "Select all",
        subLabel: "Ctrl+A",
      },
      { icon: <TrashIcon />, label: "Delete", showSeparator: true },
      {
        icon: <ArrowPathIcon />,
        label: "Find and Replace",
        subLabel: "Ctrl+H",
      },
    ],
  },
  {
    label: "Format",
    submenuItems: [
      {
        icon: <DocumentTextIconSolid />,
        label: "New",
        submenuItems: [
          { icon: <DocumentTextIconSolid className="text-blue-500" />, label: "Document" },
          { icon: <PencilSquareIcon />, label: "From template gallery" },
        ],
      },
      { icon: <FolderIcon />, label: "Open", subLabel: "Ctrl+O" },
      { icon: <DocumentDuplicateIcon />, label: "Make a copy", showSeparator: true },
      {
        icon: <UserPlusIcon />,
        label: "Share",
        submenuItems: [
          { icon: <UserPlusIcon />, label: "Share with others" },
          { icon: <GlobeAmericasIconSolid />, label: "Publish to web" },
        ],
      },
      {
        icon: <EnvelopeIcon />,
        label: "Email",
        submenuItems: [
          { label: "Email this file" },
          { label: "Email collaborators", disabled: true },
          { label: "Email draft" },
        ],
      },
      {
        icon: <ArrowDownTrayIcon />,
        label: "Download",
        submenuItems: [
          { label: "Microsoft Word (.docx)" },
          { label: "OpenDocument Format (.odt)" },
          { label: "Rich Text Format (.rtf)" },
          { label: "PDF Document (.pdf)" },
          { label: "Plain Text (.txt)" },
          { label: "Web Page (.html, zipped)" },
          { label: "EPUB Publication (.epub)" },
        ],
        showSeparator: true,
      },
      { icon: <PencilSquareIcon />, label: "Rename" },
      { icon: <TrashIcon />, label: "Move to trash" },
      {
        icon: <ClockIcon />,
        label: "Version history",
        submenuItems: [
          { label: "Name current version" },
          { label: "See version history", subLabel: "Ctrl+Alt+Shift+H" },
        ],
      },
      {
        icon: <CheckCircleIcon />,
        label: "Make available offline",
        showSeparator: true,
      },
      { icon: <InformationCircleIcon />, label: "Details" },
      { icon: <GlobeAltIcon />, label: "Language" },
      { icon: <DocumentTextIcon />, label: "Page Setup" },
      {
        icon: <PrinterIcon />,
        label: "Print",
        subLabel: "Ctrl+P",
      },
    ],
  },
  {
    label: "Tools",
    submenuItems: [
      {
        icon: <ArrowUturnLeftIcon />,
        label: "Undo",
        subLabel: "Ctrl+Z",
      },
      {
        icon: <ArrowUturnRightIcon />,
        label: "Redo",
        subLabel: "Ctrl+Y",
        showSeparator: true,
      },
      {
        icon: <ScissorsIcon />,
        label: "Cut",
        subLabel: "Ctrl+X",
      },
      {
        icon: <Square2StackIcon />,
        label: "Copy",
        subLabel: "Ctrl+C",
      },
      {
        icon: <ClipboardIcon />,
        label: "Paste",
        subLabel: "Ctrl+V",
      },
      {
        icon: <ClipboardDocumentCheckIcon />,
        label: "Paste without formatting",
        subLabel: "Ctrl+Shift+V",
        showSeparator: true,
      },
      {
        icon: <ViewfinderCircleIcon />,
        label: "Select all",
        subLabel: "Ctrl+A",
      },
      { icon: <TrashIcon />, label: "Delete", showSeparator: true },
      {
        icon: <ArrowPathIcon />,
        label: "Find and Replace",
        subLabel: "Ctrl+H",
      },
    ],
  },
  {
    label: "Extensions",
    submenuItems: [
      {
        icon: <DocumentTextIconSolid />,
        label: "New",
        submenuItems: [
          { icon: <DocumentTextIconSolid className="text-blue-500" />, label: "Document" },
          { icon: <PencilSquareIcon />, label: "From template gallery" },
        ],
      },
      { icon: <FolderIcon />, label: "Open", subLabel: "Ctrl+O" },
      { icon: <DocumentDuplicateIcon />, label: "Make a copy", showSeparator: true },
      {
        icon: <UserPlusIcon />,
        label: "Share",
        submenuItems: [
          { icon: <UserPlusIcon />, label: "Share with others" },
          { icon: <GlobeAmericasIconSolid />, label: "Publish to web" },
        ],
      },
      {
        icon: <EnvelopeIcon />,
        label: "Email",
        submenuItems: [
          { label: "Email this file" },
          { label: "Email collaborators", disabled: true },
          { label: "Email draft" },
        ],
      },
      {
        icon: <ArrowDownTrayIcon />,
        label: "Download",
        submenuItems: [
          { label: "Microsoft Word (.docx)" },
          { label: "OpenDocument Format (.odt)" },
          { label: "Rich Text Format (.rtf)" },
          { label: "PDF Document (.pdf)" },
          { label: "Plain Text (.txt)" },
          { label: "Web Page (.html, zipped)" },
          { label: "EPUB Publication (.epub)" },
        ],
        showSeparator: true,
      },
      { icon: <PencilSquareIcon />, label: "Rename" },
      { icon: <TrashIcon />, label: "Move to trash" },
      {
        icon: <ClockIcon />,
        label: "Version history",
        submenuItems: [
          { label: "Name current version" },
          { label: "See version history", subLabel: "Ctrl+Alt+Shift+H" },
        ],
      },
      {
        icon: <CheckCircleIcon />,
        label: "Make available offline",
        showSeparator: true,
      },
      { icon: <InformationCircleIcon />, label: "Details" },
      { icon: <GlobeAltIcon />, label: "Language" },
      { icon: <DocumentTextIcon />, label: "Page Setup" },
      {
        icon: <PrinterIcon />,
        label: "Print",
        subLabel: "Ctrl+P",
      },
    ],
  },
  {
    label: "Help",
    submenuItems: [
      {
        icon: <ArrowUturnLeftIcon />,
        label: "Undo",
        subLabel: "Ctrl+Z",
      },
      {
        icon: <ArrowUturnRightIcon />,
        label: "Redo",
        subLabel: "Ctrl+Y",
        showSeparator: true,
      },
      {
        icon: <ScissorsIcon />,
        label: "Cut",
        subLabel: "Ctrl+X",
      },
      {
        icon: <Square2StackIcon />,
        label: "Copy",
        subLabel: "Ctrl+C",
      },
      {
        icon: <ClipboardIcon />,
        label: "Paste",
        subLabel: "Ctrl+V",
      },
      {
        icon: <ClipboardDocumentCheckIcon />,
        label: "Paste without formatting",
        subLabel: "Ctrl+Shift+V",
        showSeparator: true,
      },
      {
        icon: <ViewfinderCircleIcon />,
        label: "Select all",
        subLabel: "Ctrl+A",
      },
      { icon: <TrashIcon />, label: "Delete", showSeparator: true },
      {
        icon: <ArrowPathIcon />,
        label: "Find and Replace",
        subLabel: "Ctrl+H",
      },
    ],
  },
];

export { MENU_ITEMS };
