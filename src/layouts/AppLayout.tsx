import React, { useState } from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [_theme, _setTheme] = useState<"dark" | "vibrant">("dark");

  const DarkTheme = () => (
    <div className="fixed inset-0 z-0 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-gray-800/10 via-transparent to-slate-800/15 animate-pulse"
          style={{ animationDuration: "12s" }}
        />
      </div>

      {/* Burbujas flotantes */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 -right-40 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-400/4 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "10s", animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 left-1/5 w-64 h-64 bg-slate-400/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "7s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/5 w-48 h-48 bg-gray-300/6 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "9s", animationDelay: "5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/4 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-40 h-40 bg-slate-300/5 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "11s", animationDelay: "4s" }}
        />
      </div>

      {/* Partículas */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-ping"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: `rgba(156, 163, 175, ${
                0.2 + Math.random() * 0.3
              })`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay final */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
  // @ts-ignore
  const VibrantTheme = () => (
    <div className="fixed inset-0 z-0 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-900 to-violet-950">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-purple-800/25 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* Burbujas coloridas */}
      <div className="absolute inset-0">
        <div
          className="absolute top-16 -right-36 w-88 h-88 bg-purple-500/12 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute -bottom-28 -left-28 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "9s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 left-1/6 w-56 h-56 bg-indigo-400/10 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-violet-500/12 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "4s" }}
        />
      </div>

      {/* Partículas coloridas */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const colors = [
            "rgba(168,85,247,0.3)",
            "rgba(236,72,153,0.3)",
            "rgba(99,102,241,0.3)",
            "rgba(139,92,246,0.3)",
            "rgba(34,211,238,0.3)",
          ];
          return (
            <div
              key={i}
              className="absolute rounded-full animate-ping"
              style={{
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          );
        })}
      </div>

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-purple-950/8" />
    </div>
  );

  return (
    <div className=" w-full flex flex-col">
      {/* Fondo */}
      <DarkTheme />

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 w-full">{children}</main>
    </div>
  );
};

export default AppLayout;
