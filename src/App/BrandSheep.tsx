import React from "react";
import { SheepData } from "./SheepData";
import { ReturnRandomKeyFromArray as RKA} from "./Functions";

interface Props {
  Sheeps: Array<SheepData>;
  setSheeps: React.Dispatch<React.SetStateAction<SheepData[]>>;
  setLog: React.Dispatch<React.SetStateAction<string>>;
}

export const BrandSheep = ({ Sheeps, setSheeps, setLog } : Props) =>
{
	function BeginBranding(BrandableSheeps : Array<SheepData>)
	{
		var SelectedSheepNumber : number = RKA(BrandableSheeps);
		var SelectedSheep = BrandableSheeps[SelectedSheepNumber];
		var SelectedSheepNumberinSheeps: number = Sheeps.findIndex( (Sheeps) => Sheeps.id === SelectedSheep.id);
		Sheeps[SelectedSheepNumberinSheeps].isBranded = true;
		setSheeps([...Sheeps]);
		setLog(SelectedSheep.Name + " (" + SelectedSheep.Gender + " ) " + " has been branded.");
	}

	function Brand()
	{
		let BrandableSheeps = Sheeps.filter((Sheeps) => !Sheeps.isBranded)

		if (BrandableSheeps.length == 0)
		{
			setLog("All sheeps in the field are branded."); 
		}
		else
		{
			BeginBranding(BrandableSheeps);
		}
	}

	const handleClick = (e : any) => 
    {		
		e.preventDefault();
		if(Sheeps.length == 0)
		{
			setLog("You must have at least 1 sheep in the field to brand it."); 
		}
		else
		{
			Brand();
		} 
    };

	return (
		<div>   
			<button className="ActionBTN" onClick={handleClick}>Brand random sheep</button>
		</div>
	);
}