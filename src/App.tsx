import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainBase } from "./components/MainBase";
import { MainCenter } from "./components/MainCenter";
import { MainTop } from "./components/MainTop";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <MainTop />
      <MainCenter />
      <MainBase />
      <Footer />
    </div>
  );
}

export default App;
