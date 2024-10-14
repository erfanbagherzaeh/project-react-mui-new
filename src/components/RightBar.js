
import { Home, } from '@material-ui/icons';
import { Grid, Typography, colors, makeStyles } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from './Tooltip'
import { Margin } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    gridcon: {
        [theme.breakpoints.up("md")]: {

        }
    },

    titr: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "block",

        }

    },

   

}));





function SpacingGrid3() {
    const classes = useStyles();



    return (
        <>
            <Grid container className={classes.gridcon}

                style={{
                    // backgroundColor: 'yellow',
                    width: '250px',
                    height: '500px',
                    textAlign: 'left',
                    flexDirection: 'row-reverse',


                }}
            >
                <Grid item
                    style={{
                        flexDirection: 'row-reverse',
                        padding: '10px',
                        position: "fixed", top: '0px', marginTop: "90px",

                    }}>


                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <Home style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1', }} className={classes.titr} > خانه </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <AccountBoxIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} > دوستان </Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <FormatListBulletedIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} > لیست ها </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <LocalSeeIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >   دوربین  </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        < PlayCircleFilledIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >   ویدیو  </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        < TabletMacIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >   اپ  </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <TurnedInIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >   مجموعه ها  </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <StorefrontIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >    بازار  </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <SettingsIcon style={{ paddingLeft: '5' }} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >     تنظیمات  </Typography >
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5px', }}>
                        <ExitToAppIcon style={{ paddingLeft: '5' }} className={classes.local} />
                        <Typography style={{ fontFamily: 'font1' }} className={classes.titr} >     خزوج  </Typography >
                    </div>

                    <Tooltip />
                </Grid>

            </Grid>
        </>
    );
}

export default SpacingGrid3;

