import React from "react";

const cardStyling = {
    backgroundColor: '#505050',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '10px'
} as const;

export const Card: React.FC<{children: React.ReactNode}> = (props) => {
    return (
        <div style={cardStyling}>
            {props.children}
        </div>
    )
}