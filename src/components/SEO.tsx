import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  url: string
}

export default function SEO({ title, description, url }: SEOProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:image', 'https://techscript.ca/og-image.svg')
  }, [title, description, url])

  return null
}
