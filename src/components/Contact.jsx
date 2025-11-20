export default function Contact() {
  return (
    <section id="contatti" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,125,255,0.15),transparent_55%)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Pronto a vedere NIMIRA in azione?</h2>
        <p className="mt-3 text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>Prenota una demo gratuita: capiamo insieme obiettivi, integrazioni e tempi.</p>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-[#8b7dff] text-white font-semibold shadow-[0_10px_40px_rgba(139,125,255,0.35)] hover:shadow-[0_12px_50px_rgba(139,125,255,0.5)] hover:-translate-y-0.5 transition-all">
            Prenota una demo gratuita
          </a>
        </div>
        <p className="mt-4 text-xs text-[#bebfff]">Nessuna carta richiesta</p>
      </div>
    </section>
  );
}
