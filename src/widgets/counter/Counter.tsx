import { useState } from "react";
import "./ui/Counter.css";
import RoundButton from "../../features/round-button/RoundButton";

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    return <div>
        <RoundButton label="-" action={() => setCount(count - 1)}/>
        <span className="app-cnt">{count}</span>
        <RoundButton label="+" action={() => setCount(count + 1)}/>
    </div>;
}