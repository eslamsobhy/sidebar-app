import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  // instead of importing useContext and AppContext in each component,
  //  we just create a custom hook for it and import it
  // the custom hook is created at the context.js file
  // just for clean code purposes (DRY principle)
  const data = useGlobalContext();

  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
