import Image from 'next/image';
import Reveal from '@/components/Reveal';

// ── editable content ──────────────────────────────────────────
// Paste your real Substack URL here.
const SUBSTACK_URL = 'https://laurynhudson.substack.com/';

const travel = [
  { src: '/assets/travel.png', place: 'Giza, Egypt', note: 'The Great Pyramids' },
  { src: '/assets/xula.jpg', place: 'New Orleans, LA', note: 'Homecoming, Xavier University' },
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
          <span className="caps">01 — About</span>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <h2 id="about-h" className="lede">
              Engineer by training, founder by conviction.
            </h2>
            <p>
              I&apos;m Lauryn — a software engineer turned founder building MOVE,
              the social platform designed to pull people off their screens and
              into real life. I care about technology that makes the world feel
              smaller and more human, not louder.
            </p>
            <p>
              Before MOVE I shipped across AI and consumer products — from
              maternal-health risk modeling to agent tooling. A New Orleans and
              Xavier University foundation shapes how I build: community first,
              craft always. Today I&apos;m based in Los Angeles, writing,
              speaking, and building in public.
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
          <span className="caps">02 — Work &amp; ventures</span>
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
              alt="MOVE app mockup"
              width={600}
              height={540}
              className="feature-img"
            />
          </div>
        </Reveal>

        <Reveal className="feature reverse" delay={60}>
          <div className="feature-copy">
            <span className="caps accent">Founder</span>
            <h3 className="feature-name">tidal</h3>
            <p className="feature-blurb">
              {/* TODO: replace with the real one-line description of tidal */}
              A technology venture building what&apos;s next.
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
          <div className="feature-media wordmark" aria-hidden="true">
            <span>tidal</span>
          </div>
        </Reveal>
      </section>

      {/* ── Writing / Substack ────────────────────────────── */}
      <section className="section writing" id="writing" aria-labelledby="writing-h">
        <Reveal className="section-head">
          <span className="caps">03 — Writing</span>
        </Reveal>

        <Reveal className="writing-card" delay={40}>
          <div className="writing-copy">
            <span className="caps accent">On Substack</span>
            <h2 id="writing-h" className="writing-title">
              Notes on building, in real life.
            </h2>
            <p>
              Essays on founding, engineering, and the case for living offline —
              published when I have something worth saying.
            </p>
            <a className="btn" href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              Read the Substack <span className="arrow">→</span>
            </a>
          </div>
          <div className="writing-aside" aria-hidden="true">
            <span className="writing-mark">✺</span>
          </div>
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
