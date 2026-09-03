# Glamour Pooch website concept

A responsive one-page Astro concept for an independent Edinburgh dog-grooming studio.

## Run locally

```sh
npm install
npm run dev
```

Use `npm run build` for the full Astro type check and production build.

## Replacing placeholder content

All editable business information and image references are in `src/data/site.ts`.
Search that file for `PLACEHOLDER` before launch and replace:

- phone, email, address, booking, Instagram and map links
- opening hours
- groomer name, role, biography and portrait
- gallery dog identities
- approved client testimonials

The current dog photography is AI-generated concept imagery. Replace files in
`src/assets/images/` and update their imports and alt text in `src/data/site.ts`
when genuine salon photography is available.

Also replace the temporary `https://example.com` production domain in
`astro.config.mjs` before deployment so canonical and social metadata use the
real site URL.
