import "../../styles/EnesKort.css";
import donkeyKong from "../../assets/Donkey-Kong.jpg";

export default function Enes_Kort() {
  return (
    <article className="enes-kort">
      <img 
        src={donkeyKong}
        alt="Donkey-Kong bilde"
        className="enes-bilde"
        />

        <p><strong>Enes Karatas</strong></p>
        <p><a href="mailto:eneska@hiof.no">Send meg en epost!</a></p>
        <p>Bachelorstudium i informasjonssystemer</p>


    </article>
  );
}