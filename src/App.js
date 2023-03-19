import "./App.css";
//import { CSSTransition, Transition } from "react-transition-group";
import React, { useEffect, useState } from "react";
//import { useState, useRef } from "react";

//import Image from "react-bootstrap/Image";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
//import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Lottie from "react-lottie";
import animationData from "./lotties/scroll-down-arrow-white.json";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: "8px",
  border: "1px solid white",
  ":hover": {
    boxShadow: "5px 5px white",
    transform: "scale(1.02) perspective(0px)",
    transition: "all 0.1s ease-in-out",
  },
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

function getURL(website, username) {
  switch (website.toLowerCase()) {
    case "github":
      return {
        link: String.raw`https://github.com/${username}`,
        icon: brands("github"),
        color: "white",
      };
    case "linkedin":
      return {
        link: String.raw`https://www.linkedin.com/in/${username}`,
        icon: brands("linkedin"),
        color: "lightblue",
      };
    case "email":
      return {
        link: String.raw`mailto:${username}`,
        icon: solid("envelope"),
        color: "white",
      };
    case "phone":
      const phone = username.replace(/\D/g, "");
      return {
        link: String.raw`https://wa.me/${phone}`,
        icon: brands("whatsapp"),
        color: "lightgreen",
      };
    default:
      return "Invalid.";
  }
}

const CVFile = ({ file }) => {
  return (
    <Button href={file} id="download" download>
      {" "}
      Resume{" "}
    </Button>
  );
};

const getOffset = (e) => {
  const elRect = e.getBoundingClientRect();
  return elRect.top;
};

export { getOffset };

const ProfileName = ({ firstName, lastName, file }) => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    const heightToHide = 10;
    //const heightToHide = getOffset(document.getElementById("profile-name"));
    const windowScrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScrollHeight > heightToHide) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll, true);
    return () => window.removeEventListener("scroll", listenToScroll, true);
  }, []);

  return (
    <>
      <Grid2
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="profile"
        spacing={2}
      >
        <Grid2 id="profile-name">
          {firstName} {lastName}
        </Grid2>
        <Grid2>
          <CVFile file={file} />
        </Grid2>
      </Grid2>
      <Grid2
        container
        className="arrow"
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          opacity: !isVisible ? "0" : "1",
          transition: "all 1s",
          visibility: !isVisible ? "hidden" : "visible",
        }}
      >
        <Lottie height={"4em"} width={"4em"} options={defaultOptions} />
      </Grid2>
    </>
  );
};

const GetA = ({ links }) => {
  if (!links) {
    return;
  }

  var allLinks = [];

  Object.entries(links).forEach(([name, link]) => {
    allLinks.push(
      <a href={link} target="_blank">
        {" "}
        {name}
      </a>
    );
  });

  return allLinks;
};

const ProjectDescription = ({ img_src, name, description, url, links }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Item elevation={1} id="project">
        <Grid2
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="project-desc"
        >
          <Grid2 item>
            <Image src={img_src} id="project-image" />
          </Grid2>

          <Grid2 container direction="column" id="project-info">
            <Grid2 item>
              <a href={url} target="_blank">
                <h1 id="project-title"> {name} </h1>
              </a>
            </Grid2>
            <Grid2 item xs zeroMinWidth id="project-description">
              <div>
                {description} <GetA links={links}></GetA>{" "}
              </div>
            </Grid2>
          </Grid2>
        </Grid2>
      </Item>
    </ThemeProvider>
  );
};

