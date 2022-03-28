import sizes from './sizes'

const styles ={
AppBar:{
    "&.MuiAppBar-root":{
        backdropFilter:"blur(20px)",
        height: "70px",
        display:"flex",
        justifyContent:"space-between"
    },
},

menuButtons:{
    "&.MuiButtonBase-root":{
    color:"white",},
},

Link:{
    textDecoration:"none",
    backgroundColor:"transparent",
    "&:hover":{
        transform: "scale(1.15)"},
},

MenuItems:{
    "&.MuiMenuItem-root":{
        backgroundColor:"transparent",
    },
},
Popover:{
    "MuiPaper-root-MuiPopover-paper":{
        backgroundColor:"transparent",
        backdropFilter:"blur(20px)",
    }
    
},

MenuIcon:{
color:"white",
},

Avatar:{
cursor:"pointer",
"&:hover":{
    transform: "scale(1.25)"

},

},



}
export default styles;
