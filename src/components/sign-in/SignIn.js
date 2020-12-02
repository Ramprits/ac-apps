import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import { blue } from "@material-ui/core/colors";

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, loginError } from "../../actions/user";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  iconWrapper: {
    backgroundColor: blue[100],
    color: theme.palette.primary.main,
  },
  actions: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  primaryAction: {
    width: "100%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(0),
      width: "auto",
    },
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
  });
  const content = {
    header: "Welcome to back!",
    "primary-action": "Sign in",
    "secondary-action": "Forgot your password?",
    ...props.content,
  };
  const action = (
    <Button
      color="secondary"
      size="small"
      onClick={() => dispatch(clearErrorMessage())}
    >
      Close
    </Button>
  );

  const onSubmit = async (data) => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("response", response);
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
  return (
    <section className={classes.section}>
      <Container maxWidth="xs">
        <Box py={16}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" mt={3}>
                <Box mx="auto">
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <AssignmentIndIcon />
                  </Avatar>
                </Box>
              </Box>
              <Box mt={2} px={4}>
                <Typography
                  variant="h5"
                  component="h3"
                  align="center"
                  gutterBottom={true}
                >
                  {content["header"]}
                </Typography>

                <Box my={3}>
                  <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          error={!!errors.email}
                          fullWidth
                          size="small"
                          name="email"
                          inputRef={register({ required: true })}
                          label="E-mail address"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          error={!!errors.password}
                          fullWidth
                          size="small"
                          type="password"
                          name="password"
                          inputRef={register({ required: true })}
                          label="Password"
                        />
                      </Grid>
                      {error && (
                        <Grid item xs={12}>
                          <SnackbarContent message={error} action={action} />
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Box
                          alignItems="center"
                          justifyContent="space-between"
                          className={classes.actions}
                        >
                          <Button
                            type="submit"
                            disabled={loading}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.primaryAction}
                          >
                            {content["primary-action"]}
                          </Button>
                          <Link href="#" color="textSecondary">
                            {content["secondary-action"]}
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
}
