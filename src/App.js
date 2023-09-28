import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from './theme';

import Blog from './components/home/blog';
import Contact from './components/home/contact';
import Broker from './components/home/broker';
import Homes from './components/home/homes';

function App() {

  const mode = useSelector((state) => state.recipe.mode);
  console.log(mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Header />
          <Routes>
          <Route path="/home" element={<Homes/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/broker" element={<Broker />} />

          </Routes>
        </Router>
      </ThemeProvider>


    </div>
  );
}

export default App;
