import Navbar from "./navbar";

const Fees = () => {
  return (
    <div className="fees-page">
      <div className="fees-navbar">
        <Navbar />
      </div>
      <div className="fees-banner">
        <div className="fees-header">
          <h1>Paying for school</h1>
          <div className="header-underline"></div>
        </div>
        <div className="fees-svgs">
          <div className="svg1"></div>
          <div className="svg2"></div>
          <div className="svg3"></div>
        </div>
      </div>
      <div className="fees-info-banner">
        <div className="fees-info">
          <h1>Making schoool more affordable</h1>
          <p>
            For many applicants and their families, the most daunting aspect of
            the journey to school is the price tag — but it doesn’t have to be.
            There are more options available than you might realize to help
            alleviate many of the burdens associated with paying for school.
          </p>
        </div>
      </div>
      <div className="fees-more-info-banner">
        <div className="more-info1">
          <h1>Start saving.</h1>
          <p>
            Saving for basic school education is a prudent and essential
            financial endeavor for parents and guardians. As the foundation of a
            child's educational journey, basic school education sets the stage
            for their future academic achievements and personal growth. By
            starting to save early and consistently, families can alleviate the
            financial burden associated with tuition fees, school supplies, and
            other educational expenses. Setting up a dedicated savings fund or
            investment plan ensures that funds are readily available when
            needed, providing children with access to quality education without
            compromising their opportunities for a brighter future.
          </p>
        </div>
        <div className="more-info2">
          <h1>Apply for financial aid.</h1>
          <p>
            Applying for financial aid for basic school education can be a
            crucial step in ensuring equal access to quality education for all
            students, regardless of their economic backgrounds. Many families
            face financial constraints when it comes to funding their children's
            education, and financial aid programs play a vital role in
            alleviating these burdens. To initiate the process, parents or
            guardians typically complete a financial aid application, providing
            details of their income, expenses, and other relevant information.
            Educational institutions and government agencies then review these
            applications to determine the level of assistance needed.
          </p>
        </div>
        <div className="more-info3">
          <h1>Applying to public schools.</h1>
          <p>
            Applying to public schools can significantly contribute to accessing
            free education for students. Public schools are funded by the
            government and are designed to provide education to all children
            within their designated area, without tuition fees. By enrolling in
            a public school, families can benefit from cost-free education,
            reducing the financial burden associated with private schooling.
            Moreover, public schools often offer a comprehensive range of
            academic programs and extracurricular activities, ensuring a
            well-rounded educational experience. Additionally, public schools
            embrace diversity, welcoming students from various socioeconomic
            backgrounds, cultures, and abilities, fostering an inclusive
            learning environment that promotes understanding and collaboration
            among students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fees;
