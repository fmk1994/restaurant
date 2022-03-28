import Image from '../pictures/galleryBackground.png';


const styles = theme=>({
    
    contact:{
        backgroundImage: `url(${Image})`,
        display:"flex",    
        height:"100vh",
        width:"100vw",
        justifyContent:"space-between",
        alignItems:"end",
        fontFamily:"Roboto",

    },
    textArea:{
        width: "50%",
        height: "92vh",
        display:"flex",
        flexDirection:"column",
      
    },
openingHours:{
    height:"350px",
    width:"350px",
    alignItems:"center",
    listStyleType:"none",
    fontSize:"1.5rem",
    border: "2px solid black",
    borderRadius:"10px",
    padding:"1rem",
    margin:"2rem",

    "& li":{
        display:"flex",
    justifyContent:"space-between"},
    "& p":{
        margin:"0.4rem",
        padding:"0 2rem"
        },

},
adress:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
height:"350px",
width:"350px",
border:"2px solid black",
borderRadius:"10px",
listStyleType:"none",
fontSize:"1.5rem",
padding:"1rem",
margin:"2rem",
"& li":{
    marginBottom:"0.75rem",
    padding:"0 2rem"},

},
contactData:{
display:"flex",
flexDirection:"row",
alignItems:"start",
justifyContent:"space-between",
width:"100%",
height:"50%",
},

    mapContainer:{
        width:"50%",
        height:"70vh",
        border:"2px solid black",
        borderRadius:"10px",
        overflow:"hidden",
        margin:"1rem 2rem"
    },

    anotherRestaurant:{
        height:"50%",
        width:"100%",
        fontSize:"1.5rem",
        textAlign:"center",
        margin:"1rem",
        "& img":{
            width:"400px",
            height:"250px",
            margin:"1rem",
            border: "2px solid black",
            borderRadius:"10px",
            cursor:"pointer",
        },
    },
    imgs:{
        display:"flex",
        flexDirection:"row",
        textAlign:'center',
        marginRight:"2.5rem"
    },

    

  })

  export default styles;