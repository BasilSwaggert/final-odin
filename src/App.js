import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

const LoggedInContext = createContext(false);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Header />
      <Outlet />
    </LoggedInContext.Provider>
  );
};

export default App;
export { LoggedInContext };
