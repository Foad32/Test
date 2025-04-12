import TestThree from "./TestThree";
import TestTwo from "./TestTwo";

export default function Test({ names, children }) {
    return (
        <>
            <div>{children}</div>
            <div>{names}</div>
            <TestTwo names={names}/>
        </>
    )
}
