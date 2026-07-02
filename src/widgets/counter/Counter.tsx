import { useState } from "react";
import "./ui/Counter.css";
import RoundButton from "../../features/round-button/RoundButton";
import DoNotCall from "../../features/doNotCall/doNotCall";


export default function Counter({
        initialQuantity, 
        onChange
    }:{
        initialQuantity?:number,
        onChange?:(quantity:number) => void 
    }
) {

    const [count, setCount] = useState<number>(initialQuantity ?? 0);
    const [doNotCall, setDoNotCall] = useState(false);

    return <div>
        <RoundButton label="-" action={() => {
            setCount(count - 1);
            if(onChange) onChange(count - 1);
        }}/>
        <span className="app-cnt">{count}</span>
        <RoundButton label="+" action={() => {
            setCount(count + 1);
            if(onChange) onChange(count + 1);
        }}/>

        <DoNotCall
            checked={doNotCall}
            onChange={setDoNotCall}
        />
    </div>;

    
}



