import PrimarySearchAppBar from './components/SearchAppBar';
import './App.css';
import SpacingGrid3 from './components/LeftBar';
import SpacingGrid2 from './components/Centert';
import SpacingGrid1 from './components/RightBar';
import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles ((theme) =>({


}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div className='con'>
        <SpacingGrid3 className={classes.right}/>
        <SpacingGrid2 className={classes.center}/>
        <SpacingGrid1  className={classes.left} />
      </div>

      {/* <Tooltipp /> */}

    </div>
  );
}

export default App;
