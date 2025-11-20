export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '79€/mese',
      points: ['Chatbot base', 'Ticket essenziali', 'Email automatiche']
    },
    {
      name: 'Clinic',
      price: '149€/mese',
      points: ['Chatbot avanzato', 'Priorità & SLA', 'Calendario + Sheets']
    },
    {
      name: 'Enterprise',
      price: 'Su richiesta',
      points: ['Sicurezza avanzata', 'SSO & ruoli', 'Supporto dedicato']
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(139,125,255,0.18),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Piani</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-[#11131b]/80 border border-white/10 p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-white text-xl font-semibold" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{p.name}</div>
                <div className="text-[#bebfff] font-semibold">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="text-[#d0d4f6] text-sm" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>• {pt}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contatti" className="inline-flex items-center justify-center w-full px-4 py-2 rounded-xl bg-[#8b7dff] text-white font-semibold hover:brightness-110 transition">
                  Inizia ora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
