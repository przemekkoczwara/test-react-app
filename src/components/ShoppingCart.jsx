import { FaCartArrowDown } from 'react-icons/fa';

function ShoppingCart({ basket }) {
  const totalItems = basket.reduce((total, item) => total + item.count, 0);

  return (
    <div style={{ position: 'fixed', top: 50, left: 400 }}>
      <FaCartArrowDown size={50} />
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: 10,
            right: 50,
            fontSize: '20px',
            background: 'red',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}

export default ShoppingCart;
