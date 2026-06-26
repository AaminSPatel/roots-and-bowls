'use client';
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DietaryTag from "@/components/DietaryTag";
import MacroBar from "@/components/MacroBar";
import { menuCategories } from "@/lib/siteData";
import { HiPlus, HiMinus, HiTrash, HiShoppingCart } from "react-icons/hi";

const allItems = menuCategories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.label }))
);

const dietaryFilters = ["All", "V", "VG", "GF", "DF", "LF"];

export default function OrderPage() {
  const [cart, setCart] = useState({});
  const [filter, setFilter] = useState("All");
  const [mode, setMode] = useState("delivery");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("upi");
  const [submitted, setSubmitted] = useState(false);

  const filteredItems = useMemo(() =>
    allItems.filter((i) => filter === "All" || i.tags.includes(filter)),
    [filter]
  );

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const removeFromCart = (id) => setCart((c) => { if (!c[id]) return c; const n = { ...c }; if (n[id] <= 1) delete n[id]; else n[id]--; return n; });
  const clearCart = () => setCart({});

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    item: allItems.find((i) => i.id === id),
    qty,
  })).filter((e) => e.item);

  const subtotal = cartItems.reduce((sum, { item, qty }) => sum + item.price * qty, 0);
  const deliveryFee = mode === "delivery" && subtotal > 0 ? (subtotal >= 500 ? 0 : 49) : 0;
  const total = subtotal + deliveryFee;

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--warm-white)" }}>
          <div className="max-w-md w-full text-center rounded-2xl p-10" style={{ boxShadow: "0 8px 40px rgba(44,59,42,0.1)" }}>
            <div className="text-6xl mb-4">🌿</div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>Order Placed!</h2>
            <p className="text-sm mb-2" style={{ color: "var(--olive-light)" }}>
              Total: <strong style={{ color: "var(--terracotta)" }}>₹{total}</strong> via {payment.toUpperCase()}
            </p>
            <p className="text-sm" style={{ color: "var(--olive-light)" }}>
              {mode === "delivery" ? `Delivering to: ${address}` : "Ready for pickup in 20–25 minutes"}
            </p>
            <p className="text-xs mt-4" style={{ color: "var(--olive-light)" }}>
              (Payment gateway redirect would happen here in production)
            </p>
            <button onClick={() => { setSubmitted(false); clearCart(); }}
              className="mt-6 px-6 py-2.5 rounded-full font-semibold text-white"
              style={{ background: "var(--terracotta)" }}>
              Order Again
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-28 pb-10 text-center watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Order Online</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            What Are You Craving?
          </h1>
          <p className="text-sm" style={{ color: "var(--olive-light)" }}>Free delivery on orders above ₹500. Average time: 30–40 min.</p>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Menu */}
          <div>
            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--olive-light)" }}>Filter:</span>
              {dietaryFilters.map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className="px-3 py-1 rounded-full text-xs font-semibold border transition-all"
                  style={filter === f
                    ? { background: "var(--olive)", color: "white", borderColor: "var(--olive)" }
                    : { background: "transparent", color: "var(--olive-light)", borderColor: "var(--sand)" }
                  }>
                  {f === "All" ? "All Items" : f}
                </button>
              ))}
            </div>

            {filteredItems.length === 0 ? (
              <p className="text-sm py-10 text-center" style={{ color: "var(--olive-light)" }}>No items match this filter.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredItems.map((item) => {
                  const qty = cart[item.id] ?? 0;
                  return (
                    <div key={item.id} className="rounded-xl bg-white flex gap-4 p-3 items-center"
                      style={{ boxShadow: "0 2px 12px rgba(44,59,42,0.06)" }}>
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-sm leading-snug" style={{ color: "var(--olive)" }}>{item.name}</h3>
                          <span className="font-bold text-sm shrink-0" style={{ color: "var(--terracotta)" }}>₹{item.price}</span>
                        </div>
                        <div className="flex gap-1 flex-wrap mb-1.5">
                          {item.tags.map((t) => <DietaryTag key={t} tag={t} />)}
                        </div>
                        <MacroBar calories={item.calories} protein={item.protein} carbs={item.carbs} fat={item.fat} compact />
                      </div>
                      <div className="shrink-0">
                        {qty === 0 ? (
                          <button onClick={() => addToCart(item.id)}
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90"
                            style={{ background: "var(--sage)" }}>
                            <HiPlus size={16} />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 rounded-full flex items-center justify-center border transition-all"
                              style={{ borderColor: "var(--sand)", color: "var(--olive)" }}>
                              <HiMinus size={12} />
                            </button>
                            <span className="font-bold text-sm w-5 text-center" style={{ color: "var(--olive)" }}>{qty}</span>
                            <button onClick={() => addToCart(item.id)}
                              className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                              style={{ background: "var(--sage)" }}>
                              <HiPlus size={12} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cart & Checkout */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl bg-white p-5" style={{ boxShadow: "0 8px 40px rgba(44,59,42,0.1)" }}>
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: "var(--olive)" }}>
                <HiShoppingCart style={{ color: "var(--sage)" }} />
                Your Cart {cartCount > 0 && <span className="text-sm font-normal" style={{ color: "var(--olive-light)" }}>({cartCount} items)</span>}
              </h2>

              {/* Delivery / Pickup toggle */}
              <div className="flex rounded-xl overflow-hidden border mb-4" style={{ borderColor: "var(--sand)" }}>
                {["delivery", "pickup"].map((m) => (
                  <button key={m} onClick={() => setMode(m)}
                    className="flex-1 py-2 text-sm font-semibold capitalize transition-all"
                    style={mode === m ? { background: "var(--sage)", color: "white" } : { color: "var(--olive-light)", background: "transparent" }}>
                    {m === "delivery" ? "🚴 Delivery" : "🏃 Pickup"}
                  </button>
                ))}
              </div>

              {/* Cart items */}
              {cartItems.length === 0 ? (
                <p className="text-sm text-center py-6" style={{ color: "var(--olive-light)" }}>
                  Add items from the menu to get started 🌱
                </p>
              ) : (
                <div className="flex flex-col gap-2 mb-4">
                  {cartItems.map(({ item, qty }) => (
                    <div key={item.id} className="flex items-center gap-2 text-sm">
                      <span className="flex-1 truncate" style={{ color: "var(--olive)" }}>{item.name}</span>
                      <span style={{ color: "var(--olive-light)" }}>×{qty}</span>
                      <span className="font-semibold" style={{ color: "var(--olive)" }}>₹{item.price * qty}</span>
                      <button onClick={() => { const n = { ...cart }; delete n[item.id]; setCart(n); }}>
                        <HiTrash size={13} style={{ color: "var(--olive-light)" }} />
                      </button>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-1 flex flex-col gap-1 text-sm" style={{ borderColor: "var(--sand)" }}>
                    <div className="flex justify-between" style={{ color: "var(--olive-light)" }}>
                      <span>Subtotal</span><span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between" style={{ color: "var(--olive-light)" }}>
                      <span>Delivery {deliveryFee === 0 && subtotal > 0 ? "(Free!)" : ""}</span>
                      <span>{deliveryFee === 0 && subtotal > 0 ? "₹0" : mode === "delivery" ? "₹49" : "₹0"}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base mt-1" style={{ color: "var(--olive)" }}>
                      <span>Total</span><span style={{ color: "var(--terracotta)" }}>₹{total}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Address if delivery */}
              {mode === "delivery" && (
                <div className="mb-3">
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--olive)" }}>Delivery Address</label>
                  <textarea rows={2} placeholder="Full address with flat/building…"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border text-sm outline-none resize-none"
                    style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "var(--warm-white)" }} />
                </div>
              )}

              {/* Payment */}
              <div className="mb-4">
                <p className="text-xs font-medium mb-2" style={{ color: "var(--olive)" }}>Payment Method</p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: "upi", label: "UPI" },
                    { id: "card", label: "Card" },
                    { id: "cod", label: "Cash on Delivery" },
                  ].map((p) => (
                    <button key={p.id} onClick={() => setPayment(p.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
                      style={payment === p.id
                        ? { background: "var(--olive)", color: "white", borderColor: "var(--olive)" }
                        : { borderColor: "var(--sand)", color: "var(--olive-light)", background: "transparent" }
                      }>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "var(--terracotta)" }}>
                {cartItems.length === 0 ? "Add items to checkout" : `Place Order · ₹${total}`}
              </button>
              <p className="text-xs text-center mt-2" style={{ color: "var(--olive-light)" }}>
                You'll be redirected to {payment === "cod" ? "confirm your order" : "our payment gateway"}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}