import React from 'react';
import Table from 'rc-table';
import {
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTableWrapper,
  OrderTable,
} from './order-details.style';
import Progress from "@/components/Others/progress-box/progress-box";


type OrderDetailsProps = {
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: any;
  subtotal?: number;
  discount?: number;
  deliveryFee?: number;
  grandTotal?: number;
};

const components = {
  table: OrderTable,
};

const OrderDetails: React.FC<OrderDetailsProps> = ({
  tableData,
  columns,
  address,
  progressStatus,
  progressData,
  subtotal,
  discount,
  deliveryFee,
  grandTotal,
}) => {
  const statusChecker=(status)=>{
    const list=['received', 'dispatched', 'delivered']
    return list.findIndex(data=>data==status)+1
  }
  const CURRENCY='£'
  return (
    <>
      <DeliveryInfo>
        <DeliveryAddress>
          <h3>
            Delivery Address
          </h3>
          <Address>{address.address1}</Address>
          <Address>{address.address2}</Address>
          <Address>{address.county}</Address>
          <Address><b>{address.postcode}</b></Address>
        </DeliveryAddress>

        <CostCalculation>
          <PriceRow>
            Sub total
            <Price>
              {CURRENCY}
              {subtotal}
            </Price>
          </PriceRow>
          <PriceRow>
            Discount
            <Price>
              {CURRENCY}
              {discount}
            </Price>
          </PriceRow>
          <PriceRow>
            Delivery Fee
            <Price>
              {CURRENCY}
              {deliveryFee}
            </Price>
          </PriceRow>
          <PriceRow className="grandTotal">
            Total
            <Price>
              {CURRENCY}
              {grandTotal}
            </Price>
          </PriceRow>
        </CostCalculation>
      </DeliveryInfo>

      <ProgressWrapper>
        <Progress data={progressData} status={statusChecker(progressStatus)} />
      </ProgressWrapper>

      <OrderTableWrapper>
        <Table
          columns={columns}
          data={tableData}
          rowKey={(record) => record.id}
          components={components}
          className="orderDetailsTable"
          // scroll={{ y: 350 }}
        />
      </OrderTableWrapper>
    </>
  );
};

export default OrderDetails;
