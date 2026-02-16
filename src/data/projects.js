/**
 * Single source of truth for portfolio projects.
 * Add new "satellite" apps by adding an object to this array.
 *
 * Images (add files in public/images/projects/):
 * - icon: small logo (e.g. two-loonie-icon.png) — shown next to the title on the card.
 * - image: cover/hero image (e.g. two-loonie.png) — shown in the card’s top banner (aspect-video).
 */
export const projects = [
  {
    id: 'two-loonie',
    title: 'Two Loonie',
    tagline: 'Canadian Wealth Dashboard',
    liveUrl: 'https://wick-wi.github.io/two-loonies/',
    repoUrl: 'https://github.com/wick-wi/two-loonies',
    image: '/images/projects/two-loonie-project.png',
    icon: '/images/projects/two-loonie-icon.png',
    sections: {
      problem:
        'Canadians do not have a single platform to track their wealth and investments.',
      productStrategy:
        'A free tool to connect their bank/ investment accounts to track their wealth and "score". Premium features behind a subscription and monentize referral to other financial products.',
      technicalStack:
        'React Native for cross-platform mobile development, a Node.js (TypeScript) backend running on AWS, and PostgreSQL for secure data management, integrated with Flinks or Plaid for Canadian bank connectivity',
      keyLessons:
        'B2C is HARD!!!!',
    },
  },
]
