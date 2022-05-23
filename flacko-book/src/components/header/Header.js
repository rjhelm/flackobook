import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Hidden, Avatar, Tooltip, Paper, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { HomeOutlined, StoreMallDirectoryOutlined } from '@mui/icons-material'
import { PlayCircleFilledWhiteOutlined } from '@mui/icons-material';
import { SupervisedUserCircleOutlined } from '@mui/icons-material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import Zoom from '@mui/icons-material/Zoom';
import { ToggleTheme } from '../../redux/actions/util'
import { auth } from "../../firebase";
import Style from './Style';

const Header = () => {
    const classes = Style();
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.util);
    const { photoURL } = useSelector((state) => state.user);

    const changeTheme = () => {
        dispatch(ToggleTheme());
    }

    const logout = () => {
        auth.signOut();
    }

    return (
        <Paper elevation={0} style={{ borderRadius: 0, width: "100%", height: "100%" }}>
            <Grid container className={classes.header}>
                {/*** Logo and Search Icon ***/}
                <Hidden xsDown>
                    <Grid item className={classes.header__logo} sm={2} md={3}>
                        <img src={""} className={classes.logo__image} alt="" />
                        <Hidden smDown>
                            <div className={classes.logo__search}>
                                <SearchIcon />
                                <input placeholder='Search FlackoBook...' />
                            </div>
                        </Hidden>
                    </Grid>
                </Hidden>
                {/*** NavBar ***/}
                <Grid item className={classes.header__nav} sm={8} md={6}>
                    <div className={`${classes.nav__links} ${classes.nav__links__special}`}>
                        <Avatar src={" "} />
                    </div>
                    <div className={classes.nav__links}>
                        <HomeOutlined />
                    </div>
                    <div className={classes.nav__links}>
                        <PlayCircleFilledWhiteOutlined />
                    </div>
                    <Hidden xsDown>
                        <div className={classes.nav__links}>
                            <StoreMallDirectoryOutlined />
                        </div>
                        <div className={classes.nav__links}>
                            <SupervisedUserCircleOutlined />
                        </div>
                    </Hidden>
                    <div className={classes.nav__links} onChange={changeTheme}>
                        {mode ? <Brightness4Icon /> : <BrightnessHighIcon />}
                    </div>
                    <div className={`${classes.nav__links} ${classes.nav__links__specail}`}>
                        <Avatar src={photoURL} onClick={logout} />
                    </div>
                </Grid>
                {/*** UserInfo and Options ***/}
                <Hidden xsDown>
                    <Grid item className={classes.header__userinfo} sm={2} md={3}>
                        <Tooltip
                            placement="left"
                            TransitionComponent={Zoom}
                            TransitionProps={{ timeout: 300 }}
                            title={"logout"}
                            arrow
                        >
                            <Avatar src={photoURL} onClick={logout} />
                        </Tooltip>
                        <Hidden smDown>
                            <div className={classes.userinfo__options}>
                                <AddIcon />
                                <TelegramIcon />
                                <Badge badgeContent={10} max={9} {...defaultProps} />

                                <ArrowDropDownRoundedIcon />
                            </div>
                        </Hidden>
                    </Grid>
                </Hidden>
            </Grid>
        </Paper>
    );
};

const defaultProps = {
    color: "secondary",
    children: <NotificationsNoneOutlinedIcon />,
};

export default Header;