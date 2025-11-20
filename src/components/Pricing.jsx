import { useState, useMemo } from 'react';

export default function Pricing() {
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'annual'

  const basePlans = [
    {
      name: 'Starter',
      monthly: 99,
      features: ['Chatbot base', 'Ticket essenziali', 'Email automatiche']
    },
    {
      name: 'Clinic',
      monthly: 199,
      features: ['Chatbot avanzato', 'Priorità & SLA', 'Calendario + Sheets']
    },
    {
      name: 'Enterprise',
      monthly: null,
      features: ['Sicurezza avanzata', 'SSO & ruoli', 'Supporto dedicato']
    }
  ];

  const plans = useMemo(() => {
    return basePlans.map((p) => {
      if (p.monthly === null) {
        return { ...p, priceLabel: 'Su richiesta', subLabel: '' };
      }
      if (billing === 'monthly') {
        return { ...p, priceLabel: `${p.monthly}€/mese`, subLabel: '' };
      }
      // annual: x12 with 10% discount
      const annual = p.monthly * 12 * 0.9;
      const rounded = Math.round(annual); // show whole euros
      return { ...p, priceLabel: `${rounded}€/anno`, subLabel: 'Risparmi il 10%' };
    });
  }, [billing]);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(139,125,255,0.18),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Piani</h2>
            <p className="mt-2 text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>Scegli la fatturazione mensile o annuale (10% di sconto).</p>
          </div>

          <div className="flex items-center gap-2 bg-[#11131b]/80 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${billing === 'monthly' ? 'bg-[#8b7dff] text-white' : 'text-[#d0d4f6] hover:text-white'}`}
            >
              Mensile
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${billing === 'annual' ? 'bg-[#8b7dff] text-white' : 'text-[#d0d4f6] hover:text-white'}`}
            >
              Annuale
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-[#11131b]/80 border border-white/10 p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-white text-xl font-semibold" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{p.name}</div>
                <div className="text-[#bebfff] font-semibold">
                  {p.priceLabel}
                </div>
              </div>
              {p.subLabel && (
                <div className="mt-1 text-xs text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>{p.subLabel}</div>
              )}
              <ul className="mt-4 space-y-2">
                {p.features.map((pt) => (
                  <li key={pt} className="text-[#d0d4f6] text-sm" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>• {pt}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contatti" className="inline-flex items-center justify-center w-full px-4 py-2 rounded-xl bg-[#8b7dff] text-white font-semibold hover:brightness-110 transition">
                  {p.name === 'Enterprise' ? 'Contattaci' : 'Inizia ora'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
