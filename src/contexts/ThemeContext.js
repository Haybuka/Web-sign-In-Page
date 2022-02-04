//using context with function components
import React,{ createContext,useState} from 'react'
export const ThemeContext = createContext()

export function ThemeProvider (props){
    const [isDarkMode,setDarkMode] = useState(false)
    function toggleMode() {
        setDarkMode(!isDarkMode)
    }
    return(
            <ThemeContext.Provider value={{isDarkMode,toggleMode}}>
              {props.children}
            </ThemeContext.Provider>
        )
        
}

//using context with class based higher context functions

// import React,{Component, createContext} from 'react'
// export const ThemeContext = createContext()

// export class ThemeProvider extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             isDarkMode : false
//         }
//         this.toggleMode = this.toggleMode.bind(this)
//     }
//     toggleMode() {
//         this.setState({isDarkMode : !this.state.isDarkMode})
//     }
//     render(){
//         return(
//             <ThemeContext.Provider value={{...this.state,toggleMode : this.toggleMode}}>
//               {this.props.children}
//             </ThemeContext.Provider>
//         )
        
//     }
// }
 
