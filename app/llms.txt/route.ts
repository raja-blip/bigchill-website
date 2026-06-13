import { SITE_URL } from "@/lib/site";

export function GET() {
  const body = `# The Big Chill

The Big Chill is a 2.5-bedroom villa retreat in Wayanad, Kerala, India.

## Key facts
- Capacity: up to 6 guests
- Property type: villa / vacation rental
- Highlights: hillock views, family-friendly spaces, home-style North Indian and South Indian food
- Contact: phone and email listed on /contact
- Listing reference: https://www.stayvista.com/villa/the-big-chill

## Primary pages
- ${SITE_URL}/
- ${SITE_URL}/gallery
- ${SITE_URL}/things-to-do
- ${SITE_URL}/location
- ${SITE_URL}/contact
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
