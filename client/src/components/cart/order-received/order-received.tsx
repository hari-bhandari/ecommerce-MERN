import React from 'react';
import Link from 'next/link';
import OrderReceivedWrapper, {
  OrderReceivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  Text,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
} from './order-received.style';

type OrderReceivedProps = {
  title?:string
};

const OrderReceived: React.FunctionComponent<OrderReceivedProps> = ({title}) => {
  return (
    <OrderReceivedWrapper>
      <OrderReceivedContainer>
        <Link href="/">
          <a className="home-btn">
            Back to Home          </a>
        </Link>

        <OrderInfo>
          <BlockTitle>
            {title?title:'Order Received'}
          </BlockTitle>

          <Text>
            {!title&&'Thank you. Your order has been received'}
          </Text>

          <InfoBlockWrapper>
            <InfoBlock>
              <Text bold className="title">
                Order Number
              </Text>
              <Text>1444</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                Date              </Text>
              <Text>March 14, 2019</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                Total              </Text>
              <Text>$10,944.00</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                Payment Method
              </Text>
              <Text>
                Cash on delivery
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
              <Text>1.00pm 10/12/19</Text>
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
                1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North
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
              <Text>$10,864.00</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                Payment Method
              </Text>
            </ListTitle>
            <ListDes>
              <Text>CARD</Text>
            </ListDes>
          </ListItem>



          <ListItem>
            <ListTitle>
              <Text bold>
                Total
              </Text>
            </ListTitle>
            <ListDes>
              <Text>$10,874.00</Text>
            </ListDes>
          </ListItem>
        </TotalAmount>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default OrderReceived;