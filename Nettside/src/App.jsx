import { useEffect, useState } from "react";
import Header from "./components/Header";
import ArbeidskravListe from "./components/ArbeidskravListe";
import Adriankort from "./components/Adrian/Adriankort";
import "./styles/App.scss";
import Enes_Kort from "./components/Enes/EnesKort";

function App() {
  const [arbeidskrav, setArbeidskrav] = useState([]);


  return (
    <>
      <Header gruppenummer="31"/>
      <main>
        <section>
          <Adriankort/>
        </section>
        <section>
          <Enes_Kort/>
        </section>

        <section>
          <ArbeidskravListe krav={arbeidskrav}/>
        </section>
      </main>
    </>
  )
}

export default App;