export type Question = {
  id: number;
  motive: string;
  question: string;
};

export type Questions = Question[];

export type Item = {
  id: number;
  title: string;
  description?: string;
  author: string | null;
  period: string;
  externalResources?: {
    title: string;
    url: string;
    type?: "video" | "article";
  }[];
  questions: Questions | null;
};

export type Items = Item[];

export const appData: Items = [
  {
    id: 1,
    title: "Biblia",
    author: null,
    description:
      "Zbiór ksiąg religijnych judaizmu i chrześcijaństwa. Składa się z dwóch części: Starego i Nowego Testamentu. Biblia jest jednym z najważniejszych dzieł literatury światowej. Zawiera m.in. opowieści o stworzeniu świata, historię Izraela, życie i nauczanie Jezusa Chrystusa.",
    period: "Starożytność",
    externalResources: [
      {
        title: "Księga Hioba - omówienie",
        url: "https://www.youtube.com/watch?v=uTo5Myd_M0w",
        type: "video",
      },
    ],
    questions: [
      {
        id: 1,
        motive: "Cierpienie niezawinione",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Księgi Hioba. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Niestałość świata",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Księgi Koheleta. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Koniec świata",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Apokalipsy św. Jana. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
  {
    id: 2,
    title: "Mitologia (cz. I Grecja)",
    author: "Jan Parandowski",
    description:
      "Zbiór opowieści o bogach i herosach starożytnej Grecji, ukazujący ich losy, relacje i wpływ na kulturę europejską. Mitologia była podstawą wierzeń i inspiracją dla sztuki i literatury. ",
    period: "Starożytność",
    questions: [
      {
        id: 1,
        motive: "Poświęcenie w imię wyższych wartości",
        question:
          "Omów zagadnienie na podstawie Mitologii (cz. I Grecja) Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Wina i kara",
        question:
          "Omów zagadnienie na podstawie Mitologii (cz. I Grecja) Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Miłość silniejsza niż śmierć",
        question:
          "Omów zagadnienie na podstawie Mitologii (cz. I Grecja) Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
  {
    id: 3,
    title: "Iliada",
    author: "Homer",
    description:
      "Epos grecki opisujący wydarzenia wojny trojańskiej, skupiający się na losach Achillesa. Przedstawia bohaterstwo, gniew i losy ludzi wplecione w wolę bogów.",
    period: "Starożytność",
    questions: [
      {
        id: 1,
        motive: "Heroizm",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Iliady Homera. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
  {
    id: 4,
    title: "Antygona",
    author: "Sofokles",
    description:
      "Tragedia grecka przedstawiająca konflikt między prawem boskim a ludzkim. Antygona buntuje się przeciwko władzy, kierując się poczuciem obowiązku wobec rodziny.",
    period: "Starożytność",
    questions: [
      {
        id: 1,
        motive: "Konflikt racji moralnych",
        question:
          "Omów zagadnienie na podstawie Antygony Sofoklesa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Człowiek wobec przeznaczenia",
        question:
          "Omów zagadnienie na podstawie Antygony Sofoklesa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
  {
    id: 5,
    title: "Rozmowa Mistrza Polikarpa ze Śmiercią",
    author: "Anonim",
    description:
      "Średniowieczny utwór ukazujący dialog człowieka ze Śmiercią, który przedstawia motyw danse macabre i nieuchronność śmierci. ",
    period: "Średniowiecze",
    questions: [
      {
        id: 1,
        motive: "Taniec śmierci",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Rozmowy Mistrza Polikarpa ze Śmiercią. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
  {
    id: 6,
    title: "Pieśń o Rolandzie",
    author: "Anonim",
    description:
      "Epos rycerski opisujący losy Rolanda i jego lojalność wobec króla Karola Wielkiego. Ukazuje etos rycerski, poświęcenie i honor w walce. ",
    period: "Średniowiecze",
    questions: [
      {
        id: 1,
        motive: "Etos rycerski",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Pieśni o Rolandzie. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
  {
    id: 7,
    title: "Makbet",
    author: "William Szekspir",
    description:
      "Tragedia przedstawiająca historię Makbeta, którego ambicja i żądza władzy prowadzą do moralnego upadku. Ukazuje wpływ losu i manipulacji na decyzje człowieka. ",
    period: "Renesans",
    questions: [
      {
        id: 1,
        motive: "Moralna odpowiedzialność za czyny",
        question:
          "Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Czy człowiek decyduje o własnym losie?",
        question:
          "Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Wpływ władzy na człowieka",
        question:
          "Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
  },
];
