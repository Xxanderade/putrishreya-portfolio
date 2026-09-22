export default function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #08090b;
          color: #f5f5f5;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1100px, 92%);
          margin: auto;
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(14px);
          background: rgba(8, 9, 11, 0.8);
          border-bottom: 1px solid #202329;
        }

        .nav-inner {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo span {
          color: #8b5cf6;
        }

        .links {
          display: flex;
          gap: 28px;
          color: #a8adb7;
          font-size: 14px;
        }

        .links a:hover {
          color: white;
        }

        .hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          width: 420px;
          height: 420px;
          background: #6d28d9;
          filter: blur(150px);
          opacity: 0.18;
          border-radius: 50%;
          right: -120px;
          top: 80px;
        }

        .hero-content {
          max-width: 760px;
          position: relative;
        }

        .tag {
          display: inline-block;
          border: 1px solid #343842;
          padding: 8px 14px;
          border-radius: 999px;
          color: #b9bec8;
          font-size: 13px;
          margin-bottom: 24px;
          background: #111318;
        }

        h1 {
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.98;
          letter-spacing: -4px;
          margin: 0 0 25px;
        }

        h1 span {
          color: #8b5cf6;
        }

        .hero p {
          color: #a8adb7;
          font-size: 19px;
          line-height: 1.7;
          max-width: 650px;
        }

        .buttons {
          display: flex;
          gap: 14px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .button {
          padding: 13px 20px;
          border-radius: 10px;
          border: 1px solid #343842;
          font-weight: 700;
          font-size: 14px;
        }

        .primary {
          background: #8b5cf6;
          border-color: #8b5cf6;
          color: white;
        }

        section {
          padding: 90px 0;
          border-top: 1px solid #202329;
        }

        .section-label {
          color: #8b5cf6;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        h2 {
          font-size: 40px;
          margin: 0 0 18px;
          letter-spacing: -1.5px;
        }

        .section-text {
          color: #9da3ae;
          line-height: 1.8;
          max-width: 700px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 35px;
        }

        .card {
          background: #101216;
          border: 1px solid #242830;
          border-radius: 16px;
          padding: 25px;
        }

        .card h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }

        .card p {
          color: #9da3ae;
          line-height: 1.7;
          font-size: 14px;
        }

        .number {
          color: #8b5cf6;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .contact {
          text-align: center;
          padding-bottom: 120px;
        }

        .contact p {
          color: #9da3ae;
          margin: 0 auto 28px;
          max-width: 550px;
          line-height: 1.7;
        }

        footer {
          border-top: 1px solid #202329;
          padding: 25px 0;
          color: #686e79;
          font-size: 13px;
          text-align: center;
        }

        @media (max-width: 700px) {
          .links {
            display: none;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          h1 {
            letter-spacing: -2px;
          }

          .hero {
            min-height: 580px;
          }
        }
      `}</style>

      <nav>
        <div className="container nav-inner">
          <div className="logo">
            Putri<span>.</span>
          </div>

          <div className="links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="glow"></div>

          <div className="container">
            <div className="hero-content">
              <div className="tag">WEB3 • COMMUNITY • CONTENT</div>

              <h1>
                Building in
                <br />
                <span>Web3.</span>
              </h1>

              <p>
                Hi, I&apos;m Putri. I&apos;m exploring Web3 through community
                building, content creation, and hands-on experience across
                emerging crypto projects.
              </p>

              <div className="buttons">
                <a className="button primary" href="#about">
                  Explore My Work
                </a>

                <a className="button" href="#contact">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-label">01 — About</div>
            <h2>Curious. Consistent. Building.</h2>

            <p className="section-text">
              I&apos;m interested in the intersection of technology,
              communities, and digital ownership. My journey in Web3 is
              focused on learning by doing, connecting with people, and
              turning ideas into meaningful community experiences.
            </p>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <div className="section-label">02 — Experience</div>
            <h2>What I do</h2>

            <div className="cards">
              <div className="card">
                <div className="number">01</div>
                <h3>Community</h3>
                <p>
                  Helping communities grow through engagement, moderation,
                  events, and relationship building.
                </p>
              </div>

              <div className="card">
                <div className="number">02</div>
                <h3>Content</h3>
                <p>
                  Creating educational and project-focused content for Web3
                  audiences across social platforms.
                </p>
              </div>

              <div className="card">
                <div className="number">03</div>
                <h3>Web3</h3>
                <p>
                  Exploring crypto ecosystems, AI agents, DeFi, trading, and
                  emerging blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-label">03 — Skills</div>
            <h2>Things I&apos;m learning & building</h2>

            <div className="cards">
              <div className="card">
                <h3>Community Management</h3>
                <p>
                  Discord operations, member engagement, events, and community
                  communication.
                </p>
              </div>

              <div className="card">
                <h3>Content Creation</h3>
                <p>
                  Social media content, educational threads, project
                  storytelling, and Web3 research.
                </p>
              </div>

              <div className="card">
                <h3>Crypto & DeFi</h3>
                <p>
                  Learning about tokens, trading, liquidity, decentralized
                  applications, and blockchain ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-label">04 — Contact</div>
            <h2>Let&apos;s connect.</h2>

            <p>
              Interested in collaborating, building a community, or talking
              about Web3? Feel free to reach out.
            </p>

            <a
              className="button primary"
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on X
            </a>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Putri. Built with Next.js.
      </footer>
    </>
  );
}
