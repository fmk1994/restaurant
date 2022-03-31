import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/MenuContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from "@mui/material";


export default function Input({ type, name, index }) {
  const [items, updateItem] = useContext(Context);
const [count, setCount] = useState(0);



useEffect(()=>{
  updateItem(type, index, count);
}, [count])



const disabled = count<=0

  return (
    <>
    <IconButton onClick={()=>setCount(count+1)}><AddIcon/></IconButton>
    <div
    style={{	
      boxSizing:"inherit",
      width: "1.75rem",
      height: "1.75rem",
      padding: "0.25rem",
      margin: "0 0.75rem",
      backgroundColor: "transparent",
      border: "1px solid grey",
      borderRadius: "50%",
      textAlign: "center",}}

      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      count={count}

      name={name.replace(" ", "-").toLowerCase()}
    >
      {count!==0&&count}
      </div>


    <IconButton disabled={disabled} onClick={()=>setCount(count-1)}><RemoveIcon/></IconButton>
    </>
  );
}
