import "./App.css";
//import { CSSTransition, Transition } from "react-transition-group";
import React, { useEffect, useState } from "react";
//import { useState, useRef } from "react";

//import Image from "react-bootstrap/Image";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
//import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Lottie from "react-lottie";
import animationData from "./lotties/scroll-down-arrow-white.json";
import DevIcon from "devicon-react-svg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  overflow: "auto",
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: "8px",
  border: "1px solid white",
  ":hover": {
    //boxShadow: "5px 5px white",
    transform: "scale(1.05) perspective(0px)",
    transition: "all 0.1s ease-in-out",
  },
}));

const Info = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  overflow: "auto",
  color: theme.palette.text.primary,
  borderRadius: "8px",
  border: "1px solid #00000f",
  verticalAlign: "middle",
  padding: "2em",
  fontSize: "1.2em",
  fontFamily: "sans-serif",
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
    <Button href={file} id="download" target="_blank">
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
    const windowScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

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

  function scrollAbout() {
    document.getElementById("about").scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <>
      <Grid2 container direction="column" justifyContent="center" alignItems="center" className="section" spacing={2}>
        <Grid2 id="profile-name" item>
          {firstName} {lastName}
        </Grid2>

        <Grid2 item>
          <CVFile file={file} />
        </Grid2>
      </Grid2>
      <Grid2
        container
        className="arrow"
        style={{
          opacity: !isVisible ? "0" : "1",
          transition: "all 1s",
          visibility: !isVisible ? "hidden" : "visible",
        }}
        onClick={() => scrollAbout()}
      >
        <Lottie height={"4em"} width={"4em"} options={defaultOptions} isClickToPauseDisabled />
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
      <a href={link} target="_blank" rel="noopener noreferrer">
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
        <Grid2 container direction="column">
          <Grid2 item>
            <Image src={img_src} id="project-image" />
          </Grid2>

          <Grid2 container direction="column" id="project-info">
            <Grid2 item>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h1 id="project-title"> {name} </h1>
              </a>
            </Grid2>

            <Grid2 item id="project-description">
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

const ProjectDescriptionGrid = ({ img_src, name, description, url, links }) => {
  const extra_small_width = 12;
  const medium_width = 6;
  return (
    <Grid2 item xs={extra_small_width} md={medium_width}>
      <ProjectDescription img_src={img_src} name={name} description={description} url={url} links={links} />
    </Grid2>
  );
};

const Projects = () => {
  const rippit_desc = "Fullstack forum website built using PHP, Javascript, HTML, CSS (Bootstrap), jQuery, MySQL, MongoDB";
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

  const src_desc = "Source code of personal website hosted on Github Pages written in React, React-Bootstrap, HTML, CSS";
  const src_url = String.raw`https://github.com/BrainTeazer/brainteazer.github.io`;

  const sml_desc = "Stochastic models related to financial mathematics written in Python.";

  const bug_world_desc = "Simulation game written in Javavscript, HTML, and CSS. Developed assembler, parser, simulator, and GUI. Implemented test cases using ";
  const bug_world_url = String.raw`https://github.com/BrainTeazer/bug-world`;
  const bug_world_links = {
    Jest: String.raw`https://jestjs.io/`,
  };

  return (
    <Grid2 container className="section" justifyContent="center" mt={"15em"}>
      <Grid2>
        <h1 id="project-header" className="header">
          {" "}
          Projects{" "}
        </h1>
      </Grid2>

      <Grid2 container justifyContent="center">
        <ProjectDescriptionGrid img_src="whiteclaws.png" name="Rippit" description={rippit_desc} url={rippit_url} />
        <ProjectDescriptionGrid img_src="bug.png" name="Bug World" description={bug_world_desc} url={bug_world_url} links={bug_world_links} />
        <ProjectDescriptionGrid img_src="odin.png" name="The Odin Project" description={odin_desc} url={odin_url} links={odin_links} />
        <ProjectDescriptionGrid img_src="stochastic-random-walk.png" name="Stochastic Methods Lab" description={sml_desc} />
        <ProjectDescriptionGrid img_src="uci.png" name="Email Spam Extractor" description={uci_desc} url={uci_url} links={uci_links} />
        <ProjectDescriptionGrid img_src="code.png" name="Source Code" description={src_desc} url={src_url} />
      </Grid2>
    </Grid2>
  );
};

const Skill = ({ name, img }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Item id="skill">
        <Grid2 container direction="column" justifyContent="center" alignItems="center">
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

const SkillGrid = ({ name, img }) => {
  const extra_small_width = 12;
  const small_width = 6;
  const medium_width = 2;
  return (
    <Grid2 md={medium_width} sm={small_width} xs={extra_small_width}>
      <Skill name={name} img={img} />
    </Grid2>
  );
};

const About = () => {
  return (
    <Grid2 container className="section" id="about" direction="column" alignItems={"center"} justifyContent={"center"} spacing={2}>
      <Grid2 item>
        <h1 id="about-header" className="header">
          {" "}
          About{" "}
        </h1>
      </Grid2>
      <Grid2 xs={8} item>
        <ThemeProvider theme={darkTheme}>
          <Info>
            <ul>
              <li>
                {" "}
                <span style={{ color: "#f4b183" }}>Computer Science</span> student minoring in <span style={{ color: "#f4b183" }}>Mathematics </span>
                at Constructor University (formerly Jacobs University Bremen) in Germany.{" "}
              </li>
              <li> Fast learner, hard-worker, dedicated, open-minded, critical thinker. </li>
              <li> I enjoy listening to music, cycling, and walking.</li>
            </ul>
          </Info>
        </ThemeProvider>
      </Grid2>
      <Grid2 container className="skills" direction="column" justifyContent={"center"} alignItems={"center"} sx={{ m: "2em" }}>
        <Grid2 item>
          <h1 id="skills-header" className="header">
            {" "}
            Skills{" "}
          </h1>
        </Grid2>
        <Grid2 container id="all-skills" justifyContent="center" alignItems="center">
          <SkillGrid name={"C"} img={"c.png"} />
          <SkillGrid name={"C++"} img={"cpp.png"} />
          <SkillGrid name={"JavaScript"} img={"js.png"} />
          <SkillGrid name={"Python"} img={"python.png"} />
          <SkillGrid name={"Rust"} img={"rust.png"} />
          <SkillGrid name={"PHP"} img={"php.png"} />
          <SkillGrid name={"React"} img={"react.png"} />
          <SkillGrid name={"CSS"} img={"css.png"} />
          <SkillGrid name={"HTML"} img={"html.png"} />
          <SkillGrid name={"Java"} img={"java.png"} />
          <SkillGrid name={"Kotlin"} img={"kotlin.png"} />
          <SkillGrid name={"LaTeX"} img={"latex.png"} />
          <SkillGrid name={"Vim"} img={"vim.png"} />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

const ContactInformation = ({ email, phone, linkedin, github }) => {
  return (
    <Grid2 container direction="column" justifyContent="center" alignItems="center" className="section">
      <Grid2 sx={{ p: "0.3em" }}>
        <span id="contact-msg">Get in touch.</span>
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
    <a href={info.link} target="_blank" rel="noopener noreferrer" id="contact-detail" style={{ color: info.color }}>
      <FontAwesomeIcon icon={info.icon} />
    </a>
  );
};

const App = () => {
  const resumeFilePath = String.raw`documents/Ayam_Banjade_Resume_2023_APRIL.pdf`;
  const personalInfo = {
    firstName: "Ayam",
    lastName: "Banjade",
    linkedin: "ayambanjade",
    email: "ayam.banjade@gmail.com",
    phone: "(+49)15752730515",
    github: "BrainTeazer",
    address: "test",
    resumeURL: String.raw`https://brainteazer.github.io/${resumeFilePath}`,
  };

  return (
    <>
      <ProfileName firstName={personalInfo.firstName} lastName={personalInfo.lastName} file={personalInfo.resumeURL} />

      <About />
      <Projects />

      <ContactInformation linkedin={personalInfo.linkedin} email={personalInfo.email} github={personalInfo.github} address={personalInfo.address} phone={personalInfo.phone} />
    </>
  );
};

export default App;
