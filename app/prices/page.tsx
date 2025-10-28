"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export default function PricesPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t.prices.title}</h1>
          <p className="text-lg text-muted-foreground">{t.prices.subtitle}</p>
        </div>

        <div className="grid gap-6 mb-12">
          {t.prices.items.map((item, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{item.price}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50 border-border">
          <CardContent className="py-6">
            <p className="text-center text-base text-muted-foreground">{t.prices.note}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
