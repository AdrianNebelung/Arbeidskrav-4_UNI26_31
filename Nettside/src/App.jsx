import { useEffect, useState } from "react";
import Header from "./components/Header";
import ArbeidskravListe from "./components/ArbeidskravListe";
import "./styles/App.scss";

function App() {
  const [arbeidskrav, setArbeidskrav] = useState([]);


  return (
    <>
      <Header gruppenummer="31"/>
      <main>
        <section>

        </section>

        <section>
          <h2>Arbeidskrav i UIN</h2>
          <ArbeidskravListe krav={arbeidskrav}/>
        </section>
      </main>
    </>
  )
}

export default App;