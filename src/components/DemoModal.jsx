import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, ShieldCheck, Search, Filter, DollarSign, Layers, ArrowRight, RefreshCw, BarChart2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function DemoModal({ projectId, onClose }) {
  const project = projectsData.find(p => p.id === projectId);
  
  // ApexCart Storefront State
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([
    { id: 1, name: "Minimalist Wireless Headphones", price: 199, qty: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" }
  ]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Nexus Admin Dashboard State
  const [adminTab, setAdminTab] = useState('deposits');
  const [deposits, setDeposits] = useState([
    { id: 'DEP-8021', merchant: 'Xmatiq Merchant A', amount: '$4,500.00', status: 'Completed', date: '2026-08-24' },
    { id: 'DEP-8022', merchant: 'Retail Storefront B', amount: '$1,250.00', status: 'Pending Review', date: '2026-08-24' },
    { id: 'DEP-8023', merchant: 'Global Direct Inc.', amount: '$8,900.00', status: 'Completed', date: '2026-08-23' }
  ]);
  const [newDeposit, setNewDeposit] = useState({ merchant: '', amount: '' });
  const [depositMsg, setDepositMsg] = useState('');

  if (!project) return null;

  // Cart Functions
  const addToCart = (product) => {
    setCheckoutComplete(false);
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = Math.max(0, subtotal - discount);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'DAKSH10') {
      setDiscount(subtotal * 0.1);
    } else {
      alert('Invalid promo code. Try "DAKSH10" for 10% off!');
    }
  };

  // Add Deposit Handler
  const handleAddDeposit = (e) => {
    e.preventDefault();
    if (!newDeposit.merchant || !newDeposit.amount) return;
    const newEntry = {
      id: `DEP-${Math.floor(1000 + Math.random() * 9000)}`,
      merchant: newDeposit.merchant,
      amount: `$${parseFloat(newDeposit.amount).toFixed(2)}`,
      status: 'Completed',
      date: new Date().toISOString().split('T')[0]
    };
    setDeposits([newEntry, ...deposits]);
    setNewDeposit({ merchant: '', amount: '' });
    setDepositMsg('✅ Deposit log added successfully to state!');
    setTimeout(() => setDepositMsg(''), 3000);
  };

  const filteredProducts = project.demoProducts ? project.demoProducts.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  }) : [];

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0c101d',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0, 242, 254, 0.2)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header Bar */}
        <div 
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ padding: '6px 12px', borderRadius: '20px', background: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-cyan)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              LIVE INTERACTIVE DEMO
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{project.title}</h3>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>

          {/* STOREFRONT DEMO MODE */}
          {project.demoType === 'storefront' && (
            <div>
              {/* Demo Controls Bar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                
                {/* Search */}
                <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                  <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input 
                    type="text"
                    placeholder="Search demo products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px 10px 38px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {/* Category Pills */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['All', 'Audio', 'Wearables', 'Tech Gear'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)',
                        background: activeCategory === cat ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.03)',
                        color: activeCategory === cat ? '#07090e' : 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                
                {/* Products Area */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                  {filteredProducts.map((p) => (
                    <div 
                      key={p.id}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '14px',
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        justify: 'space-between'
                      }}
                    >
                      <div>
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '10px', marginBottom: '12px' }} 
                        />
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{p.category}</span>
                        <h4 style={{ fontSize: '0.925rem', fontWeight: 700, margin: '4px 0 8px 0', lineHeight: 1.3 }}>{p.name}</h4>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>${p.price}</span>
                        <button
                          onClick={() => addToCart(p)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: 'var(--accent-cyan)',
                            color: '#07090e',
                            border: 'none',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Plus size={14} /> Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Drawer Panel */}
                <div 
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                        <ShoppingBag size={18} color="var(--accent-cyan)" />
                        <span>Shopping Cart State ({cart.length})</span>
                      </div>
                    </div>

                    {cart.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-dim)' }}>
                        Cart is empty. Click "+ Add" on items above!
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '220px', overflowY: 'auto' }}>
                        {cart.map((item) => (
                          <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                            <div>
                              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.name}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>${item.price} x {item.qty}</div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <button onClick={() => updateQty(item.id, -1)} style={{ width: '22px', height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer' }}>-</button>
                              <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.qty}</span>
                              <button onClick={() => updateQty(item.id, 1)} style={{ width: '22px', height: '22px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer' }}>+</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Summary & Checkout */}
                  {cart.length > 0 && (
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <input 
                          type="text" 
                          placeholder="Try code: DAKSH10" 
                          value={promoCode} 
                          onChange={(e) => setPromoCode(e.target.value)}
                          style={{ flex: 1, padding: '6px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem' }}
                        />
                        <button onClick={applyPromo} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', color: '#fff', fontSize: '0.8rem', cursor: 'pointer' }}>Apply</button>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--accent-emerald)', marginBottom: '4px' }}>
                          <span>Discount (10%):</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>
                        <span>Total:</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>${total.toFixed(2)}</span>
                      </div>

                      {checkoutComplete ? (
                        <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-emerald)', borderRadius: '8px', color: 'var(--accent-emerald)', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700 }}>
                          🎉 Order Simulated Successfully! State reset.
                        </div>
                      ) : (
                        <button 
                          onClick={() => setCheckoutComplete(true)}
                          className="btn-primary" 
                          style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}
                        >
                          Checkout State Demo <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  )}

                </div>

              </div>
            </div>
          )}

          {/* DASHBOARD DEMO MODE */}
          {project.demoType === 'dashboard' && (
            <div>
              {/* Top Stats Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>TOTAL REVENUE</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', margin: '4px 0' }}>{project.demoStats.totalRevenue}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>+14.2% vs last month</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>DEPOSIT LOGS</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-purple)', margin: '4px 0' }}>{deposits.length} Records</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>Module Active</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>PENDING ORDERS</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', margin: '4px 0' }}>{project.demoStats.pendingOrders}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Action required</div>
                </div>
              </div>

              {/* Add Deposit Module Form */}
              <div style={{ background: 'rgba(0, 242, 254, 0.03)', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '14px', padding: '20px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Plus size={16} color="var(--accent-cyan)" /> Deposit Management Module (Live Component Input)
                </h4>

                <form onSubmit={handleAddDeposit} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <input 
                    type="text" 
                    placeholder="Merchant / Client Name" 
                    value={newDeposit.merchant} 
                    onChange={(e) => setNewDeposit({ ...newDeposit, merchant: e.target.value })}
                    style={{ flex: 1, minWidth: '180px', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '8px', color: '#fff', fontSize: '0.875rem' }}
                    required
                  />
                  <input 
                    type="number" 
                    placeholder="Deposit Amount ($)" 
                    value={newDeposit.amount} 
                    onChange={(e) => setNewDeposit({ ...newDeposit, amount: e.target.value })}
                    style={{ width: '160px', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '8px', color: '#fff', fontSize: '0.875rem' }}
                    required
                  />
                  <button type="submit" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                    Log Deposit State
                  </button>
                </form>

                {depositMsg && (
                  <div style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--accent-emerald)' }}>
                    {depositMsg}
                  </div>
                )}
              </div>

              {/* Deposit History Table */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '20px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>Deposit Operations Log</h4>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                        <th style={{ padding: '10px' }}>LOG ID</th>
                        <th style={{ padding: '10px' }}>MERCHANT</th>
                        <th style={{ padding: '10px' }}>AMOUNT</th>
                        <th style={{ padding: '10px' }}>STATUS</th>
                        <th style={{ padding: '10px' }}>DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deposits.map((dep) => (
                        <tr key={dep.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '10px', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{dep.id}</td>
                          <td style={{ padding: '10px', fontWeight: 600 }}>{dep.merchant}</td>
                          <td style={{ padding: '10px', fontWeight: 700 }}>{dep.amount}</td>
                          <td style={{ padding: '10px' }}>
                            <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600, background: dep.status === 'Completed' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)', color: dep.status === 'Completed' ? 'var(--accent-emerald)' : '#f59e0b' }}>
                              {dep.status}
                            </span>
                          </td>
                          <td style={{ padding: '10px', color: 'var(--text-dim)' }}>{dep.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
