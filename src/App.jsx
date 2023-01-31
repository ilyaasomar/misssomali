import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Competitors from "./components/competitors/Competitors";
import Header from "./components/header/Header";
import VoteModal from "./components/modal/VoteModal";
import Timer from "./timer/Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Timer />
      <Competitors />
      <VoteModal />
    </div>
  );
}

export default App;
