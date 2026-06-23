import { motion } from "framer-motion";
import {
  Car,
  Briefcase,
  Home,
  Users,
  Building2,
  Shield,
  Skull,
  Wrench,
  Target,
  Crosshair,
} from "lucide-react";

const pillars = [
  { icon: Shield, title: "Forças da Lei", desc: "PSP, GNR, INEM — protege ou sê protegido." },
  { icon: Skull, title: "Submundo", desc: "Cartéis, máfias, operações clandestinas." },
  { icon: Briefcase, title: "Negócios", desc: "Empresas, imobiliárias, mercado negro." },
  { icon: Wrench, title: "Ofícios", desc: "Mecânico, taxista, agricultor, contrabandista." },
];

const features = [
  { icon: Car, text: "200+ veículos personalizados", code: "VEH" },
  { icon: Target, text: "Economia equilibrada e viva", code: "ECO" },
  { icon: Users, text: "Organizações com base própria", code: "ORG" },
  { icon: Crosshair, text: "Combate realista e tático", code: "CBT" },
  { icon: Home, text: "Sistema imobiliário completo", code: "EST" },
  { icon: Building2, text: "Eventos semanais únicos", code: "EVT" },
];

export function AboutTab() {
  return (
    <section className="space-y-8">
      {/* Mission briefing */}
      <div className="glass relative overflow-hidden p-8 sm:p-12 clip-corner">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Mission Briefing · 01
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Bem-vindo ao <span className="text-gradient-apex">APEX</span>
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed text-foreground/85">
              <p>
                O <strong className="text-primary">APEX Roleplay</strong> é o servidor MTA português
                de próxima geração — construído para quem leva o roleplay a sério. Aqui, cada
                escolha pesa, cada aliança importa, e cada decisão pode levar-te ao topo ou ao
                fundo.
              </p>
              <p>
                Vais entrar numa cidade viva, com economia dinâmica, organizações ativas, forças da
                lei competentes e um submundo que nunca dorme. Constrói uma carreira honesta ou
                cria o teu próprio império criminoso — o caminho é teu.
              </p>
              <p className="rounded-lg border-l-2 border-primary bg-primary/5 p-4 font-mono text-sm">
                <span className="text-primary">{">"}</span> Sistemas exclusivos · Combate tático ·
                Eventos semanais · Staff dedicada · Tickrate 128hz
              </p>
            </div>

            <div className="space-y-3">
              {[
                { k: "FUNDADO", v: "2024" },
                { k: "JOGADORES", v: "200+" },
                { k: "ORGANIZAÇÕES", v: "25+" },
                { k: "STAFF ATIVA", v: "24/7" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="flex items-center justify-between border border-primary/20 bg-card/60 px-4 py-3 clip-corner"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </span>
                  <span className="font-display text-lg font-bold text-primary">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Factions · 02
        </div>
        <h3 className="mt-3 text-2xl font-black sm:text-3xl">Escolhe o teu lado</h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden border border-primary/20 bg-card/60 p-5 transition-all hover:border-primary/60 clip-corner"
            >
              <div className="absolute inset-0 bg-gradient-apex opacity-0 transition-opacity group-hover:opacity-10" />
              <p.icon className="relative h-8 w-8 text-primary" />
              <h4 className="relative mt-4 font-display text-lg font-bold uppercase tracking-wide">
                {p.title}
              </h4>
              <p className="relative mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="relative mt-4 font-mono text-[10px] text-primary/60">
                0{i + 1} / 04
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Systems · 03
        </div>
        <h3 className="mt-3 text-2xl font-black sm:text-3xl">Tecnologia de elite</h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 border border-primary/20 bg-card/50 px-4 py-3 clip-corner"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-gradient-apex text-primary-foreground clip-corner">
                <f.icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium">{f.text}</div>
              </div>
              <span className="font-mono text-[10px] text-primary/70">{f.code}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
