import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Triangle } from "lucide-react";

const sections = [
  {
    code: "01",
    title: "Compras",
    items: [
      "Todas as compras são finais.",
      "Ao efetuar o pagamento, o utilizador concorda com os termos da loja.",
      "O comprador é responsável por indicar corretamente o que quer comprar.",
    ],
  },
  {
    code: "02",
    title: "Reembolsos",
    items: [
      "Não são efetuados reembolsos após a entrega do produto.",
      "Problemas técnicos devem ser reportados via ticket.",
      "Tentativas de chargeback ou fraude resultam em banimento permanente.",
    ],
  },
  {
    code: "03",
    title: "VIPs",
    items: [
      "Os benefícios podem ser alterados para manter o equilíbrio do servidor.",
      "A compra de um VIP não garante imunidade a punições.",
      "Infrações resultam em sanções independentemente do rank adquirido.",
    ],
  },
  {
    code: "04",
    title: "Coins",
    items: [
      "As Coins não possuem valor monetário fora do servidor.",
      "Não podem ser convertidas novamente em dinheiro real.",
      "Apenas utilizáveis nos produtos disponibilizados pela Administração.",
    ],
  },
  {
    code: "05",
    title: "Organizações",
    items: [
      "Criação sujeita à aprovação da Administração.",
      "Bases, skins e garagens são negociadas via ticket.",
      "A Administração pode rejeitar pedidos fora da temática do servidor.",
    ],
  },
  {
    code: "06",
    title: "Alterações",
    items: [
      "A Administração pode alterar preços, benefícios e produtos sem aviso prévio.",
      "Alterações futuras não obrigam à compensação de compras anteriores.",
    ],
  },
  {
    code: "07",
    title: "Disponibilização",
    items: [
      "Os produtos são entregues assim que possível após confirmação do pagamento.",
      "Em períodos de elevada procura, o tempo de entrega poderá ser superior.",
    ],
  },
  {
    code: "08",
    title: "Aceitação",
    items: [
      "Ao efetuar uma compra na loja do APEX Roleplay, o utilizador confirma que leu, compreendeu e aceita todos os termos descritos.",
    ],
  },
];

export function TermsTab() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section className="glass relative overflow-hidden p-8 sm:p-12 clip-corner">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Protocols · Legal Framework
        </div>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">
          Termos & <span className="text-gradient-apex">Protocolos</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Ao efetuar qualquer compra na loja do APEX Roleplay, o comprador declara ter lido e
          aceite os seguintes termos.{" "}
          <span className="font-mono text-primary">// READ_BEFORE_PROCEED</span>
        </p>

        <div className="mt-8 space-y-2">
          {sections.map((s, i) => {
            const isOpen = open === s.code;
            return (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="border border-primary/20 bg-card/50 transition-colors hover:border-primary/50 clip-corner"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : s.code)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-primary">{s.code}</span>
                    <span className="h-6 w-px bg-primary/30" />
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                      {s.title}
                    </h3>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 border-t border-primary/15 px-5 py-4 text-sm text-foreground/85">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <Triangle className="mt-1 h-2.5 w-2.5 shrink-0 fill-primary text-primary" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 border-l-2 border-primary bg-primary/5 p-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-primary">{">"}</span> APEX_RP · DOC_V3.0 · LAST_UPDATE 2026-06
        </div>
      </div>
    </section>
  );
}
