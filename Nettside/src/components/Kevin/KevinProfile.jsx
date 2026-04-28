import "./KevinProfile.scss";

export default function KevinProfile() {
  return (
    <article className="kevin-profile">
      <header>
        <h2>Kevin Larsen</h2>
      </header>

      <figure>
        <img src="/src/assets/manicon.png" alt="Illustrasjon for Kevin sin profil" />
        <figcaption>Gruppemedlem</figcaption>
      </figure>

      <section>
        <p>Digitale medier og design</p>

        <a href="mailto:kevinsl@hiof.no">
          Send e-post til Kevin
        </a>
      </section>
    </article>
  );
}