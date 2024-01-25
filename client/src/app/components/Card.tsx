import {Button} from "./Button"
export default function Card () {
    return(
        <div className="flex w-fit p-4 gap-4 bg-slate-50 rounded-md ">
           <div>
           <p className="font-bold">Mobile banking app</p>
            <p>This is for mobile banking application </p>
            <div className="flex gap-4">
                <Button title="High"></Button>
                <Button title="App"></Button>
            </div>
           </div>
          <div className="flex flex-col gap-2">
          <div className="flex h-fit p-1 w-fit rounded-[30%] bg-red-100">X</div>
           <div className="flex h-fit p-1 w-fit rounded-[30%] bg-red-100">E</div>
          </div>
        </div>
    )
 }