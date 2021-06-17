import React from "react";
import { SheepData } from "./SheepData";
import { CreateSheep } from "./CreateSheep";
import { SheepField } from "./SheepField";
import { BreedSheep } from "./BreedSheep";
import { BrandSheep } from "./BrandSheep";
import "./Styles/App.css";
import 'bootstrap/dist/css/bootstrap.css';

export const App = () =>
{
    const [Sheeps, setSheeps] = React.useState<SheepData[]>([]);
    const [Log, setLog] = React.useState<string>("Nothing happened yet.");

        return (
            <div className="SheepFarm">
                <div className="HeaderText">
                    <h1>Untitled sheep farm</h1>
                </div>
                <div className="Interactables">
                    <div className="col">
                        <CreateSheep Sheeps={Sheeps} setSheeps={setSheeps} setLog={setLog}/>
                    </div>
                    <div className="col">
                        <div className="buttons">
                            <BreedSheep Sheeps={Sheeps} setSheeps={setSheeps} setLog={setLog}/>
                            <BrandSheep Sheeps={Sheeps} setSheeps={setSheeps} setLog={setLog}/>
                        </div>
                    </div>
                </div>

                <div className="SheepField">
                    <SheepField Sheeps={Sheeps}/>
                </div>
                <div className="Logs">
                    <div className="LogStart">
                        Latest activity:
                    </div>
                    <div className="LogPart">
                        {Log} 
                    </div>
                </div>

                              
            </div>
        );
}