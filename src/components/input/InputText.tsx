import React from "react"

interface inputTextProps{
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

export const InputText: React.FC<inputTextProps> = ({onChange, style, placeholder}) => {
    return(
        <input placeholder={`${placeholder}`} className={`${style} border px-3 py-2 rounded-lg text-gray-900" type="text"`}
        onChange={onChange}/>
    )
}