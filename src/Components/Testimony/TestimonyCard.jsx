export default function TestimonyCard({ name, role, review, image }) {
  return (
    <main>
      <h1 className="testimony__title">
        If you worked with me, this is what you'd notice
      </h1>
      <p className="testimony__title-title">Based on collaboration, feedback and real-world work dynamics</p>
      <article className="testimony__card fade">
        <div className="testimony__body testimony__body--show">
          <div className="testimony__text">
            <h2 className="subtitle">
              My name is {name} <br/>
              <span className="testimony__course">{role}</span>
            </h2>
            <p className="testimony__review">{review}</p>
          </div>

          <figure className="testimony__picture">
            <img src={image} alt={name} className="testimony__img" />
          </figure>
        </div>
      </article>
    </main>
  );
}
