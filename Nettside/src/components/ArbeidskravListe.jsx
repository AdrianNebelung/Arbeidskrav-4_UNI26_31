import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "gh4j3ug4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-01-01"
})

export default function ArbeidskravListe() {
    const [arb, setArb] = useState([]);

    useEffect(() => {
        client.fetch('*[_type == "arbeidskrav"]').then(data => setArb(data));
    }, []);


    return (
        <section>
            <h2>Arbeidskrav i UIN</h2>
            <ul>
    
            </ul>
        </section>
    )
}