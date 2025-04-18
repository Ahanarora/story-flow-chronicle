export interface NewsEvent {
  id: string;
  date: string;
  title: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  detailLevel: number; // 0-2, where 0 is most important
  imageUrl?: string;
}

export interface NewsTheme {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  imageUrl?: string;
  updatedAt: string;
  events: NewsEvent[];
}

export const newsThemes: NewsTheme[] = [
  {
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
  },
  {
    id: "ai-development",
    title: "AI Technology Developments",
    description: "Progress and milestones in artificial intelligence research and deployment",
    category: "Technology",
    subcategory: "Artificial Intelligence",
    imageUrl: "https://images.unsplash.com/photo-1677442135085-20750b4b6a41",
    updatedAt: "2025-04-16",
    events: [
      {
        id: "ai-event-1",
        date: "2022-11-30",
        title: "OpenAI releases ChatGPT",
        source: "TechCrunch",
        sourceUrl: "https://techcrunch.com/2022/11/30/openai-launches-chatgpt/",
        excerpt: "OpenAI releases ChatGPT, a conversational AI model that gains over a million users in its first week.",
        detailLevel: 0
      },
      {
        id: "ai-event-2",
        date: "2023-02-07",
        title: "Microsoft integrates ChatGPT into Bing",
        source: "The Verge",
        sourceUrl: "https://www.theverge.com/2023/2/7/23587454/microsoft-bing-edge-chatgpt-ai",
        excerpt: "Microsoft announces a new version of Bing powered by an upgraded version of ChatGPT.",
        detailLevel: 1
      },
      {
        id: "ai-event-3",
        date: "2023-03-14",
        title: "OpenAI releases GPT-4",
        source: "WIRED",
        sourceUrl: "https://www.wired.com/story/openai-gpt-4/",
        excerpt: "OpenAI launches GPT-4, demonstrating human-level performance on various professional and academic benchmarks.",
        detailLevel: 0
      },
      {
        id: "ai-event-4",
        date: "2023-05-10",
        title: "Sam Altman testifies before Congress on AI regulation",
        source: "CNBC",
        sourceUrl: "https://www.cnbc.com/2023/05/10/openai-ceo-sam-altman-testifies-to-congress-on-ai-regulation.html",
        excerpt: "OpenAI CEO Sam Altman urges Congress to regulate artificial intelligence during Senate hearing.",
        detailLevel: 1
      },
      {
        id: "ai-event-5",
        date: "2023-07-21",
        title: "Tech leaders sign statement on AI extinction risk",
        source: "BBC",
        sourceUrl: "https://www.bbc.com/news/technology-66283168",
        excerpt: "Over 350 AI industry leaders sign statement warning of extinction risk from AI.",
        detailLevel: 2
      },
      {
        id: "ai-event-6",
        date: "2023-10-30",
        title: "Biden issues executive order on AI safety",
        source: "The White House",
        sourceUrl: "https://www.whitehouse.gov/briefing-room/statements-releases/2023/10/30/fact-sheet-president-biden-issues-executive-order-on-safe-secure-and-trustworthy-artificial-intelligence/",
        excerpt: "President Biden signs executive order establishing new AI safety standards and research initiatives.",
        detailLevel: 1
      },
      {
        id: "ai-event-7",
        date: "2024-01-15",
        title: "Claude 3 achieves new benchmarks in reasoning",
        source: "MIT Technology Review",
        sourceUrl: "https://www.technologyreview.com/2024/01/15/anthropic-claude-3-ai/",
        excerpt: "Anthropic's Claude 3 sets new performance standards in complex reasoning and instruction-following tasks.",
        detailLevel: 2
      },
      {
        id: "ai-event-8",
        date: "2024-03-25",
        title: "EU AI Act becomes law",
        source: "Politico",
        sourceUrl: "https://www.politico.eu/article/eu-ai-act-regulation-law-europe/",
        excerpt: "The European Union's comprehensive AI regulation comes into effect, setting global regulatory standards.",
        detailLevel: 0
      },
      {
        id: "ai-event-9",
        date: "2024-04-01",
        title: "Major breakthrough in AI language understanding",
        source: "MIT Technology Review",
        sourceUrl: "https://www.technologyreview.com/2024/04/01/ai-language-understanding",
        excerpt: "Researchers demonstrate new AI model capable of understanding and generating complex metaphors and cultural references with human-like accuracy.",
        detailLevel: 1,
        imageUrl: "https://images.unsplash.com/photo-1677442135068-c2ac9f534c96"
      },
      {
        id: "ai-event-10",
        date: "2024-04-10",
        title: "AI system achieves medical diagnosis milestone",
        source: "Nature",
        sourceUrl: "https://www.nature.com/articles/d41586-024-01123-7",
        excerpt: "New AI diagnostic system demonstrates superior accuracy in identifying rare diseases compared to human medical experts.",
        detailLevel: 2
      },
      {
        id: "ai-event-11",
        date: "2024-04-15",
        title: "Global AI safety summit announces new guidelines",
        source: "Financial Times",
        sourceUrl: "https://www.ft.com/content/ai-safety-summit-2024",
        excerpt: "Leading AI companies and governments agree on new set of binding safety protocols for AI development and deployment.",
        detailLevel: 0,
        imageUrl: "https://images.unsplash.com/photo-1677442135085-20750b4b6a41"
      }
    ]
  },
  {
    id: "climate-crisis",
    title: "Global Climate Crisis",
    description: "Ongoing developments in climate change science, policy, and impacts",
    category: "Environment",
    subcategory: "Climate Change",
    imageUrl: "https://images.unsplash.com/photo-1621486872777-e8cf78d6508d",
    updatedAt: "2025-04-12",
    events: [
      {
        id: "climate-event-1",
        date: "2022-03-01",
        title: "IPCC warns climate risks arriving faster than expected",
        source: "UN News",
        sourceUrl: "https://news.un.org/en/story/2022/02/1112852",
        excerpt: "UN climate report warns about irreversible climate impacts already affecting billions worldwide.",
        detailLevel: 0
      },
      {
        id: "climate-event-2",
        date: "2022-08-16",
        title: "US passes Inflation Reduction Act with climate provisions",
        source: "NPR",
        sourceUrl: "https://www.npr.org/2022/08/16/1117418111/climate-change-bill-inflation-reduction-act",
        excerpt: "US passes largest climate investment in history with $369 billion for climate initiatives.",
        detailLevel: 0
      },
      {
        id: "climate-event-3",
        date: "2023-07-03",
        title: "Earth experiences hottest day on record",
        source: "The Guardian",
        sourceUrl: "https://www.theguardian.com/environment/2023/jul/03/hottest-day-record-global-temperature-climate-crisis",
        excerpt: "Global average temperature reaches 17.01°C, breaking previous record as heatwaves intensify worldwide.",
        detailLevel: 1
      },
      {
        id: "climate-event-4",
        date: "2023-11-30",
        title: "COP28 climate summit begins in Dubai",
        source: "Reuters",
        sourceUrl: "https://www.reuters.com/business/environment/cop28-what-expect-un-climate-talks-dubai-2023-11-28/",
        excerpt: "UN climate conference begins with countries debating fossil fuel phaseout and climate finance.",
        detailLevel: 1
      },
      {
        id: "climate-event-5",
        date: "2023-12-13",
        title: "COP28 reaches landmark agreement on fossil fuels",
        source: "BBC",
        sourceUrl: "https://www.bbc.com/news/science-environment-67689773",
        excerpt: "Nations agree to transition away from fossil fuels in first explicit mention in climate accord.",
        detailLevel: 0
      },
      {
        id: "climate-event-6",
        date: "2024-02-08",
        title: "Antarctic sea ice hits record low again",
        source: "NASA",
        sourceUrl: "https://climate.nasa.gov/news/3278/antarctic-sea-ice-hits-record-low-again/",
        excerpt: "Antarctic sea ice extent reaches record minimum for second consecutive year, concerning scientists.",
        detailLevel: 2
      },
      {
        id: "climate-event-7",
        date: "2024-03-01",
        title: "Record-breaking heat waves sweep global south",
        source: "The Guardian",
        sourceUrl: "https://www.theguardian.com/environment/2024/mar/01/global-heatwave-records",
        excerpt: "Multiple countries report unprecedented temperatures, raising concerns about accelerating climate change impacts.",
        detailLevel: 0,
        imageUrl: "https://images.unsplash.com/photo-1621486872777-e8cf78d6508d"
      },
      {
        id: "climate-event-8",
        date: "2024-03-15",
        title: "Major carbon capture breakthrough announced",
        source: "Scientific American",
        sourceUrl: "https://www.scientificamerican.com/article/carbon-capture-breakthrough-2024",
        excerpt: "Scientists develop more efficient and cost-effective carbon capture technology, potentially accelerating climate change mitigation efforts.",
        detailLevel: 1
      },
      {
        id: "climate-event-9",
        date: "2024-04-01",
        title: "Global renewable energy investment hits new record",
        source: "Bloomberg",
        sourceUrl: "https://www.bloomberg.com/news/articles/2024-04-01/renewable-energy-investment-record",
        excerpt: "Worldwide investment in renewable energy projects reaches unprecedented levels, driven by falling costs and policy support.",
        detailLevel: 1,
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7"
      },
      {
        id: "climate-event-10",
        date: "2024-04-12",
        title: "Arctic sea ice extent hits critical low",
        source: "NASA Earth Observatory",
        sourceUrl: "https://earthobservatory.nasa.gov/images/arctic-sea-ice-2024",
        excerpt: "Satellite data shows Arctic sea ice reaching historically low levels, indicating accelerating polar warming.",
        detailLevel: 2,
        imageUrl: "https://images.unsplash.com/photo-1534786875954-48c5ebe99187"
      }
    ]
  }
];

export const getThemes = () => {
  return newsThemes;
};

export const getThemeById = (id: string) => {
  return newsThemes.find(theme => theme.id === id);
};

export const getFilteredEvents = (themeId: string, detailLevel: number) => {
  const theme = getThemeById(themeId);
  if (!theme) return [];
  return theme.events
    .filter(event => event.detailLevel <= detailLevel)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getCategories = () => {
  const categories = new Set(newsThemes.map(theme => theme.category));
  return Array.from(categories);
};
