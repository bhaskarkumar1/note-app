import React from "react";
import Note from "../Note/Note";
import "./Notes-container.css";
function Notecontainer(){
    return (<div className="note-container">
        <h2>Notes</h2>
        <div className="note-container_notes">
        <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        />
         <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        /> 
        <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        />
         <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        />
         <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        /> 
        <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        />
         <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        />
         <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        /> 
        <Note
            note={{
                text:"asdfghjk",
                time:"4:54PM",
                color:"cyan",
            }}
        />
        </div>
</div>   
); 
}

export default Notecontainer;