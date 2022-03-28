import Image from '../pictures/pic1.png';
import sizes from './sizes.js';
const styles = theme=>({

    mainPage: {
      height: "100vh",
      width: "100vw",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection:"column",
      boxShadow:"none",
      "& .MuiPaper-root":{
        backgroundColor: "rgb(214, 218, 201)"},
    
    },

    logoArea:{
      marginTop:"80px",
      display:"flex",
      justifyContent: "center",
      alignItems:"center",
      width:"100%",
      [sizes.down('sm')]:{
        width:"0%",
    },
    },
    logo:{
      borderRadius:"50%",
      [sizes.down('md')]:{
        transform: "scale(0.7)",
      },
        [sizes.down("sm")]:{
          display:"none",
        }
      
    },
   
    buttonsArea: {
      width: "100%",
      display: "flex",
      fontSize: "4rem",
      color: "white",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"center",
      [sizes.down("md")]:{
        width:"100%",

    },
  },
  button:{
    "&.MuiButton-root":{
    margin:"20px", 
    backgroundColor:"transparent",
    backdropFilter:"blur(20px)",
    color:"white",
    width:"300px",
    height:"80px",
    fontSize:"20px",
    "&:hover":{
      transform: "scale(1.15)",
      backgroundColor:"transparent",
    },
    [sizes.down("xl")]:{
      display:"none",
    },
    [sizes.down("sm")]:{
      display:"block",
    },
   
    },
  },
  mainButtons:{
    "&.MuiButton-root":{
      margin:"20px", 
      backgroundColor:"transparent",
      backdropFilter:"blur(20px)",
      color:"white",
      width:"300px",
      height:"80px",
      fontSize:"20px",
      "&:hover":{
        transform: "scale(1.15)",
        backgroundColor:"transparent",
      },
      [sizes.down("md")]:{
        margin:"20px",

    },
      },
  }
    
  })

  export default styles;