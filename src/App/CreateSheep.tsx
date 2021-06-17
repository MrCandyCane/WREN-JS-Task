import React, {useState} from "react";
import { SheepData } from "./SheepData";
import { RandomOutcome} from "./Functions";

interface Props {
  Sheeps: Array<SheepData>;
  setSheeps: React.Dispatch<React.SetStateAction<SheepData[]>>;
  setLog: React.Dispatch<React.SetStateAction<string>>;
}


export const CreateSheep = ({ Sheeps, setSheeps, setLog } : Props) =>
{
    const { v4: uuidv4 } = require('uuid');
    const [Input, setInput] = useState({ Name: "", Gender: "", isBranded: false, isAged: true,}); 

    const handleChange = (e : any) => { setInput({...Input,[e.target.name]: e.target.value,});};
    const handleChangeCheckbox = (e : any) => { setInput({...Input,[e.target.name]: e.target.checked,});};
    const handleSubmit = (e : any) => 
    {
        e.preventDefault()
        var SheepGender : string = "";
        
        if(Input.Gender == "" || Input.Gender == "Select sheep gender")
        {
            setLog("Gender was not selected so it was chosen at random.");
            if (RandomOutcome(0.5))
		    {
			    SheepGender = "Male";
		    }
		    else
		    {
			    SheepGender = "Female";
		    }
        }
        else
        {
            SheepGender = Input.Gender;
        }

        setSheeps([...Sheeps, 
        {
            id: uuidv4(),
            Name: Input.Name,
            Gender: SheepGender,
            isBranded: Input.isBranded,
            isAged: Input.isAged,
        },]);
        setLog(Input.Name + " ( " + SheepGender + " )" + " has been added to the field.");
    };

        return (
            <div>
                <form onSubmit={handleSubmit}>             
                    <input type="text" className="InputName" placeholder="Name your sheep" name="Name" value={Input.Name} onChange={handleChange} required/>		        
                    <select name="Gender" className="InputGender" value={Input.Gender} onChange={handleChange} required>
			            <option> Select sheep gender </option>
			            <option> Male </option>
			            <option> Female </option>
		            </select>
		            <input type="checkbox" className="InputCheckbox" name="isBranded" checked={Input.isBranded} onChange={handleChangeCheckbox}/>
                        <label className="CheckboxLabels" htmlFor="isBranded">Is sheep branded?</label>
                    <input type="checkbox" className="InputCheckbox" name="isAged" checked={Input.isAged} onChange={handleChangeCheckbox}/>                   
                        <label className="CheckboxLabels" htmlFor="isAged">Is sheep mature?</label>
                    <button className="ActionBTN">Submit</button>
                </form>
            </div>
        );
}