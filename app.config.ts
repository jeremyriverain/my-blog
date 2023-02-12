export default defineAppConfig({
  alpine: {
    title: "Jérémy Riverain",
    description: `Hi, I'm Jérémy. I'm developer, living in France 🇫🇷 . I work for Zenika as a consultant. I like programming with with VueJS, Flutter, Symfony.`,
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300,
    },
    header: {},
    footer: {
      credits: {
        enabled: false,
      },
      navigation: false,
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Follow me on", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "jeremyriverain",
      github: "jeremyriverain",
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jeremy-riverain",
      },
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
