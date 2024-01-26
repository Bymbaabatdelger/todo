import { MouseEventHandler } from "react";
import { Button } from "./Button";
import Card from "./Card";

export default function Board({onclick}:{onclick:MouseEventHandler} , ) {
    return(
        <div className="flex-flex-col gap-20 h-fit p-4  w-fit gap-2  rounded-xl bg-red-100 ">
            <div className="p-2">
                 <p className="font-bold px-4 text-2xl">To Do</p>
            </div>
           
            <div className="p-2">
                <Card></Card>
            </div>
            <div className="p-2">
                 <Button onClick={onclick} title="Add task +"></Button>
            </div>
         
        </div>
    )
}