import "./style.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Challenge</h2>
      <p>
        I have developed the chart component for the challenge presented by
        Salacia Solutions.
      </p>
      <p>
        The main objective of this implementation is to visually represent JSON
        data that consists of three levels of objects.:
      </p>
      <ul>
        <li>Scope</li>
        <li>Category</li>
        <li>Individual activities</li>
      </ul>
      <p>
        To achieve this, I utilized the React framework along with high chart
        libraries. The resulting implementation features a three-level
        drill-down chart that fetches data from a JSON object, allowing users to
        select from a variety of chart types
      </p>
    </div>
  );
};

export default AboutPage;
