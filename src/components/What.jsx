export default function What() {
  const features = [
    {
      title: 'Risposte automatiche',
      desc: 'Chatbot AI su sito e WhatsApp: triage richieste, risposte rapide, tono professionale.'
    },
    {
      title: 'Ticket organizzati',
      desc: 'Ogni conversazione apre un ticket con priorità, assegnatario e stato.'
    },
    {
      title: 'Google Sheet con dati ordinati',
      desc: 'Tutti i dati puliti in fogli strutturati: anagrafica, sintomi, preferenze, note.'
    },
    {
      title: 'Report di trend',
      desc: 'Andamenti settimanali su volumi, tempi di risposta e richieste ricorrenti.'
    }
  ];

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Cosa fa NIMIRA</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 bg-gradient-to-br from-[#1f223c] to-[#151826] border border-white/10">
              <div className="text-xl text-white font-semibold mb-2" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{f.title}</div>
              <p className="text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
