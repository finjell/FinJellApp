import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center"
  },
  imageContainer: {
    margin: "0 auto",
    maxWidth: "200px",
    marginBottom: "30px",
    "& img": {
      width: "100%"
    }
  }
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Anonymous Profiles",
      body:
        "Create and share your financial profile to learn from and help educate others depending on where you are on your financial journey. We believe connecting with others - finding mentors - is perhaps one of the best ways to learn and become more money savvy",
      image: "https://storage.googleapis.com/bucket-finjell-logo/anonymous-profiles.jpg"
      //image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg"
    },
    {
      title: "Spreadsheet Sharing",
      body:
        "Let's face it - no matter how many software tools exist out there, many of us still use spreadsheets to manage our financial life. We want to enable the single, best place to store the best personal finance spreadsheets on the Internet",
      image: "https://storage.googleapis.com/bucket-finjell-logo/spreadsheet-woman.jpg"
      //image: "https://uploads.divjoy.com/undraw-directions_x53j.svg"
    },
    {
      title: "Financial Wiki",
      body:
        "We're starting a baseline wiki but we want the wisdom of the crowds to build upon this so that we can together create the single best repository of personal finance knowledge that helps everyone from the most basic questions to the most advanced and obscure",
      image: "https://storage.googleapis.com/bucket-finjell-logo/students-financial-wiki.jpg"
      //image: "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg"
    },
    {
      title: "Intelligent Money Assistant",
      body:
        "We have grand ambitions given the amazing advancements in generative AI. There will be 3 phases to fulfilling our vision here: (1) financial tracker (2) decision making scenario analysis (3) AI assistant",
      image: "https://storage.googleapis.com/bucket-finjell-logo/intelligent-money-assistant.jpg"
      //image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
    }
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Card raised={false}>
          <Grid container={true}>
            {items.map((item, index) => (
              <Grid
                item={true}
                xs={12}
                md={6}
                className={classes.gridItem}
                key={index}
              >
                <Box p={6}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
