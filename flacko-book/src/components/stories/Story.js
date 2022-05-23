import React from 'react';
import Avatar from "@mui/material/Avatar";
import Style from './Style';

const Story = ({ profileImage, bgImage, title }) => {
    const classes = Style();
    return (
        <div className={classes.story} style={{ backgroundImage: `url(${bgImage})` }}>
            <Avatar src={profileImage} className={classes.profilePic} />
            <h4>{title}</h4>
        </div>
    );
};

export default Story;