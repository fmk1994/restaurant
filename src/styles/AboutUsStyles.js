
import Image from '../pictures/galleryBackground.png';
import TeamPhoto from '../pictures/sebastian-coman.jpg';
import PlacePhoto from '../pictures/steven-pecoraro.jpg';
import teamOpenedPhoto from '../pictures/teamOpenedPhoto.jpg';
import placeOpenedPhoto from '../pictures/placeOpenedPhoto.jpg';

const styles= {
Wrapper:{
    display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundImage: `url(${Image})`,
       height:"100vh",
        width:"100vw",

},

    AboutUs:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundImage: `url(${Image})`,
       height:"100vh",
        width:"100vw",


    },

    Box:{
        width:"20vw",
        height:"80vh",
        border:"2px solid black",
        borderRadius:"10px",
        cursor:"pointer",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display:"flex",
        alignItems:"end",
        "&:hover":{
            transform: "scale(1.05)"
    },
},
    Team:{
        backgroundImage: `url(${TeamPhoto})`,
        },
        
    
    Place:{
         backgroundImage: `url(${PlacePhoto})`,
         },


    Paragraph:{
        "&.MuiTypography-root":{
        color:"white",
        display:"flex",
        paddingLeft:"1rem",
        fontSize:"1.5rem"},
    },
TeamBox:{
    backgroundImage: `url(${teamOpenedPhoto})`,
    width:"50vw",
    height:"90vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
},
PlaceBox:{
    backgroundImage: `url(${placeOpenedPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:"50vw",
    height:"90vh",
},

Dialog:{
display:"flex",
justifyContent:"center"

},

Text:{
    marginLeft:"10rem",
    width:"30vw",
    height:"20vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"18px"
},

}
    export default styles;
    