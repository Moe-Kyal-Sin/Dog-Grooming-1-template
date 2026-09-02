/**
 * GLAMOUR POOCH CONTENT
 * ---------------------
 * Replace every value marked PLACEHOLDER before launch. Image imports live here
 * too, so new salon photography can be swapped without touching components.
 */
import heroImage from '../assets/images/hero-apricot-poodle.png';
import transformationBefore from '../assets/images/transformation-before.png';
import transformationAfter from '../assets/images/transformation-after.png';
import mabelImage from '../assets/images/mabel-dachshund.png';
import ralphImage from '../assets/images/ralph-schnauzer.png';

export const site = {
  business: {
    name: 'Dog Daze',
    shortName: 'GP',
    tagline: 'Good dogs. Great hair.',
    description:
      'One-to-one professional grooming in Edinburgh, delivered with patience, personality and plenty of affection.',
    phoneDisplay: 'Phone number to come', // PLACEHOLDER
    phoneHref: '#contact-details', // PLACEHOLDER: replace with tel:+44...
    address: 'Edinburgh address to come', // PLACEHOLDER
    bookingHref: '#booking-details', // PLACEHOLDER: replace with real booking URL
    instagramLabel: '@glamourpooch', // PLACEHOLDER
    instagramHref: '#contact-details', // PLACEHOLDER
    mapHref: '#contact-details', // PLACEHOLDER
    email: 'hello@example.com', // PLACEHOLDER
  },
  hours: [
    { days: 'Opening days', time: 'Hours to come' }, // PLACEHOLDER
    { days: 'By appointment', time: 'Please enquire' },
  ],
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'About', href: '#about' },
    { label: 'Visit', href: '#visit' },
  ],
  images: {
    hero: {
      src: heroImage,
      alt: 'Freshly groomed apricot poodle wearing a cobalt blue scarf',
    },
    transformation: {
      before: {
        src: transformationBefore,
        alt: 'Cream and tan dog with a long, tousled coat before grooming',
      },
      after: {
        src: transformationAfter,
        alt: 'The same cream and tan dog after a neat teddy-bear groom',
      },
    },
  },
  services: [
    {
      number: '01',
      name: 'Full Groom',
      strapline: 'The complete transformation',
      description: 'A bath, dry, brush, coat styling and finishing details, shaped around your dog.',
      price: 'Contact us for pricing',
    },
    {
      number: '02',
      name: 'Bath & Tidy',
      strapline: 'A little refresh between full grooms',
      description: 'Fresh coat, clearer eyes, tidier feet and all the small things that make a big difference.',
      price: 'Contact us for pricing',
    },
    {
      number: '03',
      name: 'Nails & Extras',
      strapline: 'The finishing touches',
      description: 'Ask us about the individual extras that will keep your pooch feeling polished.',
      price: 'Contact us for pricing',
    },
    {
      number: '04',
      name: 'Puppy Introduction',
      strapline: 'A gentle first experience',
      description: 'A calm introduction to the sights, sounds and sensations of grooming at their pace.',
      price: 'Contact us for pricing',
    },
  ],
  gallery: [
    {
      name: 'Mabel', // PLACEHOLDER identity
      breed: 'Miniature Dachshund',
      style: 'Gloss & tidy',
      title: 'Head of Long Lunches',
      image: mabelImage,
      alt: 'Black and tan miniature dachshund posed against a cobalt studio backdrop',
      className: 'gallery-card--mabel',
    },
    {
      name: 'Ralph', // PLACEHOLDER identity
      breed: 'Miniature Schnauzer',
      style: 'Classic schnauzer trim',
      title: 'Chief Eyebrow Officer',
      image: ralphImage,
      alt: 'Freshly groomed miniature schnauzer on a butter yellow editorial set',
      className: 'gallery-card--ralph',
    },
    {
      name: 'Peaches', // PLACEHOLDER identity
      breed: 'Miniature Poodle',
      style: 'Modern teddy trim',
      title: 'Creative Director, Treats',
      image: heroImage,
      alt: 'Freshly groomed apricot poodle wearing a cobalt blue scarf',
      className: 'gallery-card--peaches',
    },
    {
      name: 'Biscuit', // PLACEHOLDER identity
      breed: 'Mixed breed',
      style: 'Soft teddy groom',
      title: 'Senior Sofa Consultant',
      image: transformationAfter,
      alt: 'Cream and tan dog after a soft teddy-bear groom',
      className: 'gallery-card--biscuit',
    },
  ],
  carePoints: [
    'Personal attention',
    'Friendly open-plan environment',
    'Consultation before grooming',
    'High-quality grooming products',
    'Care adapted to each dog',
  ],
  team: [
    {
      name: 'Your groomer', // PLACEHOLDER
      role: 'Founder & dog person', // PLACEHOLDER
      bio: 'Owner Story: their approach to grooming, what they love about the work, and the personality behind the studio.', // PLACEHOLDER
      image: ralphImage, // PLACEHOLDER: replace with groomer portrait
      imageAlt: 'Editorial portrait placeholder ',
    },
  ],
  reviews: [
    {
      quote: 'Add a short, genuine client review here ',
      credit: 'Client name · review placeholder',
    },
    {
      quote: 'A second real review can live here — warm, specific and beautifully brief.',
      credit: 'Client name · review placeholder',
    },
  ],
  ctas: {
    primary: 'Book a groom',
    phone: 'Call the salon',
    directions: 'Get directions',
  },
} as const;

export type SiteData = typeof site;
