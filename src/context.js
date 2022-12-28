import React, { useState, useContext } from "react";

const AppContext = React.createContext();

// make sure to add the children destructuring here to avoid a big mess
// without it the app's childs didn't appear at all even in the component tree
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

// custom hook

export { AppContext, AppProvider };
