import React, { useState } from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [_theme, _setTheme] = useState<"dark" | "vibrant">("dark");

  // 🎨 Tema oscuro optimizado
  const DarkTheme = () => (
    <div className="fixed inset-0 z-0 w-full overflow-hidden">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/10 via-transparent to-slate-800/15 animate-fadeGradient" />
      </div>

      {/* Burbujas flotantes (menos, con blur más ligero) */}
      <div className="absolute inset-0">
        <div className="absolute top-10 -right-32 w-64 h-64 bg-white/5 rounded-full blur-xl animate-bounce-slow" />
        <div className="absolute -bottom-20 -left-24 w-72 h-72 bg-gray-400/5 rounded-full blur-xl animate-bounce-slower" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-slate-400/5 rounded-full blur-lg animate-bounce-slow" />
      </div>

      {/* Partículas (menos cantidad, más ligeras) */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-ping opacity-70"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              backgroundColor: "rgba(156,163,175,0.25)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay final */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );

  return (
    <div className="w-full flex flex-col">
      {/* Fondo */}
      <DarkTheme />

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 w-full">{children}</main>
    </div>
  );
};

export default AppLayout;
