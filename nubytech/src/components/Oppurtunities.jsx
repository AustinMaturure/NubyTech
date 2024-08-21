import "../css/oppurtunities.css";
import dream from "../assets/dream.webp";
import future from "../assets/future.webp";

function Oppurtunities() {
  return (
    <>
      <section className="oppurtunities">
        <h1 className="op-header">Oppurtunities</h1>
        <div className="oppurtunity">
          <div className="op-text">
            <h1>
              {" "}
              01.<span className="ital"> Dream</span> Builder
            </h1>
            <p>
              Dream Builder is Nutbytech's effort to support women entrepreneurs
              by turning their innovative ideas into reality. This initiative
              provides entrepreneurs with the technical expertise needed to
              develop MVPs (Minimum Viable Products). By working with talented
              developers from Code Her Future, Dream Builder helps entrepreneurs
              create and refine their MVPs, boosting their chances of securing
              funding and achieving business success. Dream Builder is dedicated
              to empowering women and fostering entrepreneurial growth with
              practical, results-oriented support.
            </p>
            <button>Apply Now</button>
          </div>
          <div className="op-img">
            <img src={dream} alt="" srcset="" />
          </div>
        </div>
        <div className="oppurtunity">
          <div className="op-img">
            <img src={future} alt="" srcset="" />
          </div>
          <div className="op-text">
            <h1>
              02. Code-<span className="ital">Her</span>-Future
            </h1>
            <p>
              Code Her Future is an initiative by Nubytech designed for coding
              bootcamp graduates. It provides these graduates with practical
              experience by involving them in the development of MVPs (Minimum
              Viable Products) for women entrepreneurs. This hands-on experience
              helps participants enhance their technical skills and build strong
              portfolios, making them more competitive in the job market. Code
              Her Future bridges the gap between education and employment by
              showcasing the graduates' abilities through real-world projects.
            </p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Oppurtunities;
