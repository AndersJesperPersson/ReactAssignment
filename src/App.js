import React from "react";
import Routes from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";
import NavigationBar from "./components/nav/NavigationBar"
import { Footer } from "./components/footer/Footer";
import { WeatherProvider } from "./shared/provider/WeatherProvider";
import { CartProvider } from "./shared/provider/CartProvider";


function App() {
  return (  
    <UserProvider>
    <CartProvider>
    <WeatherProvider> 
    <Routes>
    <NavigationBar/>
    </Routes>
    <Footer/>
    </WeatherProvider>
    </CartProvider>
    </UserProvider>
  );
}

export default App;


