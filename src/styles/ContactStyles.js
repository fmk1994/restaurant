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
        alignItems:"start",
      
    },
openingHours:{
    alignItems:"center",
    justifyContent:"center",
    listStyleType:"none",
    fontSize:"1.5rem",
    padding:"1rem",
    margin:"2rem",

    "& li":{
    marginBottom:"0.75rem",
    display:"flex",
    justifyContent:"space-between"},
},
adress:{
listStyleType:"none",
fontSize:"1.5rem",
padding:"1rem",
margin:"2rem",
"& li":{
    marginBottom:"0.75rem"},
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
        height:"92vh"
    },

    anotherRestaurant:{
        height:"50%",
        width:"100%",
        fontSize:"1.5rem",
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