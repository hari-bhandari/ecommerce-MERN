import React, { useContext } from 'react';
import './Alerts.css'
import AlertContext from '../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);

    return (

        <div className="custom-model-main model-open">
            <div className="custom-model-inner">
                <div className="close-btn">×</div>
                <div className="custom-model-wrap">
                    <div className="pop-up-content-wrap">
                        {
                            alertContext.alerts.length > 0&&alertContext.alerts.map(alert => (
                                <div key={alert.id} className={`alert alert-${alert.type}`}>
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