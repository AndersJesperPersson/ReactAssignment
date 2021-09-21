import React from "react";
import Routes from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";
import NavigationBar from "./components/nav/NavigationBar"
import { Footer } from "./components/footer/Footer";
import {WheaterProvider} from "./shared/provider/WheaterProvider";
import { CartProvider } from "./shared/provider/CartProvider";


function App() {
  return (  
    <UserProvider>
    <CartProvider>
    <WheaterProvider> 
    <Routes>
    <NavigationBar/>
    </Routes>
    <Footer/>
    </WheaterProvider>
    </CartProvider>
    </UserProvider>
  );
}

export default App;


