import React from "react";
import Routes from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";
import NavigationBar from "./components/nav/NavigationBar"
import { Footer } from "./components/footer/Footer";



function App() {
  return (  
    <UserProvider>
    <Routes>
    <NavigationBar/>
    </Routes>
    <Footer/>
    </UserProvider>
  );
}

export default App;


