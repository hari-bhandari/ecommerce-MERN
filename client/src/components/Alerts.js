import React, {useContext, useEffect, useState} from 'react';
import './Alerts.css'
import AlertContext from '../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const [open,setOpen]=useState(false )
    useEffect(()=>{
        if(alertContext.alerts.length>0){
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    },[alertContext.alerts.length])

    return (

        <div className={`custom-model-main ${open&&'model-open'}`}>
            <div className="custom-model-inner">
                <div className="close-btn" onClick={()=>{
                    setOpen(false)
                }}>×</div>
                <div className="custom-model-wrap">
                    <div className="pop-up-content-wrap" style={{margin:0,padding:0}}>
                        {
                            alertContext.alerts.map(alert => (
                                <div key={alert.id} className={`alert alert-${alert.type}`} style={{margin:0,padding:0}}>
                                    <i className='fas fa-info-circle' /> {alert.msg}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bg-overlay"></div>
        </div>
    );
};

export default Alerts;