import Nav from "./components/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Testemonials from "./sections/Testemonials.jsx";
import Footer from "./sections/Footer.jsx";
import Subsribe from "./sections/Subsribe.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
const App = () => {
  return (
    <main className="relative">
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Sign Up page */}
        </Routes>
      </Router>
      <section className="xl:padding:1  ">
        <Hero />
      </section>
      <section className="  padding">
        <Features />
      </section>
      <section className="padding">
        <Testemonials />
      </section>
      <section className=" padding padding-x sm:py-32 py-16 w-full">
        <Subsribe />
      </section>
      <section className=" bg-light-sand padding ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
