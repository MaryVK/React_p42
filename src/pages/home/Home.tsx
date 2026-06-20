import { useEffect, useState } from "react";
import Counter from "../../widgets/counter/Counter";
import type IGroup from "../../entities/group/model/IGroup";
import GroupApi from "../../entities/group/api/GroupApi";

export default function Home() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);

    useEffect(() => {
        GroupApi.allGroups().then(setGroups);
    }, []);

    return <div className="container">
        <h1>Крамниця</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
            {groups.map(g => <div className="col">
                <div className="card h-100">
                    <img src={g.imageUrl} className="card-img-top" alt={g.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{g.name}</h5>
                        <p className="card-text">{g.description}</p>
                    </div>
                </div>                
            </div>)}
        </div>
        
        
    </div>;
}