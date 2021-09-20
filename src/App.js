import React from "react";
import Routes from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";
import NavigationBar from "./components/nav/NavigationBar"
import { Footer } from "./components/footer/Footer";
import {WheaterProvider} from "./shared/provider/WheaterProvider";



function App() {
  return (  
    <UserProvider>
    <WheaterProvider> 
    <Routes>
    <NavigationBar/>
    </Routes>
    <Footer/>
    </WheaterProvider>
    </UserProvider>
  );
}

export default App;


