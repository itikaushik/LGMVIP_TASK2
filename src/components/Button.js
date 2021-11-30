import React from 'react'

const Button = ({isActive,clicked}) => {
    return (
        <div>
            <button onClick={clicked}>{isActive ? "Get Users":"Get user"}</button>
        </div>
    )
}
export default Button