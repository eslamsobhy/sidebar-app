import React, { useState, useContext } from "react";

const AppContext = React.createContext();

// make sure to add the children destructuring here to avoid a big mess
// without it the app's childs didn't appear at all even in the component tree
const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // we are not toggling since there are two separate buttons to open and close each component!
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// important note about naming the custom hook:
// it has to have the "use" key word in the beginning of its name
// or you cannot use a react hook inside of it since it is now a regular function
// to use React hook, it has to be inside:
// either a component
// or a custom hook

export { AppContext, AppProvider };
