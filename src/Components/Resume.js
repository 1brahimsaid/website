import React, { Component } from "react";
import Slide from "react-reveal";
import Fade from "react-reveal";


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    var education = this.props.data.education.map(function (education) {
      var educationImage = 'images/portfolio/'+education.image;
      return (
        <div key={education.school}>
          <img src={education.image} src={educationImage} />
          <h3>{education.school}</h3>
          <p className="info">  
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    
    const work = this.props.data.work.map(function (work) {
      var workImage = 'images/portfolio/'+work.image;
      return (
        <div key={work.company}>
          <img src={work.image} src={workImage} />
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const additional = this.props.data.additional.map(function (additional) {
      var additionalImage = 'images/portfolio/'+additional.image;
      return (
        <div key={additional.company}>
          <img src={additional.image} src={additionalImage} />
          <h3>{additional.company}</h3>
          <p className="info">
            {additional.title}
            <span>&bull;</span> <em className="date">{additional.years}</em>
          </p>
          <p>{additional.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;
      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    var expanded = this.props.data.skills.map(function(skills){
        var projectImage = 'images/tech/'+skills.image;
        return (
        <div key={skills.name} className="columns feature-item">
                  <img className='skill' alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
                  <p>{skills.description}</p>
               </div>
        );
        });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row additional">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{additional}</div>
          </div>
        </Slide>
        
          <div className="row skill">
          <Slide left duration={1300}>
            <div className="three columns header-col">
              <h1>
                <span>My Skills</span>
              </h1>
            </div> 
            <div className="nine columns main-col">
              <p>{skillmessage}</p>
            </div> 
            </Slide>

              <ul className="bgrid-quarters s-bgrid-thirds cf">
              <Slide left duration={1300}> 
					    {expanded}
              </Slide>
					    </ul>
              
              <Slide left duration={1300}> 
              <div className="three columns header-col">
              <h1>
                <span>Expertise</span>
              </h1>
            </div>
          
            <div className="nine columns main-col">  
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
            </div>  
            </Slide>
          </div>

      </section>
    );
  }
}

export default Resume;
