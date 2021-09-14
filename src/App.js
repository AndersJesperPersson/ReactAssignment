import React from "react";
import Routes from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";
import NavigationBar from "./components/nav/NavigationBar"


function App() {
  return (  
    <UserProvider>
    <Routes>
    <NavigationBar/>
    </Routes>
    </UserProvider>
  );
}

export default App;

