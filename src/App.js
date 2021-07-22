import { 
  AppBar, 
  Typography, 
  makeStyles, 
  Box, 
  Toolbar,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@material-ui/core';
import { useState } from 'react';

const styles = makeStyles(theme => ({
  navbar: {
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  form: {
    width: 500,
    color: 'white',
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    padding: theme.spacing(1),
  },
  formtitle: {
    color: 'white',
    margin: theme.spacing(1),
  },
  radiogroup: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

function App() {
  const classes = styles();
  const [value, setValue] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsWrong(e.target.value !== 'A');
  };

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5'>RewardedQ</Typography>
        </Toolbar>
      </AppBar>

      <Box className={classes.body}>
        <FormControl className={classes.form}>
          <Typography className={classes.formtitle}>Question: Please choose A.</Typography>
          {isWrong && <FormHelperText error>Wrong answer!!</FormHelperText>}
          <Divider light />
          <RadioGroup value={value} onChange={handleChange} className={classes.radiogroup}>
            <FormControlLabel value="A" control={<Radio />} label="A" />
            <FormControlLabel value="B" control={<Radio />} label="B" />
            <FormControlLabel value="C" control={<Radio />} label="C" />
            <FormControlLabel value="D" control={<Radio />} label="D" />
          </RadioGroup>
      </FormControl>
      </Box>
    </div>
  );
}

export default App;
