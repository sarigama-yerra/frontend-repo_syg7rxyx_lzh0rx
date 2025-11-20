import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f1115]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(139,125,255,0.25),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(190,191,255,0.2),transparent_45%)]" />

      {/* Top bar with logo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <img
          src="https://ibb.co/MxL7kz09"
          alt="NIMIRA logo"
          className="h-10 w-auto opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl leading-tight font-extrabold text-white tracking-tight" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>
            L’assistente silenzioso per la tua segreteria.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#d0d4f6]" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>
            Automazioni AI per rispondere ai pazienti, aprire ticket, salvare dati e gestire agenda.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contatti" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#8b7dff] text-white font-semibold shadow-[0_10px_40px_rgba(139,125,255,0.35)] hover:shadow-[0_12px_50px_rgba(139,125,255,0.5)] hover:-translate-y-0.5 transition-all">
              Prenota una demo
            </a>
            <span className="text-sm text-[#bebfff]">Senza impegno</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative h-[380px] md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-[#1f223c] to-[#141625] overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* soft gradient overlay to blend */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-40" />
          </div>

          {/* Floating 3D style card mockup */}
          <div className="absolute -bottom-6 -left-3 md:-left-10 w-[78%] md:w-[70%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-[#8b7dff22] p-4 rotate-[-2deg]">
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#8b7dff] to-[#bebfff]" />
              <div className="flex-1">
                <div className="h-3 w-24 rounded-md bg-white/20 mb-2" />
                <div className="h-2.5 w-48 rounded-md bg-white/10" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2.5 w-11/12 rounded-md bg-white/10" />
              <div className="h-2.5 w-10/12 rounded-md bg-white/10" />
              <div className="h-2.5 w-9/12 rounded-md bg-white/10" />
            </div>
          </div>

          {/* Mini chart */}
          <div className="absolute right-0 -bottom-10 md:-bottom-6 w-[52%] md:w-[46%] bg-[#12131a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#d0d4f6]">Ticket risolti</span>
              <span className="text-xs font-semibold text-[#bebfff]">+18%</span>
            </div>
            <div className="h-20 w-full grid grid-cols-12 gap-1 items-end">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-gradient-to-t from-[#8b7dff] to-[#d0d4f6] rounded-sm" style={{height: `${20 + Math.abs(Math.sin(i)) * 60}px`}} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
