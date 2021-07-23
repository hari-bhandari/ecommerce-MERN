import React, { useState, useEffect } from 'react';
import {Scrollbar} from "@/components/Scrollbar";
import dateFormat from 'dateformat'
import {
    DesktopView,
    MobileView,
    OrderBox,
    OrderListWrapper,
    OrderList,
    OrderDetailsWrapper,
    Title,
    ImageWrapper,
    ItemWrapper,
    ItemDetails,
    ItemName,
    ItemSize,
    ItemPrice,
    NoOrderFound,
} from './MyOrders.css';

import OrderDetails from './order-details/order-details';
import OrderCard from './order-card/order-card';
import OrderCardMobile from './order-card/order-card-mobile';
import useComponentSize from 'utils/useComponentSize';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";


const progressData = ['Order Received', 'Order On The Way', 'Order Delivered'];

const orderTableColumns = [
    {
        title: 'Items',
        dataIndex: '',
        key: 'items',
        width: 250,
        ellipsis: true,
        render: (text, record) => {
            return (
                <ItemWrapper>
                    <ImageWrapper>
                        <img src={record.thumbImage} alt={record.name} />
                    </ImageWrapper>

                    <ItemDetails>
                        <ItemName>{record.name}</ItemName>
                        <ItemPrice>{record.price}</ItemPrice>
                    </ItemDetails>
                </ItemWrapper>
            );
        },
    },
    {
        title: (
            'Quantity'        ),
        dataIndex: 'quantity',
        key: 'quantity',
        align: 'center',
        width: 100,
        render:(text, record) => {
            return <p>{record.countInStock}</p>;
        },
    },
    {
        title:'Price',
        dataIndex: '',
        key: 'price',
        align: 'right',
        width: 100,
        render: (text, record) => {
            return <p>{record.price}</p>;
        },
    },
];

const OrdersContent: React.FC<{}> = () => {
    const [targetRef, size] = useComponentSize();
    const orderListHeight = size.height - 79;
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/order/myorders`)
    const [selection, setSelection] = useState(null);

    useEffect(() => {
        if (data?.length) {
            setSelection(data[0]);
        }
    }, [data?.length]);

    if (!data) return <div>loading...</div>;

    return (
        <OrderBox>
            <DesktopView>
                <OrderListWrapper style={{ height: size.height }}>
                    <Title style={{ padding: '0 20px' }}>
                        My Order
                    </Title>

                    <Scrollbar className='order-scrollbar'>
                        <OrderList>
                            {data.length !== 0 ? (
                                data.map((current: any) => {
                                    const created=new Date(current.created)
                                    const createdTime=dateFormat(created,"HH:MM")
                                    const createdDate=dateFormat(created,"dddd, mmmm dS, yyyy")
                                    return (
                                    <OrderCard
                                        key={current._id}
                                        orderId={current._id}
                                        className={current._id === selection?._id ? 'active' : ''}
                                        status={progressData[current.status - 1]}
                                        date={createdDate}
                                        createdTime={createdTime}
                                        amount={current.totalPrice}
                                        onClick={() => setSelection(current)}
                                    />
                                )})
                            ) : (
                                <NoOrderFound>
                                    No order found
                                </NoOrderFound>
                            )}
                        </OrderList>
                    </Scrollbar>
                </OrderListWrapper>

                <OrderDetailsWrapper ref={targetRef}>
                    <Title style={{ padding: '0 20px' }}>
                        Order Details
                    </Title>
                    {selection && (
                        <OrderDetails
                            progressStatus={selection.status}
                            progressData={progressData}
                            address={selection.shippingAddress}
                            subtotal={selection.totalPrice}
                            discount={selection.discount}
                            deliveryFee={selection.shippingPrice}
                            grandTotal={selection.totalPrice}
                            tableData={selection.orderItems}
                            columns={orderTableColumns}
                        />
                    )}
                </OrderDetailsWrapper>
            </DesktopView>

            <MobileView>
                <OrderList>
                    <OrderCardMobile
                        orders={data}
                        // className={order && order.id === active ? 'active' : ''}
                        progressData={progressData}
                        columns={orderTableColumns}
                        onClick={setSelection}
                    />
                </OrderList>
            </MobileView>
        </OrderBox>
    );
};

export default OrdersContent;
