import React, { useContext } from "react";
// import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import {LanguageContext} from './contexts/LanguageContext'
import { ThemeContext } from "./contexts/ThemeContext";
const words = {
  english :{
    email:'Email',
    password:'Password',
    remember : 'Remember Me',
    signIn : 'Sign in'
  },
  french : {
    email:'Email french',
    password : 'Password french',
    remember : 'Remember Me french',
    signIn : 'Signin french'
  },
  spanish : {
    email: 'Email spanish',
    password : 'Password spanish',
    remember : 'Remember Me spanish',
    signIn:'Signin spanish'
  }
}

function Form(props){
   const {language,changeLanguage} = useContext(LanguageContext)
   const {isDarkMode} = useContext(ThemeContext)
  const { classes } = props;
    const {email,password,remember,signIn} = words[language]
  return(<main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='french'>French</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id='password' name='password' autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label={`${remember}`}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color={isDarkMode ? 'secondary':'primary'}
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
  )
}
//context using class components, any line,import commented is useful to class and inline context

// class Form extends Component {
//   static contextType = LanguageContext
//   render() {
//     const { classes } = this.props;
//     const {language,changeLanguage} = this.context;
//     const {email,password,remember,signIn} = words[language]
//     return (
//       <ThemeContext.Consumer>
//         {value => <main className={classes.main}>
//         <Paper className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography variant='h5'>{signIn}</Typography>
//           <Select value={language} onChange={changeLanguage}>
//             <MenuItem value='english'>English</MenuItem>
//             <MenuItem value='french'>French</MenuItem>
//             <MenuItem value='spanish'>Spanish</MenuItem>
//           </Select>
//           <form className={classes.form}>
//             <FormControl margin='normal' required fullWidth>
//               <InputLabel htmlFor='email'>{email}</InputLabel>
//               <Input id='email' name='email' autoFocus />
//             </FormControl>
//             <FormControl margin='normal' required fullWidth>
//               <InputLabel htmlFor='password'>{password}</InputLabel>
//               <Input id='password' name='password' autoFocus />
//             </FormControl>
//             <FormControlLabel
//               control={<Checkbox color='primary' />}
//               label={`${remember}`}
//             />
//             <Button
//               variant='contained'
//               type='submit'
//               fullWidth
//               color={value.isDarkMode? 'secondary':'primary'}
//               className={classes.submit}
//             >
//               {signIn}
//             </Button>
//           </form>
//         </Paper>
//       </main>}
//       </ThemeContext.Consumer>
//     );
//   }
// }
export default withStyles(styles)(Form);
