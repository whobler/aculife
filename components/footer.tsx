"use client"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} acuLife. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>{t.contact.info.phone}</span>
            <span>{t.contact.info.email}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
