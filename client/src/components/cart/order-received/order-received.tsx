import React from 'react';
import Link from 'next/link';
import OrderReceivedWrapper, {
  BlockTitle,
  InfoBlock,
  InfoBlockWrapper,
  ListDes,
  ListItem,
  ListTitle,
  OrderDetails,
  OrderInfo,
  OrderReceivedContainer,
  Text,
  TotalAmount,
} from './order-received.style';

type OrderReceivedProps = {
  title:string,
  data:any
};

const OrderReceived: React.FunctionComponent<OrderReceivedProps> = ({title,data}) => {
  return (
    <OrderReceivedWrapper>
      <OrderReceivedContainer>
        <Link href="/">
          <a className="home-btn">
            Back to Home          </a>
        </Link>

        <OrderInfo>
          <BlockTitle>
            {title}
          </BlockTitle>

          <Text>
            {!title&&'Thank you. Your order has been received'}
          </Text>

          <InfoBlockWrapper>
            <InfoBlock>
              <Text bold className="title">
                Order Number
              </Text>
              <Text>${data._id}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                Date              </Text>
              <Text>{data.created.slice(0,10)}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                Total              </Text>
              <Text>{data.totalPrice}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                Payment Method
              </Text>
              <Text>
                {data.paymentMethod}
              </Text>
            </InfoBlock>
          </InfoBlockWrapper>
        </OrderInfo>

        <OrderDetails>
          <BlockTitle>
            Order Details
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                Total Item
              </Text>
            </ListTitle>
            <ListDes>
              <Text>6 Items</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                Order Time
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data.created.slice(0,10)}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                Delivery Address
              </Text>
            </ListTitle>
            <ListDes>
              <Text>
                {data.shippingAddress.address1}
              </Text>
              <Text>
                {data.shippingAddress.address2}
              </Text>
              <Text>
                {data.shippingAddress.postcode}
              </Text>
            </ListDes>
          </ListItem>
        </OrderDetails>

        <TotalAmount>
          <BlockTitle>
            Total Amount
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                Sub total
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data.totalPrice}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                Payment Method
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data.paymentMethod}</Text>
            </ListDes>
          </ListItem>



          <ListItem>
            <ListTitle>
              <Text bold>
                Total
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data.totalPrice}</Text>
            </ListDes>
          </ListItem>
        </TotalAmount>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default OrderReceived;
