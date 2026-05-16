import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="util reveal d1">
        <div className="left">
          <span className="dot" aria-hidden="true"></span>
          <span>laurynhudson.com</span>
          <span className="sep">—</span>
          <span className="status">available for select opportunities</span>
        </div>
        <div className="right">
          <a href="#contact">Los Angeles, CA · 2026 ↗</a>
        </div>
      </header>

      <main className="hero">
        <div className="kicker reveal d2">Hi — I&apos;m</div>
        <h1 className="name reveal d3">
          Lauryn Hudson<span className="stop">.</span>
        </h1>
        <p className="tagline reveal d4">
          Building the social platform designed to take you IRL.
        </p>
      </main>

      <section className="roles reveal d4" aria-label="Roles">
        <span className="avatar" aria-hidden="true">
          <Image
            src="/assets/lh_headshot.png"
            alt=""
            width={56}
            height={56}
            priority
          />
        </span>
        <span className="pill primary">Cofounder &amp; CEO, MOVE</span>
        <span className="pill">Software Engineer</span>
        <span className="pill">Community Builder</span>
        <span className="pill">Speaker</span>
      </section>

      <footer className="contact reveal d5" id="contact">
        <div className="caps">Get in touch</div>
        <div className="links">
          <a className="primary" href="mailto:lauryn@movewellnessclub.com">
            lauryn@movewellnessclub.com <span className="arrow">→</span>
          </a>
          <a
            className="secondary underline-link"
            href="https://linkedin.com/in/lauryn-hudson"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="secondary underline-link"
            href="https://instagram.com/movewellnessclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
