function Footer({ items }) {
  if (!items.length) {
    return <p className="no-items"> No items on the list</p>;
  }

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const itemsBought = items
    .filter((item) => item.bought)
    .reduce((sum, item) => sum + item.quantity, 0);

  const percentage = (itemsBought / totalQuantity) * 100;

  return (
    <footer className="status">
      <p className="total">Total Items: {totalQuantity}</p>
      <p className="total">Items Purchased: {itemsBought} </p>
      <p className="items">
        {percentage === 100 ? (
          <strong>Shopping Completed!</strong>
        ) : (
          `Shopping progress: ${Math.round(percentage)}%`
        )}
      </p>
    </footer>
  );
}

export default Footer;
