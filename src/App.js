
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { JobProvider } from "./context/JobContext";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <JobProvider>
          <Navbar />
          <AppRoutes />
          <Footer />
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
