import React from 'react'
import TestThree from './TestThree'

export default function TestTwo({ names, children }) {
    return (
        <>
            <div>{children}</div>
            <div>{names}</div>
            <TestThree test={names} />
        </>
    )
}
