// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'Experience',
    url: '#experience',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/kshitij189',
  },
  {
    label: 'LinkedIn',
    // TODO: replace with your LinkedIn profile URL
    url: 'https://www.linkedin.com/in/TODO-your-linkedin-handle/',
  },
  {
    label: 'LeetCode',
    // TODO: replace with your LeetCode profile URL
    url: 'https://leetcode.com/u/TODO-your-leetcode-handle/',
  },
];

// Design and original code credit — see README.
const resourceLinks = [
  {
    label: 'Huy Nguyen (UI design)',
    url: 'https://www.huyng.xyz',
  },
  {
    label: 'Ebraheem Alhetari (original code)',
    url: 'https://github.com/Hetari/portfolio',
  },
];

const heroText =
  'A backend developer building asynchronous, distributed systems that stay fast and correct under load.';

const locationPlace = `21°08'44.9"N 79°05'17.5"E`;
const locationCountry = 'India, Nagpur';

const contactEmail = 'kttripathi317@gmail.com';
// TODO: confirm you want your personal number public. Remove `contactPhone`
// and the two <Button :url="..."> usages in Hero.vue / Contact.vue if not.
const contactPhone = 'https://wa.me/919821072800';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  contactEmail,
  contactPhone,
};
