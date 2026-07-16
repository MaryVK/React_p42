import { useContext } from 'react';
import './ui/Alert.css';
import AppContext from '../_context/AppContext';
import type IAlertData from './model/IAlertData';

export default function Alert({data}:{data:IAlertData}) {
    const {showAlert} = useContext(AppContext);


    // bubbling
    return <div className='alert-bg' 
                onClick={() =>{
                    if(data.isCancelable){
                        showAlert(null);
                    }
                }}>
        <div className='alert-fg' onClick={e => e.stopPropagation()}>
            {data.message}
            {data.buttons && data.buttons.length > 0 
            ? data.buttons.map(btn => 
                <button 
                    key={btn.title} 
                    onClick={() => {
                        if(btn.action) {
                            btn.action();
                        } 
                        showAlert(null)
                    }}
                >{btn.title}</button>)
            : <button onClick={() => showAlert(null)}>Close</button>
            }
        </div>
    </div>;
}