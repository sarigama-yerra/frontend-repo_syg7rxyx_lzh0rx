export default function FAQ() {
  const faqs = [
    {
      q: 'Si integra con il mio gestionale?',
      a: 'Possiamo collegarci via API o connettori standard. Valutiamo insieme il flusso migliore.'
    },
    {
      q: 'Come gestite privacy e sicurezza?',
      a: 'Dati cifrati in transito e a riposo, accessi con ruoli, log e controlli periodici.'
    },
    {
      q: 'Quanto tempo serve per partire?',
      a: 'Setup tipico in 3-5 giorni lavorativi con template pronti per cliniche e studi.'
    },
    {
      q: 'È possibile una prova pilota?',
      a: 'Sì, attiviamo un pilot su un reparto o singolo studio per valutare benefici e metriche.'
    },
    {
      q: 'Serve formazione al personale?',
      a: 'Forniamo guide brevi e training remoto: l’interfaccia è semplice e minimale.'
    }
  ];

  return (
    <section className="relative py-20">
      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>FAQ</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden bg-[#0f1115]/60">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-[#121523] p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-medium" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{f.q}</span>
                <span className="text-[#bebfff]">+</span>
              </summary>
              <p className="mt-2 text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
