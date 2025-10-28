"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Leaf, Heart, Sparkles, Shield, Quote } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  const icons = [Shield, Heart, Leaf, Sparkles]

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{t.home.hero.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">{t.home.hero.subtitle}</p>
          <div className="pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">{t.home.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <img
            src="/peaceful-acupuncture-treatment-room-with-natural-l.jpg"
            alt="acuLife treatment room"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.benefits.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.home.benefits.items.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.testimonials.title}</h2>
          <p className="text-lg text-muted-foreground">{t.home.testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.home.testimonials.items.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed italic">"{testimonial.text}"</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Card className="bg-muted/50 border-border">
          <CardContent className="py-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t.home.hero.cta}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.home.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/services">{t.nav.services}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">{t.nav.contact}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
