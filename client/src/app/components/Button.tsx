import React from "react";

export interface ButtonProps extends 
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>,

React.AriaAttributes{
    variant? : "primary" | "ghost" | "outline";
}


export const Button = ({children , onClick , variant ,title}:ButtonProps) => {
    return(
        <button onClick={onClick} className={`  p-4 rounded-xl h-fit bg-blue-200
        ${variant === "ghost" && "bg-transparent border-2 border-blue-500 text-blue-500"}
        ${variant === "outline" && "bg-slate-50 border-2 border-blue-500 text-blue-500"}
          `}>

       {title} </button>
    )

} 