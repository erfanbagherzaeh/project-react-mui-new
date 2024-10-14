// import  from './components/RightBar';
// import React from 'react';
import {
  ListItemText,
  ListItem,
   List,
   Typography,
   ImageList,
   ImageListItem,
   makeStyles,
   Hidden
  
  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles ((theme) =>({
  gridcon:{
    width:'300px',
      height:'500px',
      paddingRight:'10px',
     paddingTop:'5px',
    
  },
  itemgrid:{
    display:"none",
    [theme.breakpoints.up("md")]:{
      display:"block",
    }
  },
    
    
    }));

function SpacingGrid1() {
    const classes = useStyles();
    return(
  <>
       
    <Grid container  dir="rtl" className={classes.gridcon}  >
      <Grid item className={classes.itemgrid}  >
        <Typography style={{ fontFamily:"font1" , fontSize:'15px', color:'gray',}}  > دوستان انلاین </Typography>
     <AvatarGroup max={6}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/28368876/pexels-photo-28368876/free-photo-of-a-man-in-black-sitting-on-a-red-couch.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/27868437/pexels-photo-27868437/free-photo-of-portrait-of-young-man-in-white-shirt-with-mustache-and-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </AvatarGroup>


    <Typography > گالری </Typography>

    <ImageList    rowHeight={100} className={classes.imageList} cols={2}>
    <ImageListItem  >
      <img src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600"   />
    </ImageListItem>
    <ImageListItem  >
    <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600"   />
    </ImageListItem>
    <ImageListItem  >
    <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600 "   />
    </ImageListItem>
    <ImageListItem  >
    <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600 "   />
    </ImageListItem>
    <ImageListItem  >
    <img src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600 "   />
    </ImageListItem>
    <ImageListItem  >
      <img src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600"   />
    </ImageListItem>
</ImageList>

<Typography style={{ padding:'10px', fontFamily:'font1' }} > دسته بندی </Typography>

<List component="nav"  >
  <ListItem button   >
    <ListItemText primary="زمستان"  />
    <ListItemText primary="بهار" />
    <ListItemText primary="پاییز" />
    <ListItemText primary="تابستان" />
  </ListItem>
</List>










      </Grid>
    </Grid>
  </>
    );
}

export default SpacingGrid1;

