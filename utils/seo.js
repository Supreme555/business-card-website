import { siteConfig } from './constants'

export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.siteUrl,
    site_name: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteConfig.author,
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
}

export const getSEOTags = (page) => {
  const title = `${page.title} | ${siteConfig.title}`
  return {
    ...defaultSEO,
    title,
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description: page.description || defaultSEO.description,
    },
  }
} 