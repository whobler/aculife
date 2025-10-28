"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h1>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">{t.contact.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a
                    href={`tel:${t.contact.info.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.contact.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Address</div>
                  <p className="text-muted-foreground whitespace-pre-line">{t.contact.info.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                {t.contact.hours.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {t.contact.hours.schedule.map((time, index) => (
                  <li key={index} className="text-base text-muted-foreground">
                    {time}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 relative w-full h-[400px] rounded-lg overflow-hidden">
          <img src="/peaceful-wellness-clinic-interior-with-plants.jpg" alt="Clinic location" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
