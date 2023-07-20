import Navbar from "./navbar";


const Roadmap = () => {
    return ( 
        <div className="roadmap-page">
            <div className="roadmap-navbar">
            <Navbar />
        </div>
        <div className="roadmap-banner">
        <div className="roadmap-header">
            <h1>
                Your path to school
            </h1>
            <div className="roadmap-underline"></div>
        </div>
        <div className="roadmap-svgs">
            <div className="svg1">
            </div>
            <div className="svg2">
            </div>
            <div className="svg3">
            </div>
        </div>
        </div>
        <div className="roadmap-info-banner">
            <div className="roadmap-info">
            <h1>If you’re looking at PrimaryPro, you’re already on your way </h1>
            <p>no matter where you are in the process, PrimaryPro will help you set off your school journey with the following guidelines and checkpoints</p>
            </div>
        </div>
        <div className="roadmap-more-info-banner">
            <div className="more-info1">
                <h1>Early Childhood Education: Building a Strong Foundation</h1>
                <p>The pathway to basic school begins with early childhood education, where children aged 3 to 5 experience a structured learning environment. They engage in storytelling, creative play, and interactive activities, developing essential skills like language acquisition and problem-solving. Early childhood educators foster curiosity and a love for learning, laying the groundwork for a smooth transition to formal schooling.</p>
            </div>
            <div className="more-info2">
                <h1>Primary Education: Exploring Core Subjects</h1>
                <p>In primary education, typically from ages 6 to 11, children delve into core subjects like math, language arts, science, and social studies. Teachers use diverse instructional methods to cater to different learning styles, promoting critical thinking and creativity. Primary education nurtures not only academic knowledge but also values such as discipline and empathy.</p>
            </div>
            <div className="more-info3">
                <h1>Transitioning to Secondary School: Preparing for the Future</h1>
                <p>The move to secondary school, ages 12 to 17, marks a significant milestone. Secondary education offers a specialized curriculum aligned with students' interests and career aspirations. Alongside academics, it emphasizes character development, resilience, and leadership. Students are encouraged to engage in extracurricular activities, preparing them for higher education or the workforce and fostering personal growth. </p>
            </div>
        </div>
        </div>
     );
}
 
export default Roadmap;