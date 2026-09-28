import { useContext, useEffect, useState } from "react";
// import Counter from "../../widgets/counter/Counter";
import type IGroup from "../../entities/group/model/IGroup";
import GroupApi from "../../entities/group/api/GroupApi";
import { Link } from "react-router-dom";
import AppContext from "../../features/_context/AppContext";
import type IPagination from "../../entities/_api_base/model/IPagination";

const preload_grp:Array<IGroup> = Array.from({length: 10}, (_, i) => {
    return {
        id: i + 1 + "",
        name: "Loading...",
        description: "Loading...",
        slug: "",
        imageUrl: "/img/blank.png"
    }
});

export default function Home() {
    const [groups, setGroups] = useState<Array<IGroup>>(preload_grp);
    const {setLoading} = useContext(AppContext);
    const [pagination, setPagination] = useState<IPagination | undefined>();

    useEffect(() => {
        setLoading(true);
        GroupApi.allGroups()
        .then(grp => {
            setGroups(grp.data);
            setPagination(grp.meta.pagination);
        })
        .finally(() => {setLoading(false);});

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
            {pagination && 
                <nav className="my-4" aria-label="Page navigation example">
                    <ul className="pagination">
                       <li className="page-item">
                           <a className="page-link" href="#" aria-label="Previous">
                             <span aria-hidden="true">&laquo;</span>
                           </a>
                       </li>
                       {Array.from({length: pagination.totalPages}, (_, i) =>
                            <li className="page-item"><a className="page-link" href="#">{i + 1}</a></li>
                        )}
                       <li className="page-item">
                           <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                           </a>
                       </li>
                    </ul>
                </nav>
            }
    </div>;
}