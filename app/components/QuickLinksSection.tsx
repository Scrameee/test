'use client'

import Link from "next/link"
import { FileCheck, Users, Globe, BookOpen } from "lucide-react"

function QuickLinkCard({ icon, title, link }: { icon: React.ReactNode; title: string; link: string }) {
  return (
    <Link href={link} className="block">
      <div className="flex flex-col items-center p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <div className="mb-2">{icon}</div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </Link>
  )
}

export function QuickLinksSection() {
  return (
    <section className="py-8 bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickLinkCard
            icon={<FileCheck className="h-6 w-6 text-blue-600" />}
            title="Recognition Database"
            link="/recognition/database"
          />
          <QuickLinkCard
            icon={<Users className="h-6 w-6 text-blue-600" />}
            title="Accredited Organizations"
            link="/accreditation/registry"
          />
          <QuickLinkCard
            icon={<Globe className="h-6 w-6 text-blue-600" />}
            title="Bologna Process"
            link="/bologna"
          />
          <QuickLinkCard
            icon={<BookOpen className="h-6 w-6 text-blue-600" />}
            title="FAQ"
            link="/faq"
          />
        </div>
      </div>
    </section>
  )
} 