// import React from 'react';
import './ui/doNotCall.css';
import {type IDoNotCall}  from './models/IDoNotCall';

export default function DoNotCall ({checked, onChange} : IDoNotCall) {
    return (
        <label className='switch-container'>
            <input 
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)} // возвращ. новое состояние true/ false 
             />
             <span>Don't call</span>
             
             {/* <span className='slider'></span> */}
             {/* <span className='switch-label'>не звонить</span> */}
        </label>
    );
}

