import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
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

  const clearCart = () => {
    setCart({
      items: [],
      discount: 0,
      total: 0,
    });
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyDiscount,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
