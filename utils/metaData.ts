export const metaData = {
  title: 'Bryson Ward',
  message: 'Powered by',
  language: 'en-us',
  locale: 'en-US',
};

export function seoMetaData(title: string, description: string, page: string, image: string = 'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png') {
  return {
    title,
    meta: [
      // Global Main
      { charset: 'utf-8' },
      { title },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },
      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://brysonward.com/${page}`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: `https://brysonward.com/${page}`,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image,
      },
    ],
  };
}
