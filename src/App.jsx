import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Components/MyForm";
import Profile from "./Components/Profile";
import { UserContext } from "./Hooks/UserContext";
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    src: "",
    fullName: "",
    address: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user.fullName == "" ? <Form></Form> : <Profile></Profile>}
    </UserContext.Provider>
  );
}

export default App;
