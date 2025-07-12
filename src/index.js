import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/src/sahil.jpg" alt="Sahil Deore" />;
}
function Intro() {
  return (
    <div>
      <h1>Sahil Deore</h1>
      <p>
        A web developer passionate about creating sleek, user-friendly websites
        that make an impact. With expertise in [key skills, e.g., JavaScript,
        React, etc.], I love turning ideas into engaging digital experiences.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="❤️" color="#009dd1" />
      <Skill skill="JavaScript" emoji="💥" color="#e5de00" />
      <Skill skill="HTML+CSS" emoji="🔥" color="Orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
