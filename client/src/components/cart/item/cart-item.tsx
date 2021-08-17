import React from 'react';
import {Counter} from '../counter/counter';
import {CloseIcon} from '@/assets/icons/CloseIcon';
import {Image, Information, ItemBox, Name, Price, RemoveButton, Total, Weight,} from './cart-item.style';

interface Props {
    data: any;
    onDecrement: () => void;
    onIncrement: () => void;
    onRemove: () => void;
}

export const CartItem: React.FC<Props> = ({
                                              data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { name, thumbImage, price, salePrice, unit, countInStock } = data;
  const displayPrice = salePrice ? salePrice : price;
  return (
    <ItemBox>
      <Counter
        value={data.cartQuantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      <Image src={thumbImage} />
      <Information>
        <Name>{name}</Name>
        <Price>
          {displayPrice}
        </Price>
        <Weight>
          {/*{quantity} X {unit}*/}
        </Weight>
      </Information>
      <Total>
        {/*{(quantity * displayPrice).toFixed(2)}*/}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
