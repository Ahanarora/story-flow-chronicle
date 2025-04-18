import { NewsTheme } from "@/lib/types/news";

export const russiaUkraineWar: NewsTheme = {
  id: "russia-ukraine-war",
  title: "Russia-Ukraine War",
  description: "Ongoing military conflict between Russia and Ukraine that began in February 2022, marking the largest military escalation in Europe since World War II",
  category: "Politics",
  subcategory: "International Relations",
  imageUrl: "https://images.unsplash.com/photo-1646558690066-6a4ab29fabff",
  updatedAt: "2025-04-18",
  events: [
    {
      id: "event-1",
      date: "2022-02-24",
      title: "Russia launches full-scale invasion of Ukraine",
      source: "BBC",
      sourceUrl: "https://www.bbc.com/news/world-europe-60504334",
      excerpt: "Russian forces launch a major assault on Ukraine, attacking from the north, east and south. President Putin announces a 'special military operation', as explosions are reported in several Ukrainian cities.",
      detailLevel: 0,
      imageUrl: "https://images.unsplash.com/photo-1646558635973-500fef0833a7"
    },
    {
      id: "event-2",
      date: "2022-03-02",
      title: "UN General Assembly demands Russian withdrawal",
      source: "The Guardian",
      sourceUrl: "https://www.theguardian.com/world/2022/mar/02/united-nations-russia-ukraine-vote",
      excerpt: "The UN General Assembly votes overwhelmingly to demand Russia immediately withdraw from Ukraine. The resolution is supported by 141 countries.",
      detailLevel: 1
    },
    {
      id: "event-3",
      date: "2022-03-16",
      title: "Mariupol Theater bombing",
      source: "Reuters",
      sourceUrl: "https://www.reuters.com/world/europe/mariupol-theatre-bombing",
      excerpt: "Russian forces bomb Mariupol Drama Theater, which was serving as a civilian shelter. The building had 'CHILDREN' written in large letters visible from the sky.",
      detailLevel: 1,
      imageUrl: "https://images.unsplash.com/photo-1647533020932-3a1656c3c272"
    },
    {
      id: "event-4",
      date: "2022-04-08",
      title: "Kramatorsk railway station attack",
      source: "Reuters",
      sourceUrl: "https://www.reuters.com/world/europe/ukraine-station-strike",
      excerpt: "Russian missile strike on Kramatorsk railway station kills at least 57 people attempting to evacuate. The station was a crucial evacuation point for civilians.",
      detailLevel: 1
    },
    {
      id: "event-5",
      date: "2022-09-30",
      title: "Russia annexes four Ukrainian regions",
      source: "Al Jazeera",
      sourceUrl: "https://www.aljazeera.com/news/2022/9/30/russia-to-formally-annex-four-more-areas-of-ukraine",
      excerpt: "Putin signs treaties to annex Donetsk, Luhansk, Kherson and Zaporizhia despite international condemnation. The move is declared illegal by the international community.",
      detailLevel: 0,
      imageUrl: "https://images.unsplash.com/photo-1665499851795-bc93fc49c694"
    },
    {
      id: "event-6",
      date: "2022-11-11",
      title: "Liberation of Kherson",
      source: "CNN",
      sourceUrl: "https://www.cnn.com/2022/11/11/europe/ukraine-kherson-russia-withdrawal-intl/index.html",
      excerpt: "Ukrainian forces recapture Kherson, the only regional capital seized by Russia since the invasion began. Russian forces withdraw to the east bank of the Dnipro River.",
      detailLevel: 0,
      imageUrl: "https://images.unsplash.com/photo-1668627297477-d7041b222b04"
    },
    {
      id: "event-7",
      date: "2023-05-01",
      title: "Drone attack on Kremlin",
      source: "Reuters",
      sourceUrl: "https://www.reuters.com/world/europe/drone-attack-kremlin",
      excerpt: "Moscow accuses Ukraine of a drone attack on the Kremlin, allegedly targeting President Putin. Ukraine denies involvement in the incident.",
      detailLevel: 1
    },
    {
      id: "event-8",
      date: "2023-06-06",
      title: "Nova Kakhovka dam collapse",
      source: "NPR",
      sourceUrl: "https://www.npr.org/2023/06/06/1180391328/ukraine-nova-kakhovka-dam-kherson",
      excerpt: "The Nova Kakhovka dam on the Dnipro River collapses, causing massive flooding and a humanitarian crisis. Both sides accuse each other of destroying the dam.",
      detailLevel: 0,
      imageUrl: "https://images.unsplash.com/photo-1686083690954-26852acb5389"
    },
    {
      id: "event-9",
      date: "2023-08-23",
      title: "Wagner Group leader Prigozhin dies in plane crash",
      source: "Associated Press",
      sourceUrl: "https://apnews.com/article/prigozhin-plane-crash-wagner-putin-russia-858f1e708744b8e27c3d394d1d784bfd",
      excerpt: "Wagner Group chief Yevgeny Prigozhin and top lieutenants die in a plane crash north of Moscow, two months after their failed mutiny against Russian military leadership.",
      detailLevel: 0
    },
    {
      id: "event-10",
      date: "2024-02-17",
      title: "Fall of Avdiivka",
      source: "Washington Post",
      sourceUrl: "https://www.washingtonpost.com/world/2024/02/17/avdiivka-russia-ukraine-war/",
      excerpt: "Ukrainian forces withdraw from the eastern city of Avdiivka after months of intense fighting, marking Russia's first significant territorial gain in nearly a year.",
      detailLevel: 0,
      imageUrl: "https://images.unsplash.com/photo-1708156794532-7b22466c5ef8"
    },
    {
      id: "event-11",
      date: "2024-04-10",
      title: "US approves major aid package",
      source: "New York Times",
      sourceUrl: "https://www.nytimes.com/2024/04/10/us/politics/biden-ukraine-aid-package.html",
      excerpt: "After months of delay, the US Congress approves a $61 billion aid package for Ukraine, including crucial military and economic assistance.",
      detailLevel: 0
    },
    {
      id: "event-12",
      date: "2024-03-15",
      title: "Russia intensifies attacks on Ukrainian energy infrastructure",
      source: "Reuters",
      sourceUrl: "https://www.reuters.com/world/europe/russia-strikes-ukraine-energy-infrastructure",
      excerpt: "Russian forces launch widespread missile and drone attacks targeting Ukraine's power plants and electrical grid, causing significant disruptions to civilian infrastructure.",
      detailLevel: 1,
      imageUrl: "https://images.unsplash.com/photo-1646558590477-eb38b96993c8"
    },
    {
      id: "event-13",
      date: "2024-03-22",
      title: "Ukraine receives advanced air defense systems",
      source: "Associated Press",
      sourceUrl: "https://apnews.com/article/ukraine-air-defense-systems",
      excerpt: "Western allies deliver new air defense systems to Ukraine, significantly enhancing its capability to protect civilian areas from Russian missile attacks.",
      detailLevel: 1
    },
    {
      id: "event-14",
      date: "2024-04-05",
      title: "Major cyberattack disrupts Ukrainian government services",
      source: "The Guardian",
      sourceUrl: "https://www.theguardian.com/world/2024/apr/05/ukraine-cyber-attack",
      excerpt: "Ukrainian government websites and digital services face sophisticated cyberattack, suspected to be coordinated with Russian military operations.",
      detailLevel: 2
    }
  ]
};
