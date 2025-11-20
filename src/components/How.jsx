export default function How() {
  const steps = [
    { label: 'Paziente', desc: 'Invia richiesta via chat/sito/WhatsApp.' },
    { label: 'Chatbot', desc: 'Comprende, chiede info e qualifica.' },
    { label: 'Ticket', desc: 'Crea ticket con priorità e assegnazione.' },
    { label: 'Calendario', desc: 'Propone slot e aggiorna l’agenda.' },
    { label: 'Report', desc: 'Raccoglie dati e mostra trend.' },
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(190,191,255,0.12),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Come funziona</h2>
        <div className="grid grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.label} className="relative rounded-2xl p-5 bg-[#0f1115]/60 border border-white/10 text-center">
              <div className="text-sm text-[#bebfff] mb-1">{String(i + 1).padStart(2, '0')}</div>
              <div className="text-white font-semibold" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{s.label}</div>
              <div className="mt-2 text-xs text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>{s.desc}</div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#8b7dff] to-[#d0d4f6]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
