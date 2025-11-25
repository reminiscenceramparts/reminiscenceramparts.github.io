// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-viewfinder",
          title: "viewfinder",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/viewfinder/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-i-won-first-place-with-my-sci-fi-short-story",
        
          title: "I won first place with my sci-fi short story!",
        
        description: "I wanted to write a short story for this contest last year too, but my lack of confidence shut me down. This time though, determination finally won out and I actually ended up winning!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/writing-competition/";
          
        },
      },{id: "post-the-site-is-live",
        
          title: "The site is live.",
        
        description: "The title says it all: the official Reminiscence Rampart website is now live! Enjoy exploring!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/site-is-live/";
          
        },
      },{id: "news-the-site-is-live-enjoy-browsing",
          title: 'The site is live. Enjoy browsing!',
          description: "",
          section: "News",},{id: "news-check-out-the-reminiscence-ramparts-youtube-channel",
          title: 'Check out the Reminiscence Ramparts YouTube Channel.',
          description: "",
          section: "News",},{id: "news-you-can-also-check-out-the-instagram-page-as-well",
          title: 'You can also check out the Instagram page as well.',
          description: "",
          section: "News",},{id: "news-a-few-sega-lcd-games-from-the-early-2000s-s01e02-extra",
          title: 'A Few Sega LCD Games from the Early 2000s | S01E02 extra',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/sega_lcd_games/";
            },},{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@remramp", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/remramp", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%6B%72%65%6D%72%61%6D%70@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
