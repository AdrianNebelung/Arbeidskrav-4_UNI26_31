import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";

//------------------------------------------------------------------------------------------------
// Her så bruker vi createClient for å hente fram Sanity prosjektet inn i ArbeidskravListe.
// I følge Webtricks LMS så skal vi bruke sanityClient, men dette er utdatert. 
// Den nyere måten er å bruke createClient istedenfor, men begge to har samme funskjon.
// Vi har brukt denne istedenfor å bringe inn ny læring.
// Kilden som er brukt er for creatClient: Sanity - Getting started with @sanity/client.
const client = createClient({
    projectId: "gh4j3ug4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-01-01"
})
//------------------------------------------------------------------------------------------------

export default function ArbeidskravListe() {
    const [krav, setKrav] = useState([]);
//------------------------------------------------------------------------------------------------
// For å hente innhold fra Sanity, så bruker vi useEffect med client.fetch. Spørringen 
// *[_type == "arbeidskrav"] | order (number asc) henter dokumentene med typen arbeidskrav og sorterer etter nummer.
// Resultatet lagres i setKrav. Helt tilslutt bruker vi en [] (tom array) for at kallet skal bare kjøres en gang.
// Kilden som er brukt er på order i fecth spørringen: Sanity - How Queries Work - GROQ.
    useEffect(() => {
        client.fetch('*[_type == "arbeidskrav"] | order(nummer asc)').then(data => setKrav(data));
    }, []);
//------------------------------------------------------------------------------------------------

    return (
        <section>
            <h2>Arbeidskrav i UIN</h2>
            <ul>
                {krav.map(item => (
                    <li key={item._id}>
                        <h3>{item.tittel}</h3>
                        <p>{item.beskrivelse}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}