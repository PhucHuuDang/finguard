"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Marquee, MarqueeFade } from "@/components/ui/maquee"
import { Reveal } from "@/components/animations/reveal"
import { TitleSectionCommon } from "@/components/common/reuse-component"

// --- Types ---

interface Testimonial {
  name: string
  avatar: string
  rating: number // 1-5, supports half stars via .5
  review: string
  date: string
}

// --- Mock Data ---

const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    name: "Liam Everhart",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Finguard has totally changed the way we handle transactions. Everything just clicks, and we've seen some awesome improvements in how efficiently we operate.",
    date: "April 10, 2024",
  },
  {
    name: "Carmen Waters",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "The Finguard platform has revolutionized our transaction processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency.",
    date: "June 12, 2024",
  },
  {
    name: "Carole Kiehn",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Customer support is top-notch. The Finguard dashboard fits seamlessly into our workflow, which is exactly what we needed for our growing teams.",
    date: "July 10, 2024",
  },
  {
    name: "Marco Pellegrini",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Since integrating Finguard, our portfolio tracking has become so much more intuitive. The charting tools alone justify the investment many times over.",
    date: "August 22, 2024",
  },
  {
    name: "Ayumi Tanaka",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Real-time analytics and cross-device sync are game changers. We track our trades from mobile without missing a beat. Highly recommend Finguard.",
    date: "September 5, 2024",
  },
]

const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    name: "Carmen Waters",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "The Finguard platform has revolutionized our transaction processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency.",
    date: "June 12, 2024",
  },
  {
    name: "Figo Nath",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "We've reduced project delivery times by nearly 40% since integrating their solution. It's intuitive, efficient, and reliable.",
    date: "May 10, 2024",
  },
  {
    name: "Liam Everhart",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Finguard has totally changed the way we handle transactions. Everything just clicks, and we've seen some awesome improvements.",
    date: "April 10, 2024",
  },
  {
    name: "Elena Vasquez",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "The risk analysis module saved us from two potentially catastrophic trades last quarter. The alerts are precise and timely — couldn't ask for more.",
    date: "October 18, 2024",
  },
  {
    name: "Daniel Okonkwo",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Multi-language support and the currency conversion tools are excellent. As a team spread across three continents, Finguard keeps everyone aligned.",
    date: "November 3, 2024",
  },
]

// --- Sub-components ---

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center gap-[2px]">
      {[...Array(fullStars)].map((_, i) => (
        <Image
          key={`full-${i}`}
          src="/features/star.svg"
          alt=""
          width={16}
          height={16}
          className="size-4"
          unoptimized
          draggable={false}
        />
      ))}
      {hasHalfStar && (
        <Image
          src="/features/half-star.svg"
          alt=""
          width={16}
          height={16}
          className="size-4"
          unoptimized
          draggable={false}
        />
      )}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={cn(
        "flex w-[360px] shrink-0 flex-col justify-between select-none",
        "rounded-2xl border border-amber-900/30 bg-neutral-900/50 p-6 backdrop-blur-sm",
        "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        "transition-none"
      )}
      draggable={false}
    >
      {/* Header: Avatar + Name + Stars */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-neutral-700/50">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="40px"
              unoptimized
              draggable={false}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm leading-none font-medium text-neutral-100">
              {testimonial.name}
            </span>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>

        {/* Review Content */}
        <p className="text-[13px] leading-relaxed text-neutral-300/90">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </div>

      {/* Date */}
      <p className="mt-4 text-xs font-medium text-neutral-500">
        {testimonial.date}
      </p>
    </div>
  )
}

// --- Main Component ---

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Image — testimonials-background.avif */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/testimonials-background.avif"
          alt="testimonials background"
          fill
          className="scale-125 object-cover object-top"
          quality={100}
          priority={false}
          unoptimized
        />
        {/* Edge fades — blend into adjacent black sections while preserving the warm center */}
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            {/* Badge */}
            <Reveal delay={0.1} direction="up">
              <TitleSectionCommon
                title="Testimonials"
                icon={
                  <MessageCircle className="size-4 rounded-xl bg-primary p-0.5 text-white md:size-5" />
                }
                className="flex-row rounded-full border border-white/10 bg-white/5 pr-1.5 pl-4 backdrop-blur-md"
                titleClassName="text-sm font-medium"
              />
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.2} direction="up">
              <h2 className="max-w-lg font-heading text-3xl leading-[1.1] font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                What Clients Think About Our {/* <br /> */}
                <span className="text-gradient-neutral">Services</span>
              </h2>
            </Reveal>
          </div>

          {/* Description */}
          <Reveal delay={0.3} direction="up">
            <p className="max-w-md text-sm leading-relaxed font-semibold text-neutral-400 md:text-start md:text-base">
              Our financial management platform is transforming the way people
              manage their money. Here&apos;s what some of our users have to say
              about their experience
            </p>
          </Reveal>
        </div>

        {/* Marquee Reviews */}
        <Reveal delay={0.4} direction="up">
          <div className="space-y-5 select-none" draggable={false}>
            {/* Row 1 — Left to Right (default) */}
            <Marquee
              className="[--duration:35s] [--gap:1.25rem]"
              pauseOnHover
              repeat={3}
            >
              <MarqueeFade fade="horizontal" />
              {TESTIMONIALS_ROW_1.map((testimonial, i) => (
                <TestimonialCard key={`r1-${i}`} testimonial={testimonial} />
              ))}
            </Marquee>

            {/* Row 2 — Right to Left (reverse) */}
            <Marquee
              reverse
              className="[--duration:40s] [--gap:1.25rem]"
              pauseOnHover
              repeat={3}
            >
              <MarqueeFade fade="horizontal" />
              {TESTIMONIALS_ROW_2.map((testimonial, i) => (
                <TestimonialCard key={`r2-${i}`} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
