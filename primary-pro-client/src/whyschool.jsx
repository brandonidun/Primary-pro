import Navbar from "./navbar";

const Whyschool = () => {
  return (
    <div className="why-school-page">
      <div className="why-school-navbar">
        <Navbar />
      </div>
      <div className="why-school-banner">
        <div className="why-school-header">
          <h1>Why school matters</h1>
          <div className="header-underline"></div>
        </div>
        <div className="why-school-svgs">
          <div className="svg1"></div>
          <div className="svg2"></div>
          <div className="svg3"></div>
        </div>
      </div>
      <div className="why-school-info-banner">
        <div className="why-school-info">
          <h1>School is worth it, because you are worth it.</h1>
          <p>
            School isn't just a place to learn. It’s where you’ll find a
            community filled with new people and have new experiences. It’s
            where you’ll make friends for life and learn important lessons about
            yourself. It's where you'll go to reach new heights
          </p>
        </div>
      </div>
      <div className="why-school-more-info-banner">
        <div className="more-info1">
          <h1>You have curiosity. Explore it.</h1>
          <p>
            This is your opportunity to take what you’re already interested in
            and pursue it at a deeper level. Enroll in classes and sign up for
            activities that excite you, without the structured limitations of
            high school. Meet people from various backgrounds and cultures who
            have interests similar to — and different from — your own. They
            might even introduce you to new interests you didn’t know you had.
          </p>
        </div>
        <div className="more-info2">
          <h1>You have a purpose. Become it.</h1>
          <p>
            The future may seem uncertain, but college will help you discover
            the career path that matches your interests and motivates you to
            become the best version of yourself. You’ll learn to be more
            independent and gain the skills and knowledge you need to prepare
            you for the future. Meet mentors and fellow student leaders who
            inspire you to contribute and give back to your community and to the
            world.
          </p>
        </div>
        <div className="more-info3">
          <h1>You have potential. Exceed it.</h1>
          <p>
            Whatever your goals — getting a degree, owning a home, traveling the
            world — you can attain them. They require dedication and focus, but
            also financial stability. Here’s how a college degree can help over
            a lifetime: Someone with a high school diploma can expect to earn
            $1.3 million. A worker with some college but no degree earns $1.5
            million. An Associate’s degree-holder earns $1.7 million. A worker
            with a Bachelor’s degree will earn $2.3 million. Graduate degrees
            provide for even higher earnings: A Master’s degree-holder earns
            $2.7 million. A Doctoral degree-holder earns $3.3 million. A
            Professional degree-holder earns $3.6 million.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyschool;
