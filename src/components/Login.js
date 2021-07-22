import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Divider, 
    FormControl, 
    TextField, 
    makeStyles, 
    Typography,
    Button,
    Box, 
} from '@material-ui/core';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(5),
    },
    form: {
        width: 500,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#01abaa',
        borderRadius: 20,
        boxShadow: '0px 5px 20px 10px rgba(0, 0, 0, .3)',
        padding: theme.spacing(5),
    },
    input: {
        margin: theme.spacing(2),
    },
    inputback: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
}));

const Login = ({ setUser }) => {
    const classes = styles();
    const [id, setId] = useState('');
    const [depGrade, setDepGrade] = useState('');
    const [name, setName] = useState('');

    const [idErr, setIdErr] = useState('');
    const [depGradeErr, setDepGradeErr] = useState('');
    const [nameErr, setNameErr] = useState('');

    const history = useHistory();

    const checkNull = (text, index) => {
        switch (index) {
            case 1: {
                setId(text);
                setIdErr(text ? '' : '此欄位為必填');
                break;
            }
            case 2: {
                setDepGrade(text);
                setDepGradeErr(text ? '' : '此欄位為必填');
                break;
            }
            case 3: {
                setName(text);
                setNameErr(text ? '' : '此欄位為必填');
                break;
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSubmit();
    };

    const handleSubmit = () => {
        if (!id || !depGrade || !name) {
            if (!id) setIdErr('此欄位為必填');
            if (!depGrade) setDepGradeErr('此欄位為必填');
            if (!name) setNameErr('此欄位為必填');
            return;
        }

        setUser({ id, depGrade, name });
        history.push('/questions');
    };

    return (
        <div className={classes.root}>
            <Box className={classes.form}>
                <Typography variant='h3'>有獎徵答</Typography>
                <TextField 
                    label='學號'
                    autoFocus
                    fullWidth
                    error={idErr}
                    helperText={idErr}
                    variant='outlined'
                    value={id}
                    className={classes.input}
                    InputProps={{ className: classes.inputback }}
                    onChange={e => checkNull(e.target.value, 1)}
                />
                <TextField 
                    label='系級'
                    fullWidth
                    error={depGradeErr}
                    helperText={depGradeErr}
                    variant='outlined'
                    value={depGrade}
                    className={classes.input}
                    InputProps={{ className: classes.inputback }}
                    onChange={e => checkNull(e.target.value, 2)}
                />
                <TextField 
                    label='姓名'
                    fullWidth
                    error={nameErr}
                    helperText={nameErr}
                    variant='outlined'
                    value={name}
                    className={classes.input}
                    InputProps={{ className: classes.inputback }}
                    onChange={e => checkNull(e.target.value, 3)}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    variant='contained'
                    style={{ width: 200 }}
                    onClick={handleSubmit}
                >
                    開始
                </Button>
            </Box>
        </div>
    );
};

export default Login;