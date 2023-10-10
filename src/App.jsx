import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainApp from "./Components/MainApp";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { ThemeProvider } from "@mui/material/styles";
import GeneratheTheme from "./Utils/Generate-theme";
import Card from "./Components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Dna } from "react-loader-spinner";

const App = () => {
  const [loader, setLoader] = useState(true);
  const theme = GeneratheTheme();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  });
  return loader ? (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Box>
  ) : (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
