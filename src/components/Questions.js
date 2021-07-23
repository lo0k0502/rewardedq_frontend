import React, { useState } from 'react';
import { 
    AppBar, 
    Typography, 
    Box, 
    Toolbar,
    Divider,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormHelperText,
} from '@material-ui/core';
import styles from './QuestionsStyles';

const Questions = ({ user }) => {
    const classes = styles();
    const [value, setValue] = useState('');
    const [isWrong, setIsWrong] = useState(false);
  
    const handleChange = (e) => {
      setValue(e.target.value);
      setIsWrong(e.target.value !== 'A');
    };

    return (
        <div>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography variant='h5' style={{ flexGrow: 1 }}>
                        RewardedQ
                    </Typography>
                    <Typography variant='h6' style={{ marginRight: 10, }}>
                        學號: {user.id}
                    </Typography>
                    <Typography variant='h6' style={{ marginRight: 10, }}>
                        系級: {user.depGrade}
                    </Typography>
                    <Typography variant='h6'>
                        姓名: {user.name}
                    </Typography>
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
};

export default Questions;