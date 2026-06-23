import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Triangle, Activity, Zap, Users, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/apex-logo.png.asset.json";
import { AboutTab } from "@/components/tabs/AboutTab";
import { ShopTab } from "@/components/tabs/ShopTab";
import { TermsTab } from "@/components/tabs/TermsTab";

const tabs = [
  { id: "about", label: "Intel", code: "01" },
  { id: "shop", label: "Arsenal VIP", code: "02" },
  { id: "terms", label: "Protocolos", code: "03" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const stats = [
  { icon: Users, label: "Jogadores", value: "200+", code: "PLR" },
  { icon: Activity, label: "Uptime", value: "99.9%", code: "SYS" },
  { icon: Zap, label: "Tickrate", value: "128hz", code: "NET" },
  { icon: Triangle, label: "Versão", value: "v3.0", code: "VER" },
];

export default function App() {
  const [active, setActive] = useState<TabId>("about");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("pt-PT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 z-0 grid-pattern opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 bg-gradient-apex opacity-10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] bg-primary/10 blur-[140px]" />
      </div>

      {/* Top status bar */}
      <div className="relative z-20 border-b border-primary/20 bg-background/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-emerald-400">ONLINE</span>
            </span>
            <span className="hidden sm:inline">// APEX_RP // PT-EU-01</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">LAT: 12ms</span>
            <span className="text-primary">{time}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:py-14">
        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
              className="relative mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 animate-pulse-glow rounded-3xl bg-gradient-apex opacity-40 blur-2xl" />
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl border border-primary/40" />
                <div className="absolute -inset-2 rounded-3xl border-t-2 border-primary" />
                <img
                  src={logoAsset.url}
                  alt="Apex Roleplay logo"
                  className="relative h-40 w-40 animate-float rounded-2xl object-cover shadow-apex sm:h-48 sm:w-48"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-apex px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground clip-tag">
                  RANK · APEX
                </span>
              </div>
            </motion.div>

            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
              >
                <Triangle className="h-3 w-3 fill-primary" />
                Servidor MTA · Portugal
              </motion.div>
              <h1 className="mt-5 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
                <span className="text-gradient-apex text-glow animate-flicker">APEX</span>
                <br />
                <span className="text-foreground/90">ROLEPLAY</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground lg:mx-0 sm:text-lg">
                Atinge o topo da cadeia. Constrói o teu legado numa cidade onde só os melhores
                sobrevivem.{" "}
                <span className="font-mono text-primary">// ASCEND_OR_FALL</span>
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
                <motion.a
                  href="#main"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden bg-gradient-apex px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-apex clip-corner"
                >
                  Entrar no servidor
                  <span className="animate-shimmer absolute inset-0" />
                </motion.a>
                <a
                  href="#main"
                  className="border border-primary/40 bg-card/40 px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-primary/10 clip-corner"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden border border-primary/20 bg-card/60 p-4 clip-corner"
              >
                <div className="absolute right-2 top-2 font-mono text-[9px] text-muted-foreground">
                  {s.code}/{String(i).padStart(2, "0")}
                </div>
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-2xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex justify-center"
          >
            <ChevronDown className="h-5 w-5 animate-bounce text-primary/60" />
          </motion.div>
        </motion.header>

        {/* TAB NAV */}
        <nav id="main" className="mt-10 flex justify-center">
          <div className="glass relative flex flex-wrap justify-center gap-1 p-1.5 clip-corner">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="relative px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest transition-colors sm:text-sm clip-corner"
              >
                {active === t.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-apex shadow-apex clip-corner"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 flex items-center gap-2 ${
                    active === t.id ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-70">{t.code}</span>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* MAIN */}
        <main className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {active === "about" && <AboutTab />}
              {active === "shop" && <ShopTab />}
              {active === "terms" && <TermsTab />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-primary/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <Triangle className="h-4 w-4 fill-primary text-primary" />
              <span className="font-display text-sm font-bold uppercase tracking-widest">
                Apex <span className="text-primary">Roleplay</span>
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              © 2026 · ALL RIGHTS RESERVED · BUILD 3.0.1
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
