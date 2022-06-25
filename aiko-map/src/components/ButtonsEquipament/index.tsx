import React, { useState } from "react";
import { FaArrowDown, FaArrowUp}  from "react-icons/fa";
import ListaOp from "../ListaOp";
import Buttons from "../Buttons";

interface IButtoEquipament{
    name: string,
    id: string,
}

export default function ButtonsEquipament({name,id}: IButtoEquipament){
    
    const [flecha, setFlecha] = useState(true);

    return(
        <li>
            <Buttons ClickFunction={()=>{setFlecha(!flecha);}}>
                {name}
                {flecha ? <FaArrowDown/> : <FaArrowUp/>}
            </Buttons>

            {!flecha &&(
                <ListaOp/>
            )}
        </li>
    );
}