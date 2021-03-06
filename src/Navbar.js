import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from './contexts/ThemeContext'
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
  english :{
    search:'search',
    flag : '🇬🇧'
  },
  french : {
    search:'search french',
    flag : '🇫🇷'
  },
  spanish : {
    search: 'search spanish',
    flag : '🇪🇸'
  }
}
function Navbar(props) {
    const {isDarkMode,toggleMode} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const { classes } = props;
    const {search,flag} =words[language]
    
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default':'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch onChange={toggleMode}/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  
}
export default withStyles(styles)(Navbar);

//context using class components
// class Navbar extends Component {
//   static contextType = ThemeContext
//   render() {
//     const { classes } = this.props;
//     const {isDarkMode,toggleMode} = this.context;
//     const {language} = this.props.LanguageContext;
//     const {search,flag} =words[language]
    
//     return (
//       <div className={classes.root}>
//         <AppBar position='static' color={isDarkMode ? 'default':'primary'}>
//           <Toolbar>
//             <IconButton className={classes.menuButton} color='inherit'>
//               <span>{flag}</span>
//             </IconButton>
//             <Typography className={classes.title} variant='h6' color='inherit'>
//               App Title
//             </Typography>
//             <Switch onChange={toggleMode}/>
//             <div className={classes.grow} />
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder={`${search}...`}
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//               />
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }
// export default withLanguage(withStyles(styles)(Navbar));
