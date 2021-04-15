import React, {useCallback} from "react";
import {Tweets} from "./Tweets";
import {
    fetchTwitterMovieStarFeedsAction,
    fetchTwitterMusicStarFeedsAction,
    setMovieViewAction
} from "../redux/actions/app";
import {useDispatch, useSelector} from "react-redux";
import {movieStarFeeds, movieView, musicStarFeeds} from "../redux/selectors";
import {
    AppBar,
    Button,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Switch,
    Toolbar,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        appBar: {
            marginBottom: "10px",
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const movieTweets = useSelector(movieStarFeeds)
    const musicTweets = useSelector(musicStarFeeds)
    const showMovieView = useSelector(movieView);

    const movieStarFeedsRefresh = useCallback(() => dispatch(fetchTwitterMovieStarFeedsAction()), [dispatch]);
    const musicStarFeedsRefresh = useCallback(() => dispatch(fetchTwitterMusicStarFeedsAction()), [dispatch]);
    const setMovieView = () => dispatch(setMovieViewAction(true))
    const setMusicView = () => dispatch(setMovieViewAction(false))
    const toggleView = () => dispatch(setMovieViewAction(!showMovieView))

    return <Container fixed className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography>
                    <Button onClick={setMovieView}
                            variant={"contained"}
                            color={showMovieView ? "secondary" : "primary"}>
                        Chuck Norris
                    </Button>
                </Typography>
                <Switch checked={!showMovieView} onClick={toggleView} color="default"/>
                <Typography>
                    <Button onClick={setMusicView}
                            variant={"contained"}
                            color={showMovieView ? "primary" : "secondary"}>
                        Drake
                    </Button>
                </Typography>

                <Typography variant="h6" align={"center"} className={classes.title}>
                    ALDO Twitter challenge
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container spacing={5}>
            {showMovieView &&
            <Grid item xs={12}>
                <Tweets tweets={movieTweets} handleClick={movieStarFeedsRefresh} title={"Chuck Norris"}/>
            </Grid>
            }
            {!showMovieView &&
            <Grid item>
                <Tweets tweets={musicTweets} handleClick={musicStarFeedsRefresh} title={"Drake"}/>
            </Grid>
            }
        </Grid>
    </Container>;
}

export default App;
