function List({ items, onToggleItems, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.bought}
              onChange={() => onToggleItems(item.id)}
            />
            {item.bought ? (
              <span className="line-through checked">
                {item.quantity} {item.description}{" "}
              </span>
            ) : (
              <span className="line-through">
                {item.quantity} {item.description}{" "}
              </span>
            )}
            <button onClick={() => onDeleteItems(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
