//use context with function components
import React, { useState,createContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider (props) {
    const [language,setLanguage] = useState('spanish')
    function changeLanguage(e){
        setLanguage(e.target.value)
    }
    return (<LanguageContext.Provider 
        value={{language,changeLanguage}}>
     {props.children} 
     </LanguageContext.Provider>);
  }



//using context with class based higher context functions
// import React, { Component,createContext } from 'react';

// export const LanguageContext = createContext();

// export class LanguageProvider extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             language : 'spanish'
//         }
//         this.changeLanguage = this.changeLanguage.bind(this)
//     }
//     changeLanguage(e){
//         this.setState({language : e.target.value})
//     }
//   render() {
//     return <LanguageContext.Provider 
//             value={{...this.state,changeLanguage : this.changeLanguage}}>
//          {this.props.children} 
//          </LanguageContext.Provider>
//   }
// }
// export const withLanguage = Component =>props => (
//     <LanguageContext.Consumer>
//        {value => <Component LanguageContext={value} {...props} />}
//     </LanguageContext.Consumer>
// )



