import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    marginBottom: theme.spacing(3),
  },
}));

export default function HttpCode(props) {
  const classes = useStyles();

  const content = {
    image: "nereus-assets/img/illustrations/error.svg",
    code: "Whoops!",
    header: "Something went wrong!",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.",
    "primary-action": "Return to the homepage",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="sm">
        <Box pt={6} pb={10} textAlign="center">
          <img src={content["image"]} alt="" className={classes.img} />
          <Typography variant="h3" color="primary">
            {content["code"]}
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom={true}>
            {content["header"]}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {content["description"]}
          </Typography>
          <Box mt={3}>
            <Button variant="contained" color="primary">
              {content["primary-action"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
