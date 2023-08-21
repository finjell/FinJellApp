import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      //avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      avatar: "https://storage.googleapis.com/bucket-finjell-logo/eddy-avatar.jpeg",
      name: "Eddy",
      role: "Co-founder",
      bio: "Eddy has worked in product at various tech companies. He believes it's a noble and worthy mission to pour his energy into enabling everyone to reach financial independence, himself included!",
    },
    {
      //avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      avatar: "https://storage.googleapis.com/bucket-finjell-logo/man-software-eng.jpg",
      name: "TBD",
      role: "Software Engineer",
      bio: "Could this be you?",
    },
    {
      //avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      avatar: "https://storage.googleapis.com/bucket-finjell-logo/female-machinelearning-eng.jpg",
      name: "TBD",
      role: "Machine Learning Engineer",
      bio: "Could this be you?",
    },
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
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Box className={classes.avatarWrapper}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  </Box>
                  <Box textAlign="center" pt={3}>
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        {item.bio}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
