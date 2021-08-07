import React, {useContext} from 'react';
import { Counter } from '../counter/counter';
import { CloseIcon } from '@/assets/icons/CloseIcon';
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from './cart-item.style';
import shopContext from "@/context/shop/shopContext";

interface Props {
  data: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}

export const TextCartItem: React.FC<Props> = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
    const shop=useContext(shopContext)
    const {currency:{symbol}}=shop
    const { name, price, salePrice, unit, quantity } = data;
  const displayPrice = salePrice ? salePrice : price;
  // const totalPrice = quantity * displayPrice;
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      {/* <Image src={image} /> */}
      <Information>
        <Name>{name}</Name>
      </Information>
      <Total>
        {symbol}
        {(quantity * displayPrice).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
