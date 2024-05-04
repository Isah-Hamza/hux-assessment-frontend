import React from 'react'


export const ValidationError = ({ text }) => {
    return <span className="text-xs text-red-700 block">{text}</span>;
};

export default ValidationError
