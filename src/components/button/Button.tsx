import React from 'react'

interface ButtonProps {
    color: string;
    label: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({onClick, label, color}) =>{
    return(
        <>
        <button className={`bg-blue-700 rounded-lg py-1 px-4 border text-white hover:bg-${color}-900`}
        onClick={onClick}>{ label }</button>                  
        </>
    )
}