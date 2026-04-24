import Image from "next/image"
import { MoveRight } from "lucide-react"

import { BorderBeam } from "@/components/common/border-beam"

import { Reveal } from "../../components/animations/reveal"

interface Language {
  name: string
  flag: string
}

const languages: Language[] = [
  {
    name: "Sweden",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685502641d66419fa601da7a_Sweden.svg",
  },
  {
    name: "United Kingdom",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503c33e40b07ab26f0c8a_UK.svg",
  },
  {
    name: "Germany",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b7e4db941df64fe2c1_German.svg",
  },
  {
    name: "Italian",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b64823cbb5a36243ba_Italian.svg",
  },
  {
    name: "American",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b68238eaa3384b73bf_America.svg",
  },
  {
    name: "China",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b697aba996dbddd2e7_China.svg",
  },
  {
    name: "Indonesian",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b8ac3a3262e7c9d4fe_Poland.svg",
  },
  {
    name: "Japanesse",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b7c0c21398a0b150d2_Japan.svg",
  },
  {
    name: "Czech",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b68238eaa3384b73d7_Czech.svg",
  },
  {
    name: "Russian",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b55e9cc865a796e3e6_Russia.svg",
  },
  {
    name: "Europe",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503bdf58bf6c8ba6d4a0f_Europe.svg",
  },
  {
    name: "Korean",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b677868eee7405b818_Korea.svg",
  },
  {
    name: "Turkey",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503f7964cdbbb1b37e558_Turkey.svg",
  },
]

export function SupportLanguages() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center md:gap-8">
          <Reveal>
            <BorderBeam className="flex items-center gap-2 px-4 py-2">
              <span>Languages</span>
              <div className="flex size-6 items-center justify-center rounded-full bg-[#E5D7D1]">
                <MoveRight className="size-3 text-neutral-900" />
              </div>
            </BorderBeam>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              Customer Support{" "}
              <span className="bg-linear-to-r from-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                In 18 Languages
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Languages Grid/Flex */}
        <div className="mx-auto mt-16 max-w-[900px]">
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {languages.map((lang: Language, index: number) => (
                <div
                  key={index}
                  className="flex cursor-default items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900/50 p-1.5 pr-6 transition-all hover:border-neutral-600 hover:bg-neutral-800/80"
                >
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-neutral-200 md:text-base">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
