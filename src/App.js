//Function Approach
import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeContext,ThemeProvider } from "./contexts/ThemeContext";
import {LanguageContext,LanguageProvider} from './contexts/LanguageContext'
function App(){
    return (
      <ThemeProvider>
       <LanguageProvider>
       <PageContent>
          <Navbar />
          <Form />
        </PageContent>
       </LanguageProvider>
      </ThemeProvider>
    );
}

export default App;


//class Approach

// import React, { Component } from "react";
// import Navbar from "./Navbar";
// import Form from "./Form";
// import PageContent from "./PageContent";
// import { ThemeContext,ThemeProvider } from "./contexts/ThemeContext";
// import {LanguageContext,LanguageProvider} from './contexts/LanguageContext'
// class App extends Component {
//   render() {
//     return (
//       <ThemeProvider>
//        <LanguageProvider>
//        <PageContent>
//           <Navbar />
//           <Form />
//         </PageContent>
//        </LanguageProvider>
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
