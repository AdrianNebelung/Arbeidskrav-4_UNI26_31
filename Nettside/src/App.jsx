import { useState } from "react";
import Header from "./components/Header";
import ArbeidskravListe from "./components/ArbeidskravListe";
<<<<<<< HEAD
import Adriankort from "./components/Adrian/Adriankort";
=======
import KevinProfile from "./components/profiles/KevinProfile";
>>>>>>> origin/kevin-profile
import "./styles/App.scss";

function App() {
  const [arbeidskrav, setArbeidskrav] = useState([]);

  return (
    <>
      <Header gruppenummer="31" />

      <main>
        <section>
<<<<<<< HEAD
          <Adriankort/>
        </section>

        <section>
          <ArbeidskravListe krav={arbeidskrav}/>
=======
          <h2>Gruppemedlemmer</h2>
          <KevinProfile />
        </section>

        <section>
          <h2>Arbeidskrav i UIN</h2>
          <ArbeidskravListe krav={arbeidskrav} />
>>>>>>> origin/kevin-profile
        </section>
      </main>
    </>
  );
}

export default App;