const Projects = () => {
  const rippit_desc =
    "Fullstack forum website built using PHP, Javascript, HTML, CSS (Bootstrap), jQuery, MySQL, MongoDB";
  const rippit_url = String.raw`https://github.com/BrainTeazer/Rippit`;

  const odin_desc = "GUI-based web projects written in CSS, HTML, Javascript: ";
  const odin_url = String.raw`https://www.theodinproject.com/`;
  const odin_links = {
    "Etch-a-Sketch, ": String.raw`https://github.com/BrainTeazer/etch-a-sketch`,
    "Calculator, ": String.raw`https://github.com/BrainTeazer/calculator-js`,
    "Rock-Paper-Scissors": String.raw`https://github.com/BrainTeazer/rock-paper-scissors`,
  };

  const uci_desc = "Written in C++. Extracts 57 email attributes based on ";
  const uci_url = String.raw`https://github.com/BrainTeazer/spam-email-extractor`;
  const uci_links = {
    "UCI's Spambase Data Set": String.raw`https://archive.ics.uci.edu/ml/datasets/Spambase`,
  };

  const src_desc =
    "Source code of personal website hosted on Github Pages written in React, React-Bootstrap, HTML, CSS";
  const src_url = String.raw`https://github.com/BrainTeazer/brainteazer.github.io`;

  const sml_desc =
    "Stochastic models related to financial mathematics written in Python.";

  return (
    <Grid2 container className="projects">
      <Grid2>
        <h1 id="project-header"> Projects </h1>
      </Grid2>
      <Grid2
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        xs={12}
      >
        <Grid2 item xs={6} md={6}>
          <ProjectDescription
            img_src="whiteclaws.png"
            name="Rippit"
            description={rippit_desc}
            url={rippit_url}
          />
        </Grid2>
        <Grid2 item xs={6} md={6}>
          <ProjectDescription
            img_src="odin.png"
            name="The Odin Project"
            description={odin_desc}
            url={odin_url}
            links={odin_links}
          />
        </Grid2>
        <Grid2 item xs={6} md={6}>
          <ProjectDescription
            img_src="stochastic-random-walk.png"
            name="Stochastic Methods Lab"
            description={sml_desc}
          />
        </Grid2>
        <Grid2 item xs={6} md={6}>
          <ProjectDescription
            img_src="uci.png"
            name="Email Spam Extractor"
            description={uci_desc}
            url={uci_url}
            links={uci_links}
          />
        </Grid2>
        <Grid2 item xs={6} md={6}>
          <ProjectDescription
            img_src="code.png"
            name="Source Code"
            description={src_desc}
            url={src_url}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

const Skill = ({ name, img }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Item elevation={12} id="skill">
        <Grid2
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid2>
            <Image src={img} id="skill-image"></Image>
          </Grid2>
          <Grid2>
            <div>{name}</div>
          </Grid2>
        </Grid2>
      </Item>
    </ThemeProvider>
  );
};

const About = () => {
  return (
    <Grid2 container className="about" direction="column" spacing={2}>
      <Grid2 item>
        <h1 id="about-header"> About </h1>
      </Grid2>
      <Grid2 item>
        <div id="about-description">
          <ul>
            <li>
              {" "}
              <span style={{ color: "#f4b183" }}>Computer Science</span> student
              minoring in <span style={{ color: "#f4b183" }}>Mathematics </span>
              at Constructor University (formerly Jacobs University Bremen) in
              Germany.{" "}
            </li>
            <li>
              {" "}
              Fast learner, hard-worker, dedicated, open-minded, critical
              thinker.{" "}
            </li>
            <li> I enjoy listening to music, cycling, and walking.</li>
          </ul>
        </div>
      </Grid2>
      <Grid container className="skills" direction="column">
        <Grid2 item>
          <h1 id="skills-header"> Skills </h1>
        </Grid2>
        <Grid2
          id="all-skills"
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid2 md={2} xs={4}>
            <Skill name={"C"} img={"c.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"C++"} img={"cpp.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"JavaScript"} img={"js.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"Python"} img={"python.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"Rust"} img={"rust.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"PHP"} img={"php.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"CSS"} img={"css.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"HTML"} img={"html.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"Java"} img={"java.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"Kotlin"} img={"kotlin.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"LaTeX"} img={"latex.png"}></Skill>
          </Grid2>
          <Grid2 md={2} xs={4}>
            <Skill name={"Vim"} img={"vim.png"}></Skill>
          </Grid2>
        </Grid2>
      </Grid>
    </Grid2>
  );
};

const ContactInformation = ({ email, phone, linkedin, github, address }) => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="contact"
    >
      <Grid2>
        <div>Get in touch.</div>
      </Grid2>
      <Grid2>
        <ContactDetail detail="email" name={email} />
        <ContactDetail detail="linkedin" name={linkedin} />
        <ContactDetail detail="github" name={github} />
        <ContactDetail detail="phone" name={phone} />
      </Grid2>
    </Grid2>
  );
};

const ContactDetail = ({ detail, name }) => {
  const info = getURL(detail, name);
  return (
    <a
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      id="contact-detail"
      style={{ color: info.color }}
    >
      <FontAwesomeIcon icon={info.icon} pulse />
    </a>
  );
};

const App = () => {
  const personalInfo = {
    firstName: "Ayam",
    lastName: "Banjade",
    linkedin: "ayambanjade",
    email: "ayam.banjade@gmail.com",
    phone: "(+49)15752730515",
    github: "BrainTeazer",
    address: "test",
    cvFileName: "../public/documents/Ayam_Banjade_Resume_2023_MARCH.pdf",
  };

  return (
    <>
      <ProfileName
        firstName={personalInfo.firstName}
        lastName={personalInfo.lastName}
        file={personalInfo.cvFileName}
      />

      <About />
      <Projects />

      <ContactInformation
        linkedin={personalInfo.linkedin}
        email={personalInfo.email}
        github={personalInfo.github}
        address={personalInfo.address}
        phone={personalInfo.phone}
      />
    </>
  );
};

export default App;
