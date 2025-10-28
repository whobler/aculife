"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t.services.title}</h1>
          <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        <div className="grid gap-8">
          {t.services.items.map((service, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative w-full h-[400px] rounded-lg overflow-hidden">
          <img
            src="/traditional-chinese-medicine-acupuncture-needles-a.jpg"
            alt="Traditional Chinese Medicine"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
