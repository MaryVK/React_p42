import { useEffect, useState } from "react";
// import Counter from "../../widgets/counter/Counter";
import type IGroup from "../../entities/group/model/IGroup";
import GroupApi from "../../entities/group/api/GroupApi";
import { Link } from "react-router-dom";

export default function Home() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);

    useEffect(() => {
        console.log("Home created");
        GroupApi.allGroups().then(setGroups);

        return () => {console.log("Home destroyed");};
    }, []);

    return <div className="container">
        <h1>Store</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4 g-xl-5">
            {groups.map(g => <div className="col" key={g.id}>
                <div className="card h-100">
                    <Link to={`/group/${g.slug}`} className="nav-link" >
                        <img src={g.imageUrl} className="card-img-top" alt={g.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{g.name}</h5>
                            <p className="card-text">{g.description}</p>
                        </div>
                    </Link>
                </div>
            </div>)}
        </div>
        
        
    </div>;
}