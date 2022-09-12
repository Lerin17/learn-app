import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { withThemeCreator } from "@mui/styles";

const theme = createTheme({
    palette: {
        primary: {
         main: blue[300]}
    
    },
    myButton: {
        background: 'red',
        color: 'white',
        border: '1px solid black'
    }
})

export default theme