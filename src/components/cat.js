import React, { Component } from "react";
// import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value
  };

  style = {
    align: "middle"
  };

  information = {
    about:
      `Quantum Physics/Computing Researcher and Full Stack Developer, 
      in love with Quantum Physics, Computing, Math, Python, Javascript, Arch Linux and free software. 
      Always eager to learn about new technologies, using new equipment and help in developing communities. 
      Lately focused on developing applications using the MERN and GRAND.`,
    education:
      `
      - UIO - Oslo, Norway
        Master' degree in Quantum Physics and Computer Engineering · (2016-2019)
      - CALTECh
        Quantum Cryptography, Computer Science · (2016 - 2018)
      - University of California, Berkeley
        Data Science and Engineering with Apache Spark, Data Analysis & Statistics · (2016 - 2016)
      - UFRGS
        Bachelor of Applied Science - BASc, Physics and Computer Sciences · (2011 - 2015)
      - freeCodeCamp
        Full Stack Web Development Certification, Computer Science · (2014 - 2014)`,
    projects: [
      {
        projectName: "Predict Forest Fires",
        liveDemo: "https://doomhammerhell.github.io/predict-forest-fires",
        linkToGithub: "https://github.com/doomhammerhell/predict-forest-fires"
      },
      {
        projectName: "Real-time Image Classifier",
        liveDemo: "https://doomhammerhell.github.io/real-time-image-classifier",
        linkToGithub: "https://github.com/doomhammerhell/real-time-image-classifier"
      }
    ],
    social: [
      {
        platform: "Github",
        link: "https://github.com/doomhammerhell"
      },

      {
        platform: "Github",
        link: "https://github.com/doomhammerhell"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <p className="prompt"> {this.props.line.value} </p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === "about") {
        return <p className="result">{this.information.about}</p>;
      } else if (lower === "education") {
        return <p className="result">{this.information.education}</p>;
      } else if (lower === "education") {
      } else if (lower === "projects" || lower === "project") {
        return (
          <React.Fragment>
            {this.information.projects.map((everyProject) => {
              return (
                <p className="result">
                  {everyProject.projectName}
                  <a href={everyProject.liveDemo} target="_blank">
                    Live Link
                  </a>
                  <a href={everyProject.linkToGithub} target="_blank">
                    {/* <img src={githubLogo} alt="GithubLink to Code" /> */}
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (
        lower === "socials" ||
        lower === "social" ||
        lower === "contact me" ||
        lower === "contactme" ||
        lower === "contact_me"
      ) {
        return (
          <React.Fragment>
            {this.information.social.map((everySocial) => {
              return (
                <p className="result">
                  <a href={everySocial.link} target="_blank">
                    {everySocial.platform}
                  </a>
                  <a href="https://github.com/doomhammerhell" target="_blank">
                    {/* <img src={githubLogo} alt="GithubLink to Code" /> */}
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else {
        return <p className="result">Opps wrong input</p>;
      }
    } else {
      return <p className="result">Opps wrong input</p>;
    }
  };
}

export default Cat;
