
import sizes from "../../styles/sizes";

const styles ={
Extras:{
    color:"grey",
    marginTop: "1.5rem",
    [sizes.up('md')]:{
        marginTop:"2.5rem",
    },
},

MenuItem:{
    marginBottom: "0.75rem",
    display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "1.5rem",
},
ExtrasHeading:{
    margin: "0 0 1.5rem",
	borderBottom: "1px solid grey",
},
ExtrasName:{
    flexGrow: "1",
},
notVisible:{
    display:"none",
},
};

export default styles;





