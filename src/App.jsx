import { useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSidebarVisible, setIsSidebarVisisble] = useState(true);

  return (
    <div className="flex h-[100vh] flex-col overflow-hidden bg-gray-50 ps-4 pt-2">
      {isNavbarVisible && (
        <div className="me-4">
          <Navbar />
        </div>
      )}
      <div className="flex overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden">
          <Editor
            isNavbarVisible={isNavbarVisible}
            onNavbarVisibilityToggle={() =>
              setIsNavbarVisible((isNavbarVisible) => !isNavbarVisible)
            }
          />
        </div>
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          onSidebarVisibilityToggle={() => {
            console.log("clicked");
            setIsSidebarVisisble((isSidebarVisible) => !isSidebarVisible);
          }}
        />
      </div>
    </div>
  );
}

export default App;
