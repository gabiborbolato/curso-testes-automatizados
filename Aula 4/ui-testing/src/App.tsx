/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';

const App = () => {
  const [skillsData, setSkillsData] = useState(
    [
      {
        "skillName": "",
        "developers": [],
        "profile": {
          "technologies": [],
          "roles": [],
        },
      },
    ]
  );


  const [showSkills, setShowSkills] = useState(false);

  let listSkills = skillsData.map((skill, index) =>
    <ul key={index}>
      <li>Skill Name: {skill.skillName}</li>
      <li>Developers:
        <ul>
          <li>{skill.developers[0]}</li>
          <li>{skill.developers[1]}</li>
        </ul>
      </li>
      <li>Technologies:
        <ul>
          <li>{skill.profile.technologies[0]}</li>
          <li>{skill.profile.technologies[1]}</li>
        </ul>
      </li>
    </ul>);

  function loadSkills() {
    setShowSkills(false);

    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
      .then(response => response.json())
      .then(data => {
        setSkillsData(data);
      });
    setShowSkills(true);
  }

  return (
    <div className="App">
      <header className="App-header" data-test="header_title">
        <h1>
          Developers App
        </h1>
      </header>
      <label htmlFor="input1">Skill Name</label>
      <input id="input-skill-name" className='input1' data-test="input_skill_name"></input>

      <label htmlFor="input1">Developers</label>
      <input id="input-developers" className='input1' data-test="input_developers"></input>

      <label htmlFor="input1">Technologies</label>
      <input id="input-technologies" className='input1' data-test="input_technologies"></input>

      <label htmlFor="input1">Roles</label>
      <input id="input-roles" className='input1' data-test="input_roles"></input>

      <button id="load-skills-button" data-test="add_skill_button" className="button1" onClick={() => loadSkills()}>Add Skill</button>
      {showSkills ? listSkills : ''}
    </div>
  );
}

export default App;
