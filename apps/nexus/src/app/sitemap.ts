/* eslint-disable react-hooks/rules-of-hooks */
import { MetadataRoute } from 'next'

const baseURL = 'https://nexus.theiceji.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseURL + '/portal',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: baseURL + '/portal/signup',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: baseURL + '/help/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: baseURL + '/help/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ]
}
