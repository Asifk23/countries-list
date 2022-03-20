import React from 'react'

const InputField = ({ className, type, placeholder, onChange, value, name, checked }) => {
    return (
        <>
            <input className={className} type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} checked={checked} />
        </>
    )
}

export default InputField