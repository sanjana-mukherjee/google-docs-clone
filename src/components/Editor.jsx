import TextAlign from "@tiptap/extension-text-align";
import Toolbar from "./Toolbar/Toolbar";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import FontFamily from "@tiptap/extension-font-family";
import ListItem from "@tiptap/extension-list-item";
import Highlight from "@tiptap/extension-highlight";

export default function Editor({ isNavbarVisible, onNavbarVisibilityToggle }) {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle.configure({ types: [ListItem.name] }),
      Underline,
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ps-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ps-3",
          },
        },
        heading: {
          HTMLAttributes: {
            class: "custom-heading",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        protocols: ["ftp", "mailto"],
        HTMLAttributes: {
          class: "underline text-sky-700 cursor-pointer",
        },
      }),
      Image.configure({
        inline: true,
      }),
      FontFamily,
    ],
  });

  return (
    <>
      <Toolbar
        isNavbarVisible={isNavbarVisible}
        onNavbarVisibilityToggle={onNavbarVisibilityToggle}
        editor={editor}
      />
      <div className="scrollbar flex-1 overflow-auto font-['Open_Sans'] [&_h1]:text-4xl [&_h2]:text-xl [&_h2]:text-gray-500 [&_h3]:text-3xl [&_h4]:text-2xl [&_h5]:text-xl">
        <EditorContent
          editor={editor}
          className="mx-auto mb-2 w-[900px] border-[1px] border-gray-300 bg-white p-8 [&>*]:min-h-[1000px] [&>*]:outline-none"
        />
      </div>
    </>
  );
}
