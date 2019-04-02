import React,{Component} from 'react'
const ThemeContext = React.createContext('light')

class Dome extends Component{
    constructor (props) {
        super (props)
        this.state = {

        }
    } 

    render () {
        return (
            // <ThemeContext.Provider value={'dark'}>
            //     <Toolbar />
            // </ThemeContext.Provider>
            <div>1111</div>
        )
    }
}




// function Toolbar (props) {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     )
// }



export default Dome