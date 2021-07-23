import React from 'react';
import {
  SingleOrderList,
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
} from './order-card.style';


type OrderCardProps = {
  orderId?: any;
  onClick?: (e: any) => void;
  className?: any;
  status?: any;
  date?: any;
  createdTime?: any;
  amount?: number;
};

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  onClick,
  className,
  status,
  date,
                                               createdTime,
  amount,
}) => {
  return (
    <>
      <SingleOrderList onClick={onClick} className={className}>
        <OrderListHeader>
          <TrackID>
            Order
            <span>#{orderId}</span>
          </TrackID>
          <Status>{status}</Status>
        </OrderListHeader>

        <OrderMeta>
          <Meta>
            Order Date
            : <span>{date}</span>
          </Meta>
          <Meta>
            Created Time
            : <span>{createdTime}</span>
          </Meta>
          <Meta className="price">
            Total Price
            :
            <span>
              {'£'}
              {amount}
            </span>
          </Meta>
        </OrderMeta>
      </SingleOrderList>
    </>
  );
};

export default OrderCard;
