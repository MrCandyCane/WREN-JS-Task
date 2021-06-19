import React from "react";
import { SheepData } from "./SheepData";

interface Props {
  Sheeps: Array<SheepData>;
}

export const SheepField = ({ Sheeps } : Props) =>
{
    function DisplaySheep()
    {
        const Output : any = [];
        Sheeps.map((Sheep, n) =>
        {
                Output.push
                (
                    <div className={Sheep.isAged ?  "Sheep" :  "SheepChild"} key={n}>
                         <div>
                            <img 
                                className={Sheep.isAged ?  "SheepAdultIMG" :  "SheepChildIMG"} 
                                src={Sheep.isBranded ?  "https://i.imgur.com/LHCDlio.png" :  "https://i.imgur.com/Um0nkn4.png"} 
                            />
                            <div className="SheepName">
                                {Sheep.Name}
                            </div>
                            <div className={Sheep.Gender}>                                
                            </div>
                         </div>
                    </div>
               )
        });
        return Output;
    }


    return (
        <div className="SheepFieldInside">
            {DisplaySheep()}
       </div>
    );
}
