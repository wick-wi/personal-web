/**
 * Single source of truth for portfolio projects.
 * Add new "satellite" apps by adding an object to this array.
 *
 * Images (add files in public/images/projects/):
 * - icon: small logo (e.g. two-loonie-icon.png) — shown next to the title on the card.
 * - image: cover/hero image (e.g. two-loonie.png) — shown in the card’s top banner (aspect-video).
 *
 * Section labels (optional): add sectionTitles to override headings per project.
 * Keys: problem, productStrategy, technicalStack, keyLessons.
 * Example: sectionTitles: { problem: 'Context', technicalStack: 'Methodology', keyLessons: 'Results' }
 * Sections with no content (missing or empty string) are not displayed.
 *
 * Button labels (optional): liveButtonLabel, repoButtonLabel.
 * Defaults: "Visit Live App", "View code". E.g. liveButtonLabel: 'View slides', repoButtonLabel: 'View notebook'.
 */
export const projects = [
  {
    id: 'two-loonie',
    title: 'Two Loonie',
    tagline: 'Canadian Wealth Dashboard',
    liveUrl: 'https://wick-wi.github.io/two-loonies/',
    repoUrl: 'https://github.com/wick-wi/two-loonies',
    image: '/images/projects/two-loonie-project.png',
    icon: '',
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
  {
    id: 'Zable AB Test',
    title: 'Lendable AB Test',
    tagline: 'AB Test Data Analysis using Python',
    liveUrl: 'https://drive.google.com/file/d/1MSjAjX7NuIk4B3ovQJSAyDema4-Kpjg7/view?usp=share_link',
    repoUrl: 'https://colab.research.google.com/drive/16W0pXQ5cz3CmffeiFTsaylY7P1PCdxb2',
    liveButtonLabel: 'View slides',
    repoButtonLabel: 'View notebook',
    image: '/images/projects/lendable-ab-test.png',
    icon: '',
    sectionTitles: {
      problem: 'The Question',
      technicalStack: 'Methodology',
      keyLessons: 'Results',
    },
    sections: {
      problem:
        'Should Lendable show the indicative offer up front or only final offer after the user has applied?',
      technicalStack:
        'Using Jupyter Notebook with Python and Pandas',
      keyLessons:
        'Showing offer up front boosts conversion',
    },
  },
]
