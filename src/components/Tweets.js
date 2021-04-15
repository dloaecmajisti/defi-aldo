import React, {useEffect} from "react";
import {
    AppBar,
    createStyles,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Paper,
    Toolbar,
    Typography
} from "@material-ui/core";
import CachedIcon from '@material-ui/icons/Cached';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const Tweets = ({title, tweets, handleClick}) => {

    const classes = useStyles();

    useEffect(() => {
        handleClick()
    }, [])

    return (
        <Paper className={classes.paper}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <IconButton onClick={handleClick} title={`Refresh Tweets for « ${title} »`} color="inherit">
                        <CachedIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <List>
                {tweets &&
                tweets.map((tweet) => (
                    <ListItem key={tweet.id}>
                        <ListItemIcon>
                            <TwitterIcon/>
                        </ListItemIcon>
                        <ListItemText
                            primary={tweet.text}
                        />
                    </ListItem>
                ))
                }
            </List>
        </Paper>
    )
}
