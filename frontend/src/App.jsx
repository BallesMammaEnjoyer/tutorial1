import {Box, useColorModeValue} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from './pages/CreatePage';
import Homepage from './pages/HomePage';
import Navbar from './components/Navbar';
import SelectionPage from './pages/SelectionPage';
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("#E1F4FF", "#61737D")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/:id" element={<SelectionPage />} />
        <Route path="/:id/:id" element={<SelectionPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/barn" element={<SelectionPage />} />
        <Route path="/skor" element={<SelectionPage/>}/> */}
      </Routes>
    </Box>
  );
}

export default App
