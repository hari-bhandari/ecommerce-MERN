import React from 'react';
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
import {useSelector} from "react-redux";

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
    const {currency:{symbol}} = useSelector((state:any) => state.shopReducer);
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
