
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles ((theme) =>({
 
media:{
  height:"200px",
  width:'100%',
},

containerr:{
      width:'820px',
      height:'500px',
      [theme.breakpoints.up("sm")]:{
       width:'100%',
       height:'500px',
        
    }
  },

card:{
  marginBottom:"20px",
},



}));

function SpacingGrid2() {
  const classes = useStyles();
    return(
  <>
    <Grid container 
    className={classes.containerr}
      sm={12}
    
    >
     

       <Card className={classes.card} >
        <CardActionArea  >
          <CardMedia
          className={classes.media} 
          image='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          Title='پست اول'
        />
        <CardContent>
          <Typography variant='h5'> این پست اول است </Typography>
    
    <Typography variant='boody' style={{ fontFamily:'font1'}}>طبیعت، این معجزه بی‌نظیر، به‌عنوان پناهگاهی برای آرامش روح و ذهن ماست. در هر گوشه‌اش، زیبایی‌های خیره‌کننده‌ای نهفته است؛ از کوه‌های سر به فلک کشیده تا درختان سرسبز که به نسیم ملایم پاسخ می‌دهند. آوای پرندگان و صدای آبشارها، همگی به ما یادآوری می‌کنند که زندگی در سادگی و هماهنگی با طبیعت جریان دارد. هر لحظه‌ای که در دل طبیعت سپری می‌کنیم، فرصتی است برای تجدید قوا و ارتباط دوباره با خود و جهان پیرامون. </Typography>
        </CardContent>

        <CardActions dir="rtl" className={classes.button}>
          <Button size='small' color="primary"  variant="contained"> بیشتر بخوانید </Button>
          <Button size='small' color="primary"  variant="contained" style={{ marginRight:'10px'}}>   اشتراک گزاری </Button>
        </CardActions>
        </CardActionArea>
       </Card>

       <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          Title='پست اول'
        />
        <CardContent>
          <Typography variant='h5'> این پست اول است </Typography>
    
    <Typography variant='boody' style={{ fontFamily:'font1'}}>طبیعت، این معجزه بی‌نظیر، به‌عنوان پناهگاهی برای آرامش روح و ذهن ماست. در هر گوشه‌اش، زیبایی‌های خیره‌کننده‌ای نهفته است؛ از کوه‌های سر به فلک کشیده تا درختان سرسبز که به نسیم ملایم پاسخ می‌دهند. آوای پرندگان و صدای آبشارها، همگی به ما یادآوری می‌کنند که زندگی در سادگی و هماهنگی با طبیعت جریان دارد. هر لحظه‌ای که در دل طبیعت سپری می‌کنیم، فرصتی است برای تجدید قوا و ارتباط دوباره با خود و جهان پیرامون. </Typography>
        </CardContent>

        <CardActions dir="rtl" className={classes.button}>
          <Button size='small' color="primary"  variant="contained"> بیشتر بخوانید </Button>
          <Button size='small' color="primary"  variant="contained" style={{ marginRight:'10px'}}>   اشتراک گزاری </Button>
        </CardActions>
        </CardActionArea>
       </Card>

       <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          Title='پست اول'
        />
        <CardContent>
          <Typography variant='h5'> این پست اول است </Typography>
    
    <Typography variant='boody' style={{ fontFamily:'font1'}}>طبیعت، این معجزه بی‌نظیر، به‌عنوان پناهگاهی برای آرامش روح و ذهن ماست. در هر گوشه‌اش، زیبایی‌های خیره‌کننده‌ای نهفته است؛ از کوه‌های سر به فلک کشیده تا درختان سرسبز که به نسیم ملایم پاسخ می‌دهند. آوای پرندگان و صدای آبشارها، همگی به ما یادآوری می‌کنند که زندگی در سادگی و هماهنگی با طبیعت جریان دارد. هر لحظه‌ای که در دل طبیعت سپری می‌کنیم، فرصتی است برای تجدید قوا و ارتباط دوباره با خود و جهان پیرامون. </Typography>
        </CardContent>

        <CardActions dir="rtl" className={classes.button}>
          <Button size='small' color="primary"  variant="contained"> بیشتر بخوانید </Button>
          <Button size='small' color="primary"  variant="contained" style={{ marginRight:'10px'}}>   اشتراک گزاری </Button>
        </CardActions>
        </CardActionArea>
       </Card>

       <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          Title='پست اول'
        />
        <CardContent>
          <Typography variant='h5'> این پست اول است </Typography>
    
    <Typography variant='boody' style={{ fontFamily:'font1'}}>طبیعت، این معجزه بی‌نظیر، به‌عنوان پناهگاهی برای آرامش روح و ذهن ماست. در هر گوشه‌اش، زیبایی‌های خیره‌کننده‌ای نهفته است؛ از کوه‌های سر به فلک کشیده تا درختان سرسبز که به نسیم ملایم پاسخ می‌دهند. آوای پرندگان و صدای آبشارها، همگی به ما یادآوری می‌کنند که زندگی در سادگی و هماهنگی با طبیعت جریان دارد. هر لحظه‌ای که در دل طبیعت سپری می‌کنیم، فرصتی است برای تجدید قوا و ارتباط دوباره با خود و جهان پیرامون. </Typography>
        </CardContent>

        <CardActions dir="rtl" className={classes.button}>
          <Button size='small' color="primary"  variant="contained"> بیشتر بخوانید </Button>
          <Button size='small' color="primary"  variant="contained" style={{ marginRight:'10px'}}>   اشتراک گزاری </Button>
        </CardActions>
        </CardActionArea>
       </Card>

       <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          Title='پست اول'
        />
        <CardContent>
          <Typography variant='h5'> این پست اول است </Typography>
    
    <Typography variant='boody' style={{ fontFamily:'font1'}}>طبیعت، این معجزه بی‌نظیر، به‌عنوان پناهگاهی برای آرامش روح و ذهن ماست. در هر گوشه‌اش، زیبایی‌های خیره‌کننده‌ای نهفته است؛ از کوه‌های سر به فلک کشیده تا درختان سرسبز که به نسیم ملایم پاسخ می‌دهند. آوای پرندگان و صدای آبشارها، همگی به ما یادآوری می‌کنند که زندگی در سادگی و هماهنگی با طبیعت جریان دارد. هر لحظه‌ای که در دل طبیعت سپری می‌کنیم، فرصتی است برای تجدید قوا و ارتباط دوباره با خود و جهان پیرامون. </Typography>
        </CardContent>

        <CardActions dir="rtl" className={classes.button}>
          <Button size='small' color="primary"  variant="contained"> بیشتر بخوانید </Button>
          <Button size='small' color="primary"  variant="contained" style={{ marginRight:'10px'}}>   اشتراک گزاری </Button>
        </CardActions>
        </CardActionArea>
       </Card>

       <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          Title='پست اول'
        />
        <CardContent>
          <Typography variant='h5'> این پست اول است </Typography>
    
    <Typography variant='boody' style={{ fontFamily:'font1'}}>طبیعت، این معجزه بی‌نظیر، به‌عنوان پناهگاهی برای آرامش روح و ذهن ماست. در هر گوشه‌اش، زیبایی‌های خیره‌کننده‌ای نهفته است؛ از کوه‌های سر به فلک کشیده تا درختان سرسبز که به نسیم ملایم پاسخ می‌دهند. آوای پرندگان و صدای آبشارها، همگی به ما یادآوری می‌کنند که زندگی در سادگی و هماهنگی با طبیعت جریان دارد. هر لحظه‌ای که در دل طبیعت سپری می‌کنیم، فرصتی است برای تجدید قوا و ارتباط دوباره با خود و جهان پیرامون. </Typography>
        </CardContent>

        <CardActions dir="rtl" className={classes.button}>
          <Button size='small' color="primary"  variant="contained"> بیشتر بخوانید </Button>
          <Button size='small' color="primary"  variant="contained" style={{ marginRight:'10px'}}>   اشتراک گزاری </Button>
        </CardActions>
        </CardActionArea>
       </Card>
      
    </Grid>
  </>
    );
}

export default SpacingGrid2;