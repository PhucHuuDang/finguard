import { ChevronDown } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/animations/reveal"
import { TitleSectionCommon } from "@/components/common/reuse-component"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "What is the Liquidity Candle Tool and its benefits?",
    answer:
      "This exclusive analytical tool helps you accurately identify the true money flow trends in the market. It finds optimal entry points with very tight Stop Loss (30 - 80 Pips) and high Take Profit targets (100 - 1,000 Pips). The WinRate stays consistently above 60%, offering an exceptional Risk/Reward ratio.",
  },
  {
    question: "How does the Signal Group operate daily?",
    answer:
      "The Finguard team provides continuous technical analysis and news updates. Every day, you will receive 2 to 8 VIP signals, with an expected average profit of 300 Pips/day. We maintain a transparent daily Excel tracking sheet and regularly host live trading sessions with investors.",
  },
  {
    question: "How much capital do I need for the Auto Trading Robot?",
    answer:
      "You can start experiencing the Robot with a minimum capital of $500 (standard recommendation is $1,000). The Robot automatically trades Gold and currency pairs, with a proven 7-month track record generating 0.5% to 5% daily profit. The maximum drawdown is 30% and is fully adjustable by the investor. Profit sharing fee is 30% per week.",
  },
  {
    question: "What is the risk management for Master Copytrade?",
    answer:
      "Our Master has 8 years of real battle experience and currently manages a $100,000 FTMO fund account. Safety principles apply: Trading only Gold, 100% of trades have a Stop Loss, and absolutely no holding negative trades overnight. It brings 1-5% profit per day with a 30% Max Drawdown. The minimum capital to copy is $2,000.",
  },
  {
    question: "Are there courses available for beginners?",
    answer:
      "Yes, we offer three levels. Basic: Foundational knowledge for complete beginners. Advanced: Training on optimal BUY/SELL entries for short and mid-term waves (300 - 500 Pips). Pro Class: Master the major trends across all timeframes, utilizing both Scalping and Swing Trading for long-term trends (500 - 1,000 Pips).",
  },
]

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="mx-auto px-6 lg:px-48">
        <div className="flex w-full flex-col gap-16 lg:flex-row lg:justify-between lg:gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-[40%]">
            <TitleSectionCommon
              title="FAQ"
              className="mb-2 text-sm font-medium"
            />

            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[4.5rem]">
                Frequently
                <span className="text-gradient-neutral ml-2">Asked</span> <br />
                Questions
              </h2>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[65%]">
            <Reveal delay={0.2}>
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] transition-colors hover:bg-[#111111]"
                  >
                    <AccordionTrigger className="group/trigger w-full px-8 py-6 text-left text-lg font-medium text-neutral-100 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                      <div className="flex w-full items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-700/80 text-white transition-colors duration-300 group-aria-expanded/trigger:border-primary group-aria-expanded/trigger:bg-primary">
                          <ChevronDown className="size-4 transition-transform duration-300 group-aria-expanded/trigger:rotate-180" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="h-auto! px-8 pr-16 pb-8 text-base leading-relaxed text-neutral-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
