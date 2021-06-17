import { SheepData } from "./SheepData";

export function ReturnRandomKeyFromArray(MyArray : Array<SheepData>)
{
	return Math.floor(Math.random()*MyArray.length)
}

export function RandomOutcome(SuccessRatio : number)
{
	var RandomNumber : number = Math.random();
	if (RandomNumber <= SuccessRatio)
	{
		return true;
	}
	else
	{
		return false;
	}
}