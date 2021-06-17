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
            if (Sheep.isAged)
            {
                Output.push
                (
                    <div className="Sheep" key={n}>
                         <div>
                            <img className="SheepAdultIMG" src={Sheep.isBranded ?  "https://i.imgur.com/LHCDlio.png" :  "https://i.imgur.com/Um0nkn4.png"} />
                            <div className="SheepName">
                                {Sheep.Name}
                            </div>
                            <div className={Sheep.Gender}>                                
                            </div>
                         </div>
                    </div>
                )
            }
        });
        return Output;
    }

    function DisplayBabySheep()
    {
        const Output : any = [];
        Sheeps.map((Sheep, n) =>
        {
            if (!Sheep.isAged)
            {
                Output.push
                (
                    <div className="SheepChild" key={n}>
                         <div>
                            <img className="SheepChildIMG" src={Sheep.isBranded ?  "https://i.imgur.com/LHCDlio.png" :  "https://i.imgur.com/Um0nkn4.png"} />
                            <div className="SheepName">
                                {Sheep.Name}
                            </div>
                            <div className={Sheep.Gender}>                                
                            </div>
                         </div>
                    </div>
                )
            }
        });
        return Output;
    }


    return (
        <div className="SheepFieldInside">
            {DisplaySheep()}
            {DisplayBabySheep()}
       </div>
    );
}