import Image from "next/image"

import { cn } from "@/lib/utils"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Language } from "@/i18n/locales"

export interface SelectCountryProps {
  items: Language[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

export function SelectCountry({
  items,
  value,
  defaultValue,
  onChange,
  placeholder = "Select language...",
  className,
}: SelectCountryProps) {
  return (
    <Field className={cn("", className)}>
      <Select
        value={value}
        defaultValue={defaultValue}
        onValueChange={onChange}
      >
        <SelectTrigger
          className="h-12 w-full min-w-[200px] rounded-lg border border-neutral-700 bg-neutral-900/50 px-5 text-neutral-200 transition-all hover:bg-neutral-800/80 focus:ring-2 focus:ring-primary/50 md:min-w-[240px]"
          style={{
            height: "48px",
          }}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          sideOffset={8}
          className="max-h-[300px] overflow-x-hidden overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 shadow-xl backdrop-blur-md"
        >
          <SelectGroup>
            {items.map((item: Language) => (
              <SelectItem
                key={item.locale}
                value={item.locale}
                className="cursor-pointer rounded-lg focus:bg-neutral-800 focus:text-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <div className="relative size-8 shrink-0 overflow-hidden rounded-full border border-neutral-700">
                    <Image
                      src={item.flag}
                      alt={`${item.label} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-base font-medium">{item.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
