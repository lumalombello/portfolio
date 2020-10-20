import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import LastImg from "./LastImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <img 
    		alt="fase2"
            src={require("../../assests/images/person/img0.svg")}
          ></img> ;
  else if (props.fileName === "FullStackImg")
    return<img
            alt="fase1"
            src={require("../../assests/images/stakeholder_data/img2.svg")}
          ></img> ;
  else if (props.fileName === "CloudInfraImg")
    return <img 
    		alt="fase2"
            src={require("../../assests/images/brain_story/img3.svg")}
          ></img> ;
  else if (props.fileName === "DesignImg")
    return <img 
    		alt="fase3"
            src={require("../../assests/images/high_proto/img4.svg")}
          ></img> ;
  return <img 
    		alt="fase4"
            src={require("../../assests/images/usabilty_test_iter/img5.svg")}
          ></img> ;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
