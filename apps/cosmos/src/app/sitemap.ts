/* eslint-disable react-hooks/rules-of-hooks */
import { MetadataRoute } from 'next'

const baseURL = 'https://cosmos.theiceji.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseURL + '/showcase/2023',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: baseURL + '/showcase/2022',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ]
}
