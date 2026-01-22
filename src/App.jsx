import Navbar from "./components/Navbar";
import LiveBackground from "./components/LiveBackground";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <LiveBackground />
      <Navbar />
      <main className="relative z-20 pt-16">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}