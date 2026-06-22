import Image from 'next/image';
import Reveal from '@/components/Reveal';

// ── editable content ──────────────────────────────────────────
// Paste your real Substack URL here.
const SUBSTACK_URL = 'https://laurynhudson.substack.com/';

const travel = [
  { src: '/assets/travel.png', place: 'Giza, Egypt', note: 'The Great Pyramids' },
  { src: '/assets/athens.jpg', place: 'Athens, Greece', note: 'Acropolis of Athens' },
  { src: '/assets/mykonos.jpg', place: 'Mykonos, Greece', note: 'Windmills of Mykonos'},
  { src: '/assets/paris.jpg', place: 'Paris, France', note: 'Eiffel Tower'},
  { src: '/assets/mona.jpg', place: 'Paris, France', note: 'Mona Lisa'},
];

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
        <nav className="util-nav" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <div className="kicker reveal d2">Hi — I&apos;m</div>
        <h1 className="name reveal d3">
          Lauryn Hudson<span className="stop">.</span>
        </h1>
      </main>

      <section className="roles reveal d4" aria-label="Roles">
        <span className="avatar" aria-hidden="true">
          <Image
            src="/assets/lh_headshot.jpg"
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

      {/* ── About ─────────────────────────────────────────── */}
      <section className="section about" id="about" aria-labelledby="about-h">
        <Reveal className="section-head">
          <span className="caps">About</span>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <h2 id="about-h" className="lede">
              Engineer by training, founder by conviction.
            </h2>
            <p>
              I’m Lauryn — a software engineer, entrepreneur, and community builder based in Los Angeles.
            </p>
            <p>
              Over the past several years, I’ve built products across fintech, AI, and consumer technology. 
              I’ve worked as a software engineer at JPMorgan, where I helped build technology for sustainable 
              investing and personalized portfolio management, and later as a Founding Engineer at an 
              AI startup building voice agents for the construction industry. 
            </p>
            <p>
              Today, I’m the founder of MOVE, a platform designed to pull people off their screens and into real life. 
              The idea came from a simple belief: technology should help people connect 
              more deeply with the world around them, not spend more time disconnected from it.
            </p>
            <p>
              When I’m not building, you’ll usually find me training for a HYROX race, 
              practicing yoga, traveling the world, or documenting the founder journey in public.
            </p>
          </Reveal>

          <Reveal className="about-portrait" delay={80}>
            <Image
              src="/assets/lh_headshot.jpg"
              alt="Lauryn Hudson"
              width={520}
              height={620}
              className="portrait-img"
            />
          </Reveal>
        </div>

        <Reveal className="travel" delay={60}>
          <div className="travel-head">
            <span className="caps">Off the clock</span>
            <span className="mono">Recently — on the road</span>
          </div>
          <div className="travel-strip">
            {travel.map((t) => (
              <figure className="thumb" key={t.src}>
                <div className="thumb-img">
                  <Image
                    src={t.src}
                    alt={`${t.note}, ${t.place}`}
                    width={420}
                    height={520}
                  />
                </div>
                <figcaption>
                  <span className="thumb-place">{t.place}</span>
                  <span className="thumb-note">{t.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Work & ventures ───────────────────────────────── */}
      <section className="section work" id="work" aria-labelledby="work-h">
        <Reveal className="section-head">
          <span className="caps">Work &amp; ventures</span>
          <h2 id="work-h" className="section-title">
            What I&apos;m building.
          </h2>
        </Reveal>

        <Reveal className="feature" delay={40}>
          <div className="feature-copy">
            <span className="caps accent">Cofounder &amp; CEO</span>
            <h3 className="feature-name">MOVE</h3>
            <p className="feature-blurb">
              The first social platform designed to take you offline. MOVE turns
              connection into something you do in real life — not something you
              scroll past.
            </p>
            <span className="feature-tag mono">Consumer social · IRL</span>
            <a
              className="feature-link"
              href="https://movewellnessclub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              movewellnessclub.com <span className="arrow">→</span>
            </a>
          </div>
          <div className="feature-media">
            <Image
              src="/assets/mockup.png"
              alt="MOVE icon"
              width={600}
              height={540}
              className="feature-img"
            />
          </div>
        </Reveal>

        <Reveal className="feature reverse" delay={60}>
          <div className="feature-copy">
            <span className="caps accent">Partner</span>
            <h3 className="feature-name">Tidal</h3>
            <p className="feature-blurb">
              We're the strategic technology partner helping companies become AI-native.
            </p>
            <span className="feature-tag mono">Technology</span>
            <a
              className="feature-link"
              href="https://tidaltech.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tidaltech.co <span className="arrow">→</span>
            </a>
          </div>
          <div className="feature-media">
            <Image
              src="/assets/tidal.png"
              alt="tidal logo"
              width={600}
              height={540}
              className="feature-img"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Writing / Substack ────────────────────────────── */}
      <section className="section writing" id="writing" aria-labelledby="writing-h">
        <Reveal className="section-head">
          <span className="caps">Writing</span>
        </Reveal>

        <Reveal className="writing-card" delay={40}>
          <div className="writing-copy">
            <span className="caps accent">On Substack</span>
            <h2 id="writing-h" className="writing-title">
              Notes on becoming.
            </h2>
            <p>
              Essays on ambition, philosophy, community, and building a life that feels fully your own.
            </p>
            <a className="btn" href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              Read the Substack <span className="arrow">→</span>
            </a>
          </div>
          <a
            className="writing-aside"
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lo & Behold on Substack"
          >
            <Image
              src="/assets/lobehold.png"
              alt="Lo & Behold"
              width={420}
              height={420}
              className="writing-logo"
            />
          </a>
        </Reveal>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <footer className="contact" id="contact">
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
          <a
            className="secondary underline-link"
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack
          </a>
        </div>
      </footer>
    </>
  );
}
