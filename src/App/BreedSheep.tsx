import React, {useState} from "react";
import { SheepData } from "./SheepData";
import { ReturnRandomKeyFromArray as RKA, RandomOutcome} from "./Functions";

interface Props {
  Sheeps: Array<SheepData>;
  setSheeps: React.Dispatch<React.SetStateAction<SheepData[]>>;
  setLog: React.Dispatch<React.SetStateAction<string>>;
}

export const BreedSheep = ({ Sheeps, setSheeps, setLog } : Props) =>
{
	const [Input, setInput] = useState({ ChildName: "", Toggle: false});
	
	const handleChange = (e : any) => { setInput({...Input,[e.target.name]: e.target.value,});};

	function BeginBreed(MaleArray : Array<SheepData>, FemaleArray : Array<SheepData>)
	{
	    var SelectedMale : number = RKA(MaleArray);
		var SelectedFemale : number = RKA(FemaleArray);

		setLog("Chosen Male is " + MaleArray[SelectedMale].Name + " and Chosen Female is " + FemaleArray[SelectedFemale].Name + ".");

		if (RandomOutcome(0.5))
		{
			setInput({ChildName: "", Toggle : true});
		}
		else
		{
			setLog("Sheeps were unsuccessfully fertilized.");
		}
	}

	const handleSubmit = (e : any) => 
    {
		const { v4: uuidv4 } = require('uuid');
		var ChildGender : string;

		if(RandomOutcome(0.5))
		{
			ChildGender = "Male";
		}
		else
		{
			ChildGender = "Female";
		}

        e.preventDefault()   
        setSheeps([...Sheeps, 
        {
            id: uuidv4(),
            Name: Input.ChildName,
            Gender: ChildGender,
            isBranded: false,
            isAged: false
        },]);

		setLog("Sheeps were successfully fertilized.");
		setInput({ChildName: "",Toggle : false});
    };

	const NameChildModal = () => 
	{
		if (Input.Toggle) 
		{
			return (			
			<div className="Modal">
				<h2>Congratulations !</h2>
				<p>New lamb was born ! Please name newborn sheep.</p>
				<form onSubmit={handleSubmit}>             
					<input type="text" className="InputNameModal" placeholder="Newborn sheeps name" name="ChildName" value={Input.ChildName} onChange={handleChange}/>
					<button className="ActionBTN">Submit</button>
                </form>
			</div>
			)
		} 
		return;
    }

	const handleClick = () => 
    {       
        let BreedableSheeps = Sheeps
		.filter((Sheeps) => !Sheeps.isBranded)
		.filter((Sheeps) => Sheeps.isAged);

		if(BreedableSheeps.length == 0)
		{
			setLog("There is no sheeps in the field that can be bred.");
		}
		else if(BreedableSheeps.length < 2)
		{
			setLog("There must be at least 2 sheeps in the field in order to breed them.");
		}
		else
		{
			let MaleBreedableSheeps = BreedableSheeps.filter((BreedableSheeps) => BreedableSheeps.Gender == "Male");
			let FemaleBreedableSheeps = BreedableSheeps.filter((BreedableSheeps) => BreedableSheeps.Gender == "Female");
			
			if (MaleBreedableSheeps.length >= 1 && FemaleBreedableSheeps.length >= 1)
			{
				BeginBreed(MaleBreedableSheeps, FemaleBreedableSheeps);
			}
			else
			{
				setLog("There is not enought Males/Females on the field to start breeding.");
			}
		}
    };

	return (
		<div>
			{NameChildModal()}
			<button className="ActionBTN" onClick={handleClick}>Breed two random sheeps</button>
		</div>
	);
}