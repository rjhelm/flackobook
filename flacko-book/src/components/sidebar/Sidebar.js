import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Paper, Divider } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as images from '../../assets/images';
import InfoBar from '../util/InfoBar';
import Style from './Style';
import { display } from '@mui/system';

const Sidebar = () => {
    const classes = Style();

    const [open, setOpen] = useState(false);
    const { photoURL, displayName } = useSelector((state) => state.user);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <Paper elevation={0} className={classes.sidebar}>
            <Scrollbars autoHide autoHideDuration={200}>
                {/* User Info0 */}
                <InfoBar key={displayName} Source={<Avatar src={photoURL} />} title={displayName} />
                {/* Top Item */}
                {topRows.map(({ src, title }, i) => (
                    <InfoBar
                        key={`info-top-${i}`}
                        Source={<Avatar src={src} />}
                        title={title}
                        transform={true}
                    />
                ))}
                {/* Bottom Items when display more is selected */}
                {open && (
                    <>
                        {bottomRows.map(({ src, title }, i) => (
                            <InfoBar key={`info-bottom-${i}`} Source={<Avatar src={src} />} title={title} />
                        ))}
                    </>
                )}
                {/* Toggle Button to show more */}
                <InfoBar
                    key={"expand-icon"}
                    Source={
                        <Avatar>
                            <ExpandMoreIcon style={{ transform: open && 'rotate(180deg)' }} />
                        </Avatar>
                    }
                    title={open ? "See Less" : "See More"}
                    onClick={toggle}
                />
                <Divider style={{ margin: "5px 10px" }} />

                {/* Your links section */}
                <h4 style={{ margin: "10px 10px" }}>Your short cuts</h4>
                <>
                    {yourLinks.map(({ src, title }, i) => (
                        <InfoBar key={`info-links-${i}`} Source={<Avatar src={src} />} title={title} />
                    ))}
                </>

                <Divider style={{ margin: "5px 10px" }} />
                {/* About Author */}
                <div className={classes.about__author}>
                    <h4>Contact</h4>
                    <div>
                        {author.map(({ src, url }, i) => (
                            <a href={`author-link-${i}`} rel="noreferrer nofollow" target="_blank">
                                {src}
                            </a>
                        ))}
                    </div>
                </div>
            </Scrollbars>
        </Paper>
    )
}

const author = [
    { src: <GitHubIcon />, url: "https://github.com/rjhelm" },
    { src: <LinkedInIcon />, url: "https://www.linkedin.com/in/rjhelm/" },
    { src: <YouTubeIcon />, url: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw" },
    { src: <TwitterIcon />, url: "https://twitter.com/flacko_ryanj" },
    { src: <InstagramIcon />, url: "https://www.instagram.com/" },
];

const topRows = [
    { src: images.FacebookPages, title: "Pages" },
    { src: images.FacebookCovid, title: "Covid Information Center" },
    { src: images.FacebookFriends, title: "Friends" },
    { src: images.FacebookGroups, title: "Groups" },
    { src: images.FacebookMarketplace, title: "Marketplace" },
];

const bottomRows = [
    { src: images.FacebookAdCenter, title: "Ad Center" },
    { src: images.FacebookAdsManager, title: "Ads Manager" },
    { src: images.FacebookBloodDonation, title: "Blood Donation" },
    { src: images.FacebookBuyAndSell, title: "Buy and Cell" },
    { src: images.FacebookCrisis, title: "Crisis Response" },
    { src: images.FacebookEvents, title: "Events" },
    { src: images.FacebookFavourites, title: "Favourites" },
    { src: images.FacebookFilms, title: "Films" },
    { src: images.FacebookFriendList, title: "Friend List" },
    { src: images.FacebookFundrisers, title: "Fundrisers" },
    { src: images.FacebookGames, title: "Games" },
    { src: images.FacebookGameVideos, title: "Game Videos" },
];

const yourLinks = [
    { src: images.ReactNative, title: "React Native Developer Community" },
    { src: images.ReactJs, title: "React.JS developers -2021" },
    { src: images.NodeJs, title: "NodeJS developers" },
    { src: images.Javascript, title: "Javascript" },
];

export default Sidebar;