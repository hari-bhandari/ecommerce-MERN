import React from 'react';
import Table from 'rc-table';
import Collapse, { Panel } from 'rc-collapse';
import Progress from "@/components/Others/progress-box/progress-box";
import {
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
  CardWrapper,
  OrderDetail,
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTable,
  OrderTableMobile,
} from './order-card.style';


type MobileOrderCardProps = {
  orderId?: any;
  onClick?: (e: any) => void;
  className?: any;
  status?: any;
  date?: any;
  deliveryTime?: any;
  amount?: number;
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: string;
  subtotal?: number;
  discount?: number;
  deliveryFee?: number;
  grandTotal?: number;
  orders?: any;
};

const components = {
  table: OrderTable,
};

const OrderCard: React.FC<MobileOrderCardProps> = ({
  onClick,
  className,
  columns,
  progressData,
  orders,
}) => {
  return (
    <>
      <Collapse
        accordion={true}
        className={`accordion ${className}`}
        defaultActiveKey="active"
      >
        {orders.map((order: any) => (
          <Panel
            header={
              <CardWrapper onClick={() => onClick(order)}>
                <OrderListHeader>
                  <TrackID>
                    Order <span>#{order.id}</span>
                  </TrackID>
                  <Status>{progressData[order.status - 1]}</Status>
                </OrderListHeader>

                <OrderMeta>
                  <Meta>
                    Order Date: <span>{order.date}</span>
                  </Meta>
                  <Meta>
                    Delivery Time: <span>{order.deliveryTime}</span>
                  </Meta>
                  <Meta className="price">
                    Total Price:
                    <span>
                      £
                      {order.amount}
                    </span>
                  </Meta>
                </OrderMeta>
              </CardWrapper>
            }
            headerClass="accordion-title"
            key={order.id}
          >
            <OrderDetail>
              <DeliveryInfo>
                <DeliveryAddress>
                  <h3>Delivery Address</h3>
                  <Address>{order.deliveryAddress}</Address>
                </DeliveryAddress>

                <CostCalculation>
                  <PriceRow>
                    Subtotal
                    <Price>
                      £
                      {order.subtotal}
                    </Price>
                  </PriceRow>
                  <PriceRow>
                    Discount
                    <Price>
                      '£'
                      {order.discount}
                    </Price>
                  </PriceRow>
                  <PriceRow>
                    Delivery Fee
                    <Price>
                      £
                      {order.deliveryFee}
                    </Price>
                  </PriceRow>
                  <PriceRow className="grandTotal">
                    Total
                    <Price>
                      £
                      {order.amount}
                    </Price>
                  </PriceRow>
                </CostCalculation>
              </DeliveryInfo>

              <ProgressWrapper>
                <Progress data={progressData} status={order.status} />
              </ProgressWrapper>

              <OrderTableMobile>
                <Table
                  columns={columns}
                  data={order.products}
                  rowKey={(record) => record.id}
                  components={components}
                  scroll={{ x: 450 }}
                  // scroll={{ y: 250 }}
                />
              </OrderTableMobile>
            </OrderDetail>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default OrderCard;
