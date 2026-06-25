import { motion } from "framer-motion";
import { useState } from "react";
import {
  Coins,
  Crown,
  Gem,
  Heart,
  Award,
  Building2,
  Ticket,
  X,
  ShoppingCart,
  Triangle,
  Zap,
} from "lucide-react";

type Vip = {
  id: string;
  name: string;
  rank: string;
  price: string;
  euro: string;
  icon: typeof Crown;
  accent: string;
  ring: string;
  benefits: string[];
};

const vips: Vip[] = [
  {
    id: "prata",
    name: "Prata",
    rank: "TIER I",
    price: "5000",
    euro: "5€",
    icon: Award,
    accent: "from-slate-400 to-slate-600",
    ring: "border-slate-400/40",
    benefits: ["Benefícios exclusivos VIP", "Tag VIP no Discord", "Vantagens económicas básicas"],
  },
  {
    id: "ouro",
    name: "Ouro",
    rank: "TIER II",
    price: "9000",
    euro: "9€",
    icon: Crown,
    accent: "from-amber-300 to-orange-500",
    ring: "border-amber-400/50",
    benefits: ["Tudo do Prata", "Vantagens económicas avançadas", "Acesso prioritário a eventos"],
  },
  {
    id: "diamond",
    name: "Diamond",
    rank: "TIER III",
    price: "12000",
    euro: "12€",
    icon: Gem,
    accent: "from-cyan-300 to-blue-500",
    ring: "border-cyan-400/50",
    benefits: ["Tudo do Ouro", "Recompensas premium semanais", "Skins exclusivas"],
  },
  {
    id: "ruby",
    name: "Ruby",
    rank: "TIER MAX",
    price: "15000",
    euro: "15€",
    icon: Heart,
    accent: "from-rose-500 to-red-700",
    ring: "border-primary/70",
    benefits: ["Tudo do Diamond", "Estatuto máximo do servidor", "Privilégios irrestritos"],
  },
];

export function ShopTab() {
  const [selected, setSelected] = useState<Vip | null>(null);

  return (
    <section className="space-y-10">
      {/* Coin HUD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass relative overflow-hidden p-8 clip-corner"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-5">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="relative flex h-20 w-20 items-center justify-center bg-gradient-apex shadow-apex clip-corner"
            >
              <Coins className="h-9 w-9 text-primary-foreground" />
            </motion.div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Currency · APX
              </div>
              <h2 className="mt-1 font-display text-3xl font-black uppercase">
                Sistema de <span className="text-gradient-apex">Coins</span>
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Moeda oficial do servidor — usa nos VIPs e produtos da loja.
              </p>
            </div>
          </div>
          <div className="border-l-2 border-primary px-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Câmbio fixo
            </div>
            <div className="font-display text-4xl font-black text-gradient-apex sm:text-5xl">
              1000 = 1€
            </div>
          </div>
        </div>
      </motion.div>

      {/* VIP grid */}
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Arsenal · Ranks Disponíveis
        </div>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Sobe ao <span className="text-gradient-apex">topo</span></h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vips.map((vip, i) => (
            <motion.article
              key={vip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden border-2 ${vip.ring} bg-card/70 p-6 backdrop-blur transition-all hover:shadow-apex clip-corner`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${vip.accent}`} />
              <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${vip.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-30`} />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    {vip.rank}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{i + 1}/04
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center bg-gradient-to-br ${vip.accent} clip-corner`}>
                    <vip.icon className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="font-display text-2xl font-black uppercase">{vip.name}</h3>
                </div>

                <div className="mt-5 border-y border-primary/20 py-3">
                  <p className="font-display text-3xl font-black text-gradient-apex">
                    {vip.price}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Coins · ≈ {vip.euro}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {vip.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <Triangle className="mt-1 h-2.5 w-2.5 shrink-0 fill-primary text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(vip)}
                  className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden bg-gradient-apex py-3 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-apex clip-corner"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Adquirir
                  <span className="animate-shimmer absolute inset-0" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Organization + Support */}
      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass relative overflow-hidden p-7 clip-corner"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center bg-gradient-apex text-primary-foreground clip-corner">
              <Building2 className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-black uppercase">Criar Organização</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Cria a tua própria facção com base personalizada e identidade única.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {["Base personalizada", "Garagem própria", "Skins exclusivas", "Configuração custom"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2 border border-primary/20 bg-card/40 px-3 py-2 clip-corner">
                    <Triangle className="h-2.5 w-2.5 fill-primary text-primary" />
                    {i}
                  </li>
                )
              )}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-l-2 border-primary bg-primary/5 p-3 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              Valor negociável via ticket com a Administração.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass relative overflow-hidden p-7 clip-corner"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center bg-gradient-apex text-primary-foreground clip-corner">
              <Ticket className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-black uppercase">Como comprar</h3>
            <p className="mt-2 text-sm text-muted-foreground">Processo rápido e seguro via Discord.</p>
            <ol className="mt-4 space-y-3">
              {[
                "Abre um ticket no Discord oficial",
                "Indica o produto pretendido",
                "Efetua o pagamento conforme indicação",
                "Recebe os teus benefícios no servidor",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-3 border border-primary/20 bg-card/40 px-3 py-2 clip-corner">
                  <span className="font-mono text-xs font-bold text-primary">0{i + 1}</span>
                  <span className="text-sm">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>

      <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Obrigado por apoiares o <span className="text-primary">APEX ROLEPLAY</span>
      </p>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-md p-8 clip-corner"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-primary"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                {selected.rank}
              </div>
              <h3 className="mt-2 font-display text-3xl font-black uppercase">{selected.name}</h3>
              <p className="mt-3 font-display text-4xl font-black text-gradient-apex">
                {selected.price}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Coins · ≈ {selected.euro}
              </p>
            </div>
            <div className="mt-6 border-l-2 border-primary bg-primary/5 p-4 text-sm">
              <p className="font-display font-bold uppercase tracking-widest text-primary">
                Finalizar compra
              </p>
              <ol className="mt-2 space-y-1.5 text-foreground/85">
                <li>1. Abre um ticket no Discord</li>
                <li>2. Indica que queres adquirir <strong>{selected.name}</strong></li>
                <li>3. Efetua o pagamento conforme indicação</li>
                <li>4. Recebe os benefícios no servidor</li>
              </ol>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 bg-gradient-apex py-3 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-apex clip-corner"
            >
              <Ticket className="h-4 w-4" />
              Abrir Ticket
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
