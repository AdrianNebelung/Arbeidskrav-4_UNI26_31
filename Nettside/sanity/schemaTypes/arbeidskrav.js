export default {
    name: "arbeidskrav",
    title: "Arbeidskrav",
    type: "document",
    fields: [
        {
            name: "tittel",
            title: "Tittel",
            type: "string"
        },
        {
            name: "nummer",
            title: "Arbeidskrav nummer",
            type: "number"
        },
        {
            name: "beskrivelse",
            title: "Beskrivelse",
            type: "text",
            rows: 3
        }
    ]
}