import aboutImg from "../assets/About-img.png";

const About = () => {
  return (
    <div className="min-h-screen section">
      <div className="flex flex-col lg:flex-row justify-between">
        <img src={aboutImg} alt="about image" />
        <div></div>
      </div>
    </div>
  );
};

export default About;
