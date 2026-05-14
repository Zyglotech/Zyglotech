import { type MetadataRoute } from 'next';

const siteUrl = 'https://www.zyglo.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/services`, lastModified: new Date() },
    { url: `${siteUrl}/academy`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    { url: `${siteUrl}/pricing`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
  ];
}
