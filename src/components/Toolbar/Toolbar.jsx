import AlignIndentActionsGroup from "./AlignIndentActionsGroup";
import EditingModeActionElement from "./EditingModeActionElement";
import FontFamilyActionElement from "./FontFamilyActionElement";
import FontSizeActionElement from "./FontSizeActionElement";
import LinkCommentActionsGroup from "./LinkCommentActionsGroup";
import NavbarHideButton from "./NavbarHideButton";
import TextFormatActionsGroup from "./TextFormatActionsGroup";
import TextTypeActionElement from "./TextTypeActionElement";
import UndoRedoActionsGroup from "./UndoRedoActionsGroup";

export default function Toolbar({ isNavbarVisible, onNavbarVisibilityToggle, editor }) {
  return (
    <div className="divide mb-4 flex gap-4 divide-x-2 divide-gray-300 rounded-full bg-gray-100 px-6 py-2">
      <UndoRedoActionsGroup editor={editor} />
      <TextTypeActionElement editor={editor} />
      <FontFamilyActionElement editor={editor} />
      <FontSizeActionElement />
      <TextFormatActionsGroup editor={editor} />
      <LinkCommentActionsGroup editor={editor} />
      <AlignIndentActionsGroup editor={editor} />
      <EditingModeActionElement />
      <NavbarHideButton
        isNavbarVisible={isNavbarVisible}
        onNavbarVisibilityToggle={onNavbarVisibilityToggle}
      />
    </div>
  );
}
