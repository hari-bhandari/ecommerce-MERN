import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.css';

const Datatable =(props)=> {

    const [myData,setMyData]=useState([])
    useEffect(()=>{
        setMyData([])
        props.myData.forEach(subC=>{
            setMyData(data=>[...data,subC])

        })
    },[props.myData])

    const renderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [myData];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    setMyData(data)
                }}
                dangerouslySetInnerHTML={{
                    __html: myData[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let key;
    const { pageSize, myClass, multiSelectOption, pagination,order } = props;

    const columns = [];
    for (key in myData[0]) {

        let editable = renderEditable
        editable=null
        columns.push(
            {
                Header: <b>{Capitalize(key.toString())}</b>,
                accessor: key,
                Cell: editable,
                style: {
                    textAlign: 'center'
                }
            });
    }

    columns.push(
        {
            Header: <b>Action</b>,
            id: 'delete',
            accessor: str => "delete",
            Cell: (row) => (
                <div>
                            <span onClick={() => {
                                if(order){
                                    if (window.confirm('Are you sure you wish to update this item to be delivered?')) {
                                        let data = myData;
                                        data.splice(row.index, 1);
                                        setMyData(data);
                                        if (props.delete) {
                                            props.delete(row.original._id)

                                        }
                                    }
                                }
                                else {

                                    if (window.confirm('Are you sure you wish to delete this item?')) {
                                        let data = myData;
                                        data.splice(row.index, 1);
                                        setMyData(data);
                                        if (props.delete) {
                                            props.delete(row.original._id)

                                        }
                                    }
                                }

                            }}>
                                <i className={order?'fa fa-truck':"fa fa-trash"} style={{ width: 35, fontSize: 20, padding: 11, color: '#e4566e' }}
                                ></i>
                            </span>

                    <span onClick={()=>{props.edit(row.original)}}>{!order&&<i className="fa fa-pencil" style={{ width: 35, fontSize: 20, padding: 11,color:'rgb(40, 167, 69)' }}></i>}</span>
                </div>
            ),
            style: {
                textAlign: 'center'
            },
            sortable: false
        }
    )


    return (
        <Fragment>
            <ReactTable
                data={myData}
                columns={columns}
                defaultPageSize={pageSize}
                className={myClass}
                showPagination={pagination}
            />
        </Fragment>
    )
}

export default Datatable
