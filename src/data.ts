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
    url: 'https://www.linkedin.com/in/kshitij-tripathi-b20a9625a/',
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/pele_3010/',
  },
];

// Rendered as one line beside the copyright in the footer.
const resourceLinks = [
  {
    label: 'Source: kshitij189/portflio',
    url: 'https://github.com/kshitij189/portflio',
  },
];

const heroText =
  'A backend developer and AI engineer building asynchronous, distributed systems that stay fast and correct under load.';

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
