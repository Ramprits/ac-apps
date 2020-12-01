import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  number: {
    backgroundColor: theme.palette.background.emphasis,
    color: theme.palette.text.secondary,
  },
  img: {
    maxWidth: 256,
    marginBottom: theme.spacing(2),
  },
  stepActive: {
    border: "1px solid",
    borderColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Your Local HVAC, Electrical & Home Services Company",
    description: "Quality Solutions for Heating and Cooling",
    "col1-image": "nereus-assets/img/illustrations/speak.svg",
    "col1-header": "Donec fermentum",
    "col1-desc":
      "If you do not want to be uncomfortable in your own home then you must act now by contacting us to make any needed repairs.",
    "col2-image": "nereus-assets/img/illustrations/loading.svg",
    "col2-header": "Dolor sit amet consectutar",
    "col2-desc":
      "There are a variety of reasons why your furnace may require repairs. One of the biggest problems is that the furnace is working too hard to keep up with the demand.",
    "col3-image": "nereus-assets/img/illustrations/financial-report.svg",
    "col3-header": "Aliquam pellentesque",
    "col3-desc":
      "We complete inspection of your furnace to determine what is giving you cause for concern. Chances are that there is no need for you to replace your furnace, as it may simply need some repairs. ",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10} textAlign="center">
          <Box mb={8}>
            <Container maxWidth="sm">
              <Typography variant="h3" component="span" color="primary">
                {content["header-p1"]}{" "}
              </Typography>
              <Typography variant="h3" component="span">
                {content["header-p2"]}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Box p={3} pb={4}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>1</Avatar>
                </Box>
                <img
                  src={content["col1-image"]}
                  alt=""
                  className={classes.img}
                />
                <Typography variant="h6" component="h3" gutterBottom={true}>
                  {content["col1-header"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content["col1-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={classes.stepActive} p={3} pb={4}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>2</Avatar>
                </Box>
                <img
                  src={content["col2-image"]}
                  alt=""
                  className={classes.img}
                />
                <Typography variant="h6" component="h3" gutterBottom={true}>
                  {content["col2-header"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content["col2-desc"]}
                </Typography>
                <Box mt={3}>
                  <Button variant="contained" color="primary">
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={3} pb={4}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>3</Avatar>
                </Box>
                <img
                  src={content["col3-image"]}
                  alt=""
                  className={classes.img}
                />
                <Typography variant="h6" component="h3" gutterBottom={true}>
                  {content["col3-header"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content["col3-desc"]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
