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

    const history = useHistory();

    const handleSubmit = () => {
        setUser({ id, depGrade, name });
        history.push('/questions');
    };

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h3'>有獎徵答</Typography>
                <TextField 
                    label='學號'
                    autoFocus
                    fullWidth
                    required
                    variant='outlined'
                    value={id}
                    className={classes.input}
                    InputProps={{ className: classes.inputback }}
                    onChange={e => setId(e.target.value)}
                />
                <TextField 
                    label='系級'
                    fullWidth
                    required
                    variant='outlined'
                    value={depGrade}
                    className={classes.input}
                    InputProps={{ className: classes.inputback }}
                    onChange={e => setDepGrade(e.target.value)}
                />
                <TextField 
                    label='姓名'
                    fullWidth
                    required
                    variant='outlined'
                    value={name}
                    className={classes.input}
                    InputProps={{ className: classes.inputback }}
                    onChange={e => setName(e.target.value)}
                />
                <Button
                    variant='contained'
                    style={{ width: 200 }}
                    type='submit'
                >
                    開始
                </Button>
            </form>
        </div>
    );
};

export default Login;