function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#040d1a]">
      {/* Arkaplan grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow efektleri */}
      <div
        className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,240,255,0.07)', filter: 'blur(120px)' }}
      />
      <div
        className="fixed bottom-[-50px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(80,60,255,0.06)', filter: 'blur(120px)' }}
      />

      {/* Sayfa içeriği */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Layout;
