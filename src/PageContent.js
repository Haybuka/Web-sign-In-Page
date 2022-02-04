import React, {useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
export default function PageContent (props) {
     const {isDarkMode} = useContext(ThemeContext);
      const styles = {
         backgroundColor: isDarkMode ? "black":'white',
          height:'100vh',
          width:'100vw',
          transition: 'all 0.25s ease-in'
      }
    return <div style={styles}>
      {props.children}
    </div>;
}


// class Approach 
// import React, { Component } from 'react';
// import { ThemeContext } from './contexts/ThemeContext';
// export default class PageContent extends Component {
//     static contextType = ThemeContext;
//   render() {
//      const {isDarkMode} = this.context;
//       const styles = {
//          backgroundColor: isDarkMode ? "black":'white',
//           height:'100vh',
//           width:'100vw',
//           transition: 'all 0.25s ease-in'
//       }
//     return <div style={styles}>
//       {this.props.children}
//     </div>;
//   }
// }
