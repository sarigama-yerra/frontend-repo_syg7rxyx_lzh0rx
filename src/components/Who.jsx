export default function Who() {
  const items = [
    {
      title: 'Cliniche',
      desc: 'Riduci tempi di risposta e coordina più reparti con un flusso unico di ticket e calendari.'
    },
    {
      title: 'Studi medici',
      desc: 'Gestisci chiamate e messaggi con risposte automatiche, promemoria e raccolta dati pulita.'
    },
    {
      title: 'Fisioterapia',
      desc: 'Organizza le sedute, invia follow‑up e compila automaticamente i registri paziente.'
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,125,255,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Per chi è</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl bg-[#151826]/70 border border-white/10 p-6 hover:bg-[#1b1f33]/70 transition-colors">
              <div className="text-white text-xl font-semibold mb-3" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{it.title}</div>
              <p className="text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
