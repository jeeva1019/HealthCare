import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import { useState } from "react";
import Appointment from "./pages/Appointment";
import Calendar from "./pages/Calendar";
import Statistics from "./pages/Statistics";
import Test from "./pages/Test";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Chat from "./pages/Chat";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex h-screen bg-transparent">
      <section className="flex-1 flex flex-col bg-transparent">
        <Header setMenuOpen={setMenuOpen} />
        <section className="overflow-y-auto flex">
          <Slider showSidebar={menuOpen} onClose={setMenuOpen} />
          <section className="p-4 w-full overflow-scroll hide-scrollbar">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/appointments" element={<Appointment />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/tests" element={<Test />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/support" element={<Support />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
