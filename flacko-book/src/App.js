import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Hidden, Paper } from '@mui/material';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Contacts from './components/contacts/Contacts';
import Stories from './components/stories/Stories';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import { LoginAction, LogoutAction } from './store/actions/auth.js';
import { auth } from './firebase';
import { lightPrimary } from './assets/Colors';
import Style from './Style';

const App = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const mode = useSelector((state) => state.util);
  const muiTheme = createTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(LoginAction(authUser));
      } else {
        dispatch(LogoutAction());
      }
    });
  }, [dispatch]);
  const classes = Style();
  return (
    <ThemeProvider theme={muiTheme}>
      <Paper
        elevation={0}
        className={classes.root}
        style={{ backgroundColor: !mode && lightPrimary }}
        >
        {!displayName ? (
          <Login />
        ) : (
          <Grid className={classes.app}>
            <Grid item container className={classes.app__header}>
              <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
              <Hidden smDown>
                <Grid item container className={classes.body__left}>
                  <Sidebar />
                </Grid>
              </Hidden>
              <Grid item container className={classes.body__feed} xs={12} sm={8} md={6}>
                  <Grid item container className={classes.feed_stories}>
                    <Stories />
                  </Grid>
                  <Grid item container className={classes.feed__form}>
                    <Form />
                  </Grid>
                  <Grid item container className={classes.feed__posts}>
                    <Posts />
                  </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item container className={classes.body__right}>
                  <Contacts />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        )}
        </Paper>
    </ThemeProvider>
  );
};

export default App;

