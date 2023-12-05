import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import ManageProducts from "./scenes/ManageProducts/ManageProducts";
import ManageUsers from "./scenes/ManageUsers/ManageUsers";
import Profile from './scenes/profile/Profile'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className=" h-100 flex" style={{height:'fit-content'}}>
          <Sidebar className="h-100" />
          <main className="content flex-1" style={{height:'fit-content'}}>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<ManageProducts />} />
              <Route path="/users" element={<ManageUsers />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;