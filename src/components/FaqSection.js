import React from "react";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none"
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  },
  expanded: {
    margin: `0 !important`
  },
  summary: {
    minHeight: 78
  },
  summaryContent: {
    margin: "0 !important"
  }
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: "Who are you and why are you buliding this?",
      answer:
        "We are folks in tech who started FinJell to help make sense of money on our path to financial independence (FI). We think people reach FI via many different, varied paths which is amazing. But unfortunately, we think most of the time it is achieved without enough planning or intention. We also believe many people sadly don't reach a stable FI state and we want to change this"
    },
    {
      question: "How do you define financial independence?",
      answer:
        "Financial independence isn't defined by how much money one makes, but it is more about the freedom to live life without limitations and financial burdens. Financial independence means having enough money to live the life you want without income from a job (unless you want one)"
    },
    {
      question: "Who can benefit from the FinJell product?",
      answer:
        "We hope that everyone and anyone who wants to improve or better manage their financial life can benefit from the products we build regardless of income level or age. That said, extremely high net worth individuals probably already have private services available to them and we aren't focused on delivering value to these folks"
    }
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
