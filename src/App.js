import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topnav";
import Sidenav from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Taskplanner from "./scenes/taskplanner";
import Marketplace from "./scenes/marketplace";
import Catalogue from "./scenes/catalogue";
import Order from "./scenes/order";
import Chat from "./scenes/chats";
import Shipping from "./scenes/shipping";
import SignUp from "./scenes/Auth/signup.jsx";
import SignIn from "./scenes/Auth/signin";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <div className="app">
          <Sidenav />
          <main className="context">
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/forgotpassword" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/taskplanner" element={<Taskplanner />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
