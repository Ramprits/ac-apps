import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import ApartmentIcon from "@material-ui/icons/Apartment";
import DnsIcon from "@material-ui/icons/Dns";
import TapAndPlayIcon from "@material-ui/icons/TapAndPlay";

const useStyles = makeStyles((theme) => ({
  features: {
    [theme.breakpoints.up("md")]: {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderColor: theme.palette.background.emphasis,
    },
  },
  iconWrapper: {
    backgroundColor: fade(theme.palette.background.emphasis, 0.6),
  },
  videoBoxRoot: {
    maxWidth: 512,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardRoot: {
    position: "relative",
    paddingTop: "56.25%",
    margin: "auto",
    overflow: "hidden",
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Lorem ipsum dolor",
    "header-p2": "sit amet consectetur.",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    "col1-header": "Furnace Repair",
    "col1-desc":
      "There are a variety of reasons why your furnace may require repairs. One of the biggest problems is that the furnace is working too hard to keep up with the demand. We complete inspection of your furnace to determine what is giving you cause for concern.",
    "col2-header": "Boiler Replacement",
    "col2-desc":
      "Most people don’t know when they may need to replace his or her boiler. We’ll perform a visual evaluation of your boiler to determine if you need a new boiler or not. If there is deteriorating metal then this is a good reason to replace your boiler.",
    "col3-header": "HVAC Installation",
    "col3-desc":
      "If you are looking for a  r HVAC company to help with the installation of your system, give us a call us .",
    video: "https://www.youtube.com/embed/OtDxDvCpPL4",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography color="primary" variant="h3" component="span">
                  {content["header-p1"]}{" "}
                </Typography>
                <Typography variant="h3" component="span">
                  {content["header-p2"]}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className={classes.videoBoxRoot}>
                <Card className={classes.cardRoot}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="iframe"
                    src={content["video"]}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Box pt={6} mt={6} className={classes.features}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <ApartmentIcon color="primary" />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col1-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col1-desc"]}
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <DnsIcon color="primary" />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col2-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col2-desc"]}
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <TapAndPlayIcon color="primary" />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col3-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col3-desc"]}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
