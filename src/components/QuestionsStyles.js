import { makeStyles } from "@material-ui/core";

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
    height: 200,
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

export default styles;