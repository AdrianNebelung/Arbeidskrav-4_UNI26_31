import { useState } from "react";
import Header from "./components/Header";
import ArbeidskravListe from "./components/ArbeidskravListe";
import Adriankort from "./components/Adrian/Adriankort";
import KevinProfile from "./components/Kevin/KevinProfile";
import MuharremProfil from "./components/Muharrem/MuharremProfil";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  const [arbeidskrav, setArbeidskrav] = useState([]);

  return (
    <>

      <Header gruppenummer="31" />
      <main>
        <section>
          <Adriankort/>
          <KevinProfile />
          <MuharremProfil />
        </section>

        <section>
          <ArbeidskravListe krav={arbeidskrav}/>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;