import "../css/about.css";
import question from "../assets/question.svg";
import target from "../assets/target.svg";
import bino from "../assets/binoculars.svg";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-text">
          <h2>
            <span className="ital">NubyTech</span> is a forward thinking tech
            company dedicated to <span className="ital">empowering women</span>{" "}
            across Africa in the tech industry. We focus on{" "}
            <span className="ital">Nurturing Inovation</span>, providing skill
            development, mentorship and creating a{" "}
            <span className="ital">supportive community</span> for aspiring tech
            leaders and entrapreneurs. Our mission is to drive{" "}
            <span className="ital">Impactful</span> change and foster leadership
            among women in Africa's <span className="ital">dynamic</span> tech
            landscape
          </h2>
        </div>
        <div>
          <section className="motifs">
            <div className="motif">
              <div className="motif-img">
                <img src={question} alt="" />
              </div>
              <div className="motif-text">
                <h3>Why</h3>
                <p>
                  We believe in the immense potential of African women and are
                  committed to breaking down barriers to create meaningful
                  opportunities. Our goal is to equip women with the skills and
                  resources they need to lead and drive change in the tech
                  sector.
                </p>
              </div>
            </div>

            <div className="motif">
              <div className="motif-img">
                <img src={target} alt="" />
              </div>
              <div className="motif-text">
                <h3>Mission</h3>
                <p>
                  Nubytech is dedicated to empowering and supporting emerging
                  female tech leaders and entrepreneurs in Africa. We create
                  opportunities for women to excel in tech, fostering innovation
                  and inclusivity within the industry.
                </p>
              </div>
            </div>
            <div className="motif">
              <div className="motif-img">
                <img src={bino} alt="" />
              </div>
              <div className="motif-text">
                <h3>Vision</h3>
                <p>
                  To be a driving force for innovation in Africa by empowering
                  the next generation of female tech leaders through a dynamic
                  ecosystem of collaboration and support.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="BHG">
          <div className="scope">
            <p>our plans...</p>
            <h1>500 MVP's</h1>
            <p>for when?</p>
            <h1>2030</h1>
          </div>
          <div className="scope-text">
            <h4>
              We're on a journey to create 500 innovative MVPs for entrepreneurs
              across the continent, providing robust proof-of-concept solutions
              that enable them to confidently approach investors. The journey to
              the 500 begins with you.
            </h4>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
