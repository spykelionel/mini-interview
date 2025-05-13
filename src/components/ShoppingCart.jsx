import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart)
      : {
          items: [],
          discount: 0,
          total: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.id === item.id);
      const newItems = existingItem
        ? prevCart.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prevCart.items, { ...item, quantity: 1 }];

      return calculateCart(newItems, prevCart.discount);
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== itemId);
      return calculateCart(newItems, prevCart.discount);
    });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 0) return;

    setCart((prevCart) => {
      const newItems = prevCart.items
        .map((item) => (item.id === itemId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);

      return calculateCart(newItems, prevCart.discount);
    });
  };

  const applyDiscount = (discountPercentage) => {
    setCart((prevCart) => ({
      ...prevCart,
      discount: Math.min(Math.max(discountPercentage, 0), 1),
      total: calculateTotal(prevCart.items, discountPercentage),
    }));
  };

  const calculateTotal = (items, discount) => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return subtotal * (1 - discount);
  };

  const calculateCart = (items, discount) => ({
    items,
    discount,
    total: calculateTotal(items, discount),
  });

  // Sample products for testing
  const sampleProducts = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart Example</h2>

      {/* Products Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Available Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sampleProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
        {cart.items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-600">${item.price} each</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Discount Section */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Discount ({cart.discount * 100}%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={cart.discount * 100}
                onChange={(e) => applyDiscount(Number(e.target.value) / 100)}
                className="w-full"
              />
            </div>

            {/* Total Section */}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-xl font-bold">
                  ${cart.total.toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
