import { serviceAreas } from "./data";

export const siteUrl = "https://littleswimmersacademy.net";

export const businessName = "Little Swimmers Academy";

export const serviceAreaCities = [
  ...serviceAreas.standard,
  ...serviceAreas.extended,
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": `${siteUrl}/#business`,
  name: businessName,
  url: siteUrl,
  telephone: "+1-408-438-6870",
  email: "mail2sierra@gmail.com",
  image: `${siteUrl}/little-swimmers-logo-v2.png`,
  logo: `${siteUrl}/little-swimmers-logo-v2.png`,
  priceRange: "$55-$75",
  description:
    "Private mobile swim lessons for children ages 2-16 at family pools across Los Gatos, Saratoga, Campbell, Cupertino, Monte Sereno, and nearby South Bay communities.",
  areaServed: serviceAreaCities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  makesOffer: [
    {
      "@type": "Offer",
      name: "30 Minute Private Swim Lesson",
      price: "55",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "45 Minute Private Swim Lesson",
      price: "65",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "60 Minute Private Swim Lesson",
      price: "75",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  ],
};
