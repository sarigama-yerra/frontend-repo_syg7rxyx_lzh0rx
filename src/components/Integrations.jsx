export default function Integrations() {
  const items = [
    { name: 'Google Sheets' },
    { name: 'Google Calendar' },
    { name: 'Gmail' },
  ];

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>Integrazioni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="rounded-2xl bg-[#141625]/80 border border-white/10 p-6 text-center hover:bg-[#1a1d2e]/80 transition-colors">
              <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-[#8b7dff] to-[#bebfff]" />
              <div className="text-white font-semibold" style={{fontFamily: 'General Sans, system-ui, sans-serif'}}>{it.name}</div>
              <div className="text-xs text-[#d0d4f6] mt-1" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>Setup in pochi minuti</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
