import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  img: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  name: {
    lineHeight: 1,
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  const content = {
    image1:
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80",
    category1: "Category",
    date1: "24 Jan, 2020",
    title1: "Lorem ipsum dolor sit amet consectetur.",
    desc1:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    name1: "Linda Williams",
    job1: "Founder and CEO",
    avatar1:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    day2: "17",
    month2: "Jan",
    image2:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80",
    category2: "Category",
    date2: "24 Jan, 2020",
    title2: "Lorem ipsum dolor sit amet consectetur.",
    desc2:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    name2: "Linda Williams",
    job2: "Founder and CEO",
    avatar2:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    day3: "17",
    month3: "Jan",
    image3:
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80",
    category3: "Category",
    date3: "24 Jan, 2020",
    title3: "Lorem ipsum dolor sit amet consectetur.",
    desc3:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.",
    name3: "Linda Williams",
    job3: "Founder and CEO",
    avatar3:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    "secondary-action": "Read more",
    "primary-action": "See all articles",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} className={classes.post}>
              <img src={content["image1"]} alt="" className={classes.img} />
              <Box mt={2} mb={2}>
                <Box mb={1}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content["category1"]}
                  </Typography>
                  <span className={classes.bullet}>•</span>
                  <Typography
                    variant="overline"
                    component="span"
                    color="textSecondary"
                  >
                    {content["date1"]}
                  </Typography>
                </Box>
                <Link href="#" color="inherit">
                  <Typography variant="h5" component="h2">
                    {content["title1"]}
                  </Typography>
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                paragraph={true}
                color="textSecondary"
              >
                {content["desc1"]}
              </Typography>
              <Box mt={3} display="flex" alignItems="center">
                <Avatar alt="" src={content["avatar1"]} />
                <Box ml={2} textAlign="left">
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.name}
                  >
                    {content["name1"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    color="textSecondary"
                  >
                    {content["job1"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.post}>
              <img src={content["image2"]} alt="" className={classes.img} />
              <Box mt={2} mb={2}>
                <Box mb={1}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content["category2"]}
                  </Typography>
                  <span className={classes.bullet}>•</span>
                  <Typography
                    variant="overline"
                    component="span"
                    color="textSecondary"
                  >
                    {content["date2"]}
                  </Typography>
                </Box>
                <Link href="#" color="inherit">
                  <Typography variant="h5" component="h2">
                    {content["title2"]}
                  </Typography>
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                paragraph={true}
                color="textSecondary"
              >
                {content["desc1"]}
              </Typography>
              <Box mt={3} display="flex" alignItems="center">
                <Avatar alt="" src={content["avatar2"]} />
                <Box ml={2} textAlign="left">
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.name}
                  >
                    {content["name2"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    color="textSecondary"
                  >
                    {content["job2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.post}>
              <img src={content["image3"]} alt="" className={classes.img} />
              <Box mt={2} mb={2}>
                <Box mb={1}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content["category3"]}
                  </Typography>
                  <span className={classes.bullet}>•</span>
                  <Typography
                    variant="overline"
                    component="span"
                    color="textSecondary"
                  >
                    {content["date3"]}
                  </Typography>
                </Box>
                <Link href="#" color="inherit">
                  <Typography variant="h5" component="h2">
                    {content["title3"]}
                  </Typography>
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                paragraph={true}
                color="textSecondary"
              >
                {content["desc3"]}
              </Typography>
              <Box mt={3} display="flex" alignItems="center">
                <Avatar alt="" src={content["avatar3"]} />
                <Box ml={2} textAlign="left">
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.name}
                  >
                    {content["name3"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    color="textSecondary"
                  >
                    {content["job3"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box mt={6} textAlign="center">
            <Button variant="outlined" color="primary">
              {content["primary-action"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
