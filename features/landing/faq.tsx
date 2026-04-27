"use client"

import { ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/animations/reveal"
import { TitleSectionCommon } from "@/components/common/reuse-component"

export function FaqSection() {
  const t = useTranslations("faq")

  const faqs = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
  ]

  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="mx-auto px-6 lg:px-48">
        <div className="flex w-full flex-col gap-16 lg:flex-row lg:justify-between lg:gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-[40%]">
            <TitleSectionCommon
              title={t("badge")}
              className="mb-2 text-sm font-medium"
            />

            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[4.5rem]">
                {t("heading_1")}
                <span className="text-gradient-neutral ml-2">
                  {t("heading_2")}
                </span>{" "}
                <br />
                {t("heading_3")}
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
