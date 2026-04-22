# Big Chill Wayanad — Website Requirements Specification (Draft)

**Document status:** Draft for review  
**Property context:** Vacation villa in Wayanad, Kerala, India  
**Site branding:** **The Big Chill** — this site is the property’s own presence; it does **not** present itself as a StayVista property page.  
**Primary domain:** [bigchillwayanad.com](https://bigchillwayanad.com) (Hostinger DNS → planned Vercel hosting)  
**StayVista (operational only):** Listing and bookings may continue on StayVista in parallel; the website treats that URL as an **optional** “find us there too” link, not as primary messaging or co-branding.  
**StayVista listing URL (secondary link only):** [stayvista.com/villa/the-big-chill](https://www.stayvista.com/villa/the-big-chill)

---

## 1. Purpose & goals

### 1.1 Primary purpose

Build a **fast, attractive, mobile-first marketing site** for **The Big Chill** so that travellers who search for Wayanad stays (and related intents) can **discover the property**, **trust the experience**, and **reach you** — mainly via **email and phone** on a **Contact** page. There is **no obligation** to push bookings, calendars, or StayVista as a call-to-action theme; discovery and owner contact are enough.

**Optional:** A discrete text link (e.g. “Find us on StayVista”) for guests who already use that platform or want another place to read details/reviews — **not** framed as the main way to book from this site.

### 1.2 Success criteria (high level)

- **Discoverability:** Strong organic visibility for relevant queries (traditional search + AI-assisted discovery).  
- **Trust:** Premium presentation, clear facts, social proof, transparent paths to verified reviews.  
- **Speed:** Excellent Core Web Vitals on mobile networks.  
- **Clarity:** Primary next step is **Contact** (email / phone). Any third-party link is secondary and clearly subordinate in copy and layout.

---

## 2. Business model & constraints

| Constraint | Detail |
|------------|--------|
| **This website** | **Discovery + The Big Chill branding** — not a StayVista co-branded or booking-led experience. |
| StayVista | May continue to host listing, calendar, and bookings **off this site**. The villa site does **not** duplicate a booking engine unless explicitly scoped later. |
| **Guest outreach** | **Contact** page with **email** and **phone** (and optional WhatsApp). How you handle dates, pricing, and payment after contact is **outside** this spec. |
| Commission / ops | Unchanged on StayVista’s side; this site is an **owned** way to be found and to talk to you. |

**Requirement:** Visual identity, domain, and copy centre on **The Big Chill**; StayVista is at most a **single optional footer- or contact-level link**, not a hero partner or primary CTA.

---

## 3. Target audience

- Domestic and international travellers planning **Wayanad / Kerala / hill station / nature** stays.  
- Groups and families seeking **private villa** experiences.  
- Users primarily on **mobile** during inspiration and planning phases.

**Tone:** Warm, confident, **vibrant and lively**, still **ultra-premium** (not noisy or cheap).

---

## 4. Brand & design direction

### 4.1 Visual language

- **Vibrant and lively:** Rich greens (Wayanad/nature), tasteful accent colours, high-quality photography hero treatment.  
- **Premium:** Generous whitespace, refined typography hierarchy, subtle motion (optional), no clutter.  
- **Photography-first:** Large, optimised imagery; optional light galleries / carousels with accessibility in mind.

### 4.2 UX principles

- **Mobile-first** layout and touch targets.  
- **Scannable** sections: short headings, bullets where helpful.  
- **Persistent or repeated CTAs** for **Contact** (e.g. “Get in touch”) — not booking-platform language unless you later choose to add it.

### 4.3 Accessibility (baseline)

- Semantic HTML, visible focus states, sufficient colour contrast, alt text for meaningful images, reduced motion preference respected.

---

## 5. Information architecture (proposed)

| Area | Purpose |
|------|---------|
| **Home** | Emotional hook, hero, key USPs, **Contact** as primary CTA, teaser for gallery & locality. |
| **The villa** | Rooms, capacity, amenities, house rules summary, what’s included, FAQs. |
| **Gallery** | Curated property photos (categories: exteriors, pool, interiors, views, details). |
| **Wayanad & things to do** | Local experiences, nature, food, drives — optimised for “things to do near …” style queries. |
| **Guest experience / reviews** | Short testimonials on-site + link(s) to **Google reviews**; optional link to StayVista listing **only** if useful for extra guest photos/reviews (same tone as “find us on…”). |
| **Location & getting here** | Map embed, directions, nearest towns/airports, parking. |
| **Contact** | Email, phone, optional WhatsApp; optional short note on how you prefer to be reached. **Optional same page:** text link “Find us on StayVista” → listing URL (new tab). |
| **Policies** (light) | Privacy for any forms/analytics; other policy copy only if you want it on-site. |

**Optional later:** Blog or “guides” for long-tail SEO (out of scope for v1 unless requested).

---

## 6. Functional requirements

### 6.1 Primary: Contact

- **Contact page** (or section): **Email** and **phone** clearly shown; optional **WhatsApp** button/link.  
- **Click-to-call** (`tel:`), **mailto** for email.  
- Optional v1.1: **Contact form** (spam protection, privacy note) if you want to avoid publishing a raw email address.

### 6.2 Optional: StayVista (not promotional)

- **One** low-key link, e.g. label **“Find us on StayVista”** (or “See our listing on StayVista”), pointing to **`https://www.stayvista.com/villa/the-big-chill`**, typically on **Contact** or in **footer** — not in the hero, not co-logo’d with StayVista.  
- **No** requirement to mention bookings, availability, or “book now” for StayVista on this site.

### 6.3 Reviews & social proof

- On-page **2–6 short quotes** with attribution (guest first name + context, or “Verified guest” if anonymised).  
- Outbound links: **Google Business / Google reviews** URL (preferred for trust).  
- Optional: same **StayVista** listing URL only if you want readers to see more reviews there — still secondary to Google if both exist.

### 6.4 Media

- **Image optimisation:** Modern formats (e.g. WebP/AVIF where supported), responsive `srcset`, lazy loading below the fold.  
- Optional: Short **ambient video** loop (muted, poster image, no autoplay with sound).

### 6.5 Location

- Embedded map (Google Maps or OpenStreetMap-based embed — preference TBD) with villa pin or approximate area if privacy desired.

---

## 7. SEO & “AI search” requirements

### 7.1 Technical SEO (best in class baseline)

- Unique **title tags** and **meta descriptions** per main page.  
- Clean **URL structure** (`/`, `/villa`, `/gallery`, `/things-to-do`, `/location`, `/contact` or similar).  
- **Open Graph** + **Twitter Card** meta for sharing.  
- **`sitemap.xml`** + **`robots.txt`**.  
- **Canonical URLs** for www vs non-www (single choice).  
- **Structured data (JSON-LD):** at minimum `LodgingBusiness` or `VacationRental` / `LocalBusiness` (schema choice to align with Google guidelines), plus `FAQPage` where FAQs exist.  
- **Performance as ranking input:** LCP/CLS/INP targets met on mobile.

### 7.2 Content SEO

- **Intent-led headings** (e.g. “Private pool villa in Wayanad”, “Things to do in Wayanad from Big Chill”).  
- **Entity-rich** copy: Wayanad, nearby towns, landmarks, experiences — written naturally, no keyword stuffing.  
- **FAQ** section targeting common questions (pets, Wi‑Fi, pool, cook, check-in, how to enquire, etc.) — answer “rates / dates” in line with how you actually want to be contacted, without making StayVista the hero answer unless you choose to.

### 7.3 AI discovery / LLM-friendly

- Clear **facts** in plain text (location region, capacity, standout amenities) — not only inside images.  
- A concise **`/llms.txt`** or dedicated **“At a glance”** machine-friendly block (optional but recommended): one screen of structured facts + official links.  
- **Human-edited** accuracy: avoid generic AI filler; every claim should be verifiable.

### 7.4 Local & international

- **hreflang** if bilingual copy added later (e.g. EN + another language); omit until translated.

---

## 8. Non-functional requirements

| Category | Target |
|----------|--------|
| **Performance** | Mobile LCP in green zone where feasible; minimal JS; font strategy documented. |
| **Security** | HTTPS everywhere (Vercel default); no secrets in repo; form endpoints secured if added. |
| **Privacy** | Cookie/analytics disclosure if non-essential cookies used; GDPR-minded copy if EU traffic matters. |
| **Reliability** | Static or mostly static deployment on Vercel; simple CI from Git. |
| **Maintainability** | Content updates (photos, copy, links) doable without heavy engineering. |

---

## 9. Technical stack (proposed)

| Layer | Proposal |
|-------|----------|
| **Hosting** | Vercel |
| **Domain** | `bigchillwayanad.com` on Hostinger — DNS to Vercel (A/ALIAS/CNAME per Vercel docs) |
| **Framework** | Next.js (static export or SSR as needed) *or* Astro *or* Eleventy — final choice in build phase based on simplicity vs features |
| **Analytics** | Plausible / GA4 / Vercel Analytics — **owner choice** |
| **Forms** | Vercel serverless, Formspree, or email-only for v1 |

**Requirement:** Build should default to **simplest stack** that meets performance and SEO goals.

---

## 10. Content checklist (owner inputs needed)

- [ ] Final property **name** and tagline  
- [x] StayVista **listing URL** — `https://www.stayvista.com/villa/the-big-chill`  
- [ ] **Google Maps** link or Business Profile link  
- [ ] **Google reviews** URL  
- [ ] **Phone** (+ WhatsApp number if different)  
- [ ] **Email** (optional public)  
- [ ] **Photo set** (high-res originals for optimisation pipeline)  
- [ ] **Testimonials** (permission to publish)  
- [ ] **Capacity**, bedrooms/bathrooms, **amenities** list, **house rules** summary  
- [ ] **Things to do** shortlist (owner picks + distances if known)  
- [ ] **FAQ** answers  
- [ ] **Social links** (Instagram, etc.) if any  

---

## 10A. Proposed content direction (from owner input)

Use this as the default creative direction for v1 copy and section flow.

### 10A.1 Hero section (first impression)

- **UI:** Full-bleed background video or high-res hero image.
- **Headline:** `The Big Chill: A Hillock Sanctuary in Wayanad.`
- **Sub-headline:** `More than a stay—a 2.5-bedroom retreat for 6, where mist-covered peaks meet home-style comfort food.`
- **Primary CTA:** `View the Experience`
- **Secondary CTA:** Prefer `Contact Us`; if included, `Find us on StayVista` as low-emphasis text/button.

### 10A.2 The space section ("2.5 bedrooms & beyond")

- **UI:** Horizontal tabs for quick floor-plan clarity.
- **Tab 1 — The Master Suites:** `Two expansive king bedrooms on the upper floor, each with a private balcony looking directly into the forest and hillock.`
- **Tab 2 — The Study (The +0.5):** `Our secret weapon. A dedicated study room perfect for a quiet remote-work session or as an extra cozy nook for the kids.`
- **Tab 3 — Living & Dining:** `Double-height living spaces designed for slow mornings. A 6-seater dining area where the family actually gathers.`
- **Implementation note:** Prefer a11y-first tab primitives (Radix UI Tabs or Headless UI Tabs).

### 10A.3 Food & heart section (differentiator)

- **UI:** Polaroid-style grid or masonry carousel.
- **Caretaker:** Feature Babul with warmth and hospitality-led copy.
- **Food narrative:** `From North Indian and South Indian comfort dishes to custom-cooked favorites. Breakfast is on us; lunch and dinner are crafted on-demand to your spice preference.`
- **Kids' corner:** Highlight sand pit and swing with family-friendly messaging.

### 10A.4 Nature & seasons section (hillock view calendar)

- **UI:** 3-column seasonal grid (desktop) with stacked cards (mobile). Optional interactive slider in later phase.
- **Season cards:**
  - `Oct-Feb (Mist): Waking up to a white blanket of fog over the hillock. Crisp, chilly nights by a bonfire. Best for morning nature walks.`
  - `Mar-May (Gold): Clear blue skies and perfect visibility of the valley. Warm days, cool balcony breezes. Best for trekking and wildlife.`
  - `Jun-Sep (Emerald): Monsoon magic. The entire property turns neon green. Perfect for do-nothing vacations. Best for tea-sipping and reading.`
- **Motion note:** Keep parallax subtle and optional; disable for reduced-motion users.

### 10A.5 Wayanad beyond the gate

- **UI:** Scrollable "nature walk" cards.
- **Step-out message:** `No car needed. Step out of our gate for a gentle trail walk through the surrounding coffee and pepper plantations.`
- **Nearby anchors:** Banasura Sagar Dam and Wayanad Wildlife Sanctuary as short distance-based highlights.

### 10A.6 Content assets and CTA enhancements

- Add a `Download our Home Menu` button (PDF) to make the food story tangible pre-arrival.
- Keep contact details easy to tap/copy on mobile (`tel:` and `mailto:`).
- If StayVista is shown, use one discrete link only: `Find us on StayVista`.

---

## 11. Out of scope (v1 unless added later)

- Native booking with payments, calendar sync, or PMS integration.  
- Multi-property expansion (design may allow later).  
- Full blog/CMS unless required — **MDX/markdown in repo** acceptable for v1 simplicity.  
- Login / user accounts.

---

## 12. Phasing (suggested)

| Phase | Deliverable |
|-------|-------------|
| **v1** | All core pages, SEO baseline, **Contact**-first UX, optional “Find us on StayVista” link, optimised gallery, Google/reviews links as available, Vercel live on domain. |
| **v1.1** | Contact form, richer structured data, optional blog/guides. |
| **v2** | Video, multilingual, advanced analytics experiments. |

---

## 13. Open questions

1. **Precise map pin** vs approximate area for guest privacy.  
2. Preferred **analytics** and appetite for cookies.  
3. **Languages:** English-only for launch?  
4. **WhatsApp** as primary direct channel vs phone.  
5. Any **trademark** or photography usage constraints from StayVista or photographers (relevant if you deep-link or screenshot their UI).

---

## 14. Acceptance (draft)

v1 is accepted when: site is live on **bigchillwayanad.com**, passes basic SEO checklist (sitemap, meta, structured data, social previews), meets agreed mobile performance bar, and owner can update **copy/links/images** via agreed workflow.

---

*End of draft — refine remaining checklist items (Google, phone, photos, etc.) before build kickoff.*
