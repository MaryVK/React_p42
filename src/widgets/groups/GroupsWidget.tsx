import { useEffect, useRef, useState } from 'react';
import './ui/GroupsWidget.css';
import type IGroup from '../../entities/group/model/IGroup';
import GroupApi from '../../entities/group/api/GroupApi';
import { Link } from 'react-router-dom';

export default function GroupsWidget() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);
    const cropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        GroupApi.allGroups().then(setGroups);
    }, []);

    const leftButtonClick = () => {
        let sr = cropRef.current!.scrollWidth - 
            cropRef.current!.scrollLeft - 
            cropRef.current!.clientWidth;
        // console.log(
        //     cropRef.current.clientWidth, 
        //     cropRef.current.scrollLeft, 
        //     cropRef.current.scrollWidth,
        //     sr
        // );
        cropRef.current!.scrollLeft += Math.min(sr, cropRef.current!.clientWidth);
    };
    const rightButtonClick = () => {
        cropRef.current!.scrollLeft -= Math.min(
            cropRef.current!.scrollLeft, 
            cropRef.current!.clientWidth
        );
    };


    return <div className='groups-widget'>
        <button className='btn btn-outline-secondary mb-4 me-1' onClick={leftButtonClick}>
            <i className="bi bi-caret-left"></i>
        </button>

        <div className='groups-crop' ref={cropRef}>
            <div className='groups-container'>
                {groups.map(g => <Link to={`/group/${g.slug}`} key={g.id}>
                    <img src={g.imageUrl} alt={g.name} />
                    {g.name}
                </Link>)}
            </div>
        </div>

        <button className='btn btn-outline-secondary mb-4 ms-1' onClick={rightButtonClick}>
            <i className="bi bi-caret-right"></i>
        </button>
    </div>;
}