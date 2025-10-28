"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.about.title}</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img src="/professional-acupuncturist-portrait-in-clinic.jpg" alt="Practitioner" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            {t.about.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">{t.about.qualifications.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {t.about.qualifications.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
