export default function ArbeidskravListe({ krav }) {
    return (
        <ul>
            {krav.map(k => (
                <li key={k._id}>
                    <h3>{k.tittel}</h3>
                    <p>{k.beskrivelse}</p>
                </li>
            ))}
        </ul>
    )
}