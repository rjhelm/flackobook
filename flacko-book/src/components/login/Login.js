import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Paper } from '@mui/material/Paper';
import firebase from 'firebase'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from './../../assets/images/fb_text.png';
import Style from './Style';

const Login = () => {
    const classes = Style();

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    };

    return (
        <div className={classes.login__container}>
            <Paper elevation={3} className={classes.login}>
                <div className={classes.logo}>
                    <img src={Logo} alt="linked-in-logo" />
                    <h4>Clone</h4>
                </div>
                <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                    <input disabled type="email" value="" placeholder="email" />
                    <input disabled type="password" value="" placeholder="password" />
                    <button disabled>Log In</button>
                </form>
                <div className={classes.google}>
                    <section>
                        <div></div>
                        <p>OR</p>
                        <div></div>
                    </section>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
                <div className={classes.about}>
                    <section>
                        <div></div>
                        <p>Developer Info</p>
                        <div></div>
                    </section>
                    <div>
                        {author.map(({ src, url, color }, i) => (
                            <a
                                href={`${url}`}
                                key={`author-link-${i}`}
                                rel="noreferrer nofollow"
                                target="_blank"
                                style={{ color: color }}
                            >
                                {src}
                            </a>
                        ))}
                    </div>
                </div>
            </Paper>
        </div>
    );
};

const author = [
    { src: <GitHubIcon />, url: 'https://github.com/rjhelm', color: 'black' },
    { src: <LinkedInIcon />, url: 'https://www.linkedin.com/in/rjhelm/', color: '#0077B5' },
    {
        src: <YouTubeIcon />, url: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw', color: 'red'
    },
    { src: <TwitterIcon />, url: 'https://twitter.com/flacko_ryanj', color: '#1DA1F2' },
    { src: <InstagramIcon />, url: 'https://www.instagram.com/rjhelm/', color: '#E1306C' },
];

export default Login;