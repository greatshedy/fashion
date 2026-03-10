import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorites: (item) => {
        const exists = get().favorites.some((f) => f.id === item.id);
        if (!exists) {
          set((state) => ({ favorites: [...state.favorites, item] }));
        }
      },

      removeFromFavorites: (id) => {
        set((state) => ({
          favorites: state.favorites.filter((f) => f.id !== id),
        }));
      },

      toggleFavorite: (item) => {
        const exists = get().favorites.some((f) => f.id === item.id);
        if (exists) {
          get().removeFromFavorites(item.id);
        } else {
          get().addToFavorites(item);
        }
      },

      isFavorited: (id) => get().favorites.some((f) => f.id === id),

      clearFavorites: () => set({ favorites: [] }),

      favoritesCount: () => get().favorites.length,
    }),
    {
      name: "alphalli-favorites", // localStorage key
    },
  ),
);

export default useFavoritesStore;

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      // Add item — if already in cart, increment quantity
      addToCart: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
                : i,
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: item.quantity ?? 1 }],
          }));
        }
      },

      // Remove item entirely
      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      // Set an exact quantity — removes item if quantity drops to 0
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }));
      },

      // Increment quantity by 1
      incrementQuantity: (id) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        }));
      },

      // Decrement quantity by 1 — removes item if it hits 0
      decrementQuantity: (id) => {
        const item = get().items.find((i) => i.id === id);
        if (!item) return;
        if (item.quantity <= 1) {
          get().removeFromCart(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
          ),
        }));
      },

      // Check if an item is in the cart
      isInCart: (id) => get().items.some((i) => i.id === id),

      // Get a single item
      getItem: (id) => get().items.find((i) => i.id === id),

      // Total number of items (sum of all quantities)
      cartCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      // Subtotal price (item.price must be a number)
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      // Empty the cart
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "alphalli-cart", // localStorage key
    },
  ),
);

// export default useCartStore;

export const useProductStore = create((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));
