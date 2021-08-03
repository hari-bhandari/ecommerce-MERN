import React, { Component ,Fragment} from 'react'
import Breadcrumb from '../common/breadcrumb';

export class Profile extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Profile" parent="Settings" />
                 <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card profile-card">
                            <div className="card-body">
                                <div className="tab-pane fade show active">
                                    <h5 className="f-w-600 f-16">Profile</h5>
                                    <div className="table-responsive profile-table">
                                        <table className="table table-responsive">
                                            <tbody>
                                            <tr>
                                                <td>First Name:</td>
                                                <td>John</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name:</td>
                                                <td>Deo</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>johndeo@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td>Male</td>
                                            </tr>
                                            <tr>
                                                <td>Mobile Number:</td>
                                                <td>2124821463</td>
                                            </tr>
                                            <tr>
                                                <td>DOB:</td>
                                                <td>Dec, 15 1993</td>
                                            </tr>
                                            <tr>
                                                <td>Location:</td>
                                                <td>USA</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Profile
