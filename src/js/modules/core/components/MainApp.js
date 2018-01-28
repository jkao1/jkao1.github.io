import React, { PureComponent } from "react";
import injectSheet from "react-jss";

import SelectedProjects from "./SelectedProjects";

const styles = {
  MainApp: {
    padding: "7.5vw",
    paddingTop: "270px",
  },
  contentSection: {
    marginBottom: "3.5vw",
    width: "55%",
    "& p + p": {
      marginTop: "0.725em",
    },
  },
  subText: {
    color: "#777",
    "& a": {
      color: "#777",
      textDecoration: "none",
      "&:hover": {
        color: "#000",
      },
    },
  },
  contactMe: {
    display: "flex",
  },
  highlightRed: {
    color: "#000",
    position: "relative",
    textDecoration: "none",
    "&:after": {
      bottom: 0,
      content: "''",
      position: "absolute",
      right: 0,
      left: 0,
      height: "3px",
      background: "#f00",
      borderRadius: "10px",
    },
  },
  "@media (max-width: 767px)": {
    MainApp: {
      padding: "7.5vw 5vw",
      paddingTop: "180px",
    },
    contentSection: {
      width: "auto",
    },
    contactMe: {
      display: "block",
    },
    mobileFixedHeight: {
      height: "2.8em",
    },
  },
};

const roles = [
  "software engineer",
  "enterpreneur",
  "React nerd",
  "software engineer",
  "data scientist",
  "hackathon hacker",
  "React nerd",
];

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      roleIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateRoleIndex, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateRoleIndex = () => {
    this.setState({ roleIndex: (this.state.roleIndex + 1) % roles.length });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.MainApp}>
        <div className={classes.contentSection}>
          <p className={classes.mobileFixedHeight}>
            Jason Kao&mdash;{roles[this.state.roleIndex]}.
          </p>
          <p>
            I am fascinated by the ability of technology to scale human impact,
            and I am constantly looking for new projects to immerse myself in.
          </p>
        </div>
        <SelectedProjects />
        <div className={classes.contentSection}>
          <p>Buzzwords&mdash;</p>
          <p className={classes.subText}>
            JavaScript (ES7), Python, Java, Ruby, C++, C, C#, SQL, Lisp
          </p>
          <p className={classes.subText}>
            React / Redux / Apollo, Rails, GraphQL, Docker, Git, Node, Heroku,
            AWS, GCP, Digital Ocean, Nginx
          </p>
          {/*
          <p>
            <a
              className={classes.highlightRed}
              href="https://jasonkao.me/Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </p>
        */}
        </div>
        <div className={classes.contactMe}>
          <div className={classes.contentSection}>
            <p>Social&mdash;</p>
            <p className={classes.subText}>
              <a href="https://github.com/jkao1" target="_blank">GitHub</a>
              <br />
              <a href="https://linkedin.com/in/jkao1/" target="_blank">LinkedIn</a>
              <br />
              <a href="https://meetup.com/members/209330217/" target="_blank">Meetup</a>
              <br />
              <a href="https://facebook.com/jasonkao85" target="_blank">Facebook</a>
            </p>
          </div>
          <div className={classes.contentSection}>
            <p>Contact&mdash;</p>
            <p className={classes.subText}>
              <a href="mailto:jasonkao85@gmail.com">jasonkao85@gmail.com</a>
              <br />
              <a href="tel:+01-347-933-1820">+1 347 933 1820</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MainApp);
