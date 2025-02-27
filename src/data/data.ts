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
  questions?: Questions;
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
    externalResources: [
      {
        title: "Mitologia grecka - Streszczenie na DlaUcznia.pl",
        url: "https://www.dlaucznia.pl/lekcja/jezyk-polski,nauka-o-literaturze,antyk,antyk-lektury,jan-parandowski-mitologia-grecka-streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie Mitologii Parandowskiego na Knowunity",
        url: "https://knowunity.pl/knows/jzyk-polski-mitologia-jan-parandowski-streszczenia-mitw-be0f2a32-ff6f-4543-862e-5227a9cebf8b",
        type: "article",
      },
      {
        title: "Mitologia grecka - Streszczenie na Bryk.pl",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/antyk-i-biblia/3228-streszczenie-najwazniejszych-mitow-na-podstawie-mitologii-jana-parandowskiego.html",
        type: "article",
      },
      {
        title:
          "Mitologia J. Parandowski (tom I Grecja) - Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=BxgcEiU9q4g",
        type: "video",
      },
      {
        title: "Mitologia grecka - Najważniejsze mity na Edziecko.pl",
        url: "https://www.edziecko.pl/starsze_dziecko/7,79351,29704677,mitologia-parandowski-najwazniejsze-mity-poznaj-ich-streszczenia.html",
        type: "article",
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
    externalResources: [
      {
        title: "Opracowanie Iliady",
        url: "https://poezja.org/wz/zbior/Iliada/",
        type: "article",
      },
      {
        title: "Streszczenie Iliady",
        url: "https://poezja.org/wz/interpretacja/3103/Iliada",
        type: "article",
      },
      {
        title: "Motywy literackie w Iliadzie",
        url: "https://poezja.org/wz/interpretacja/3642/Iliada_motywy_literackie",
        type: "article",
      },
      {
        title: "Pojedynek Hektora z Achillesem",
        url: "https://poezja.org/wz/interpretacja/5881/Pojedynek_Hektora_z_Achillesem_streszczenie_i_opis",
        type: "article",
      },
      {
        title: "Bohaterowie Iliady",
        url: "https://poezja.org/wz/interpretacja/8119/Iliada_bohaterowie",
        type: "article",
      },
      {
        title: "Iliada - Streszczenie krótkie na Bryk.pl",
        url: "https://www.bryk.pl/lektury/homer/iliada.streszczenie-krotkie",
        type: "article",
      },
      {
        title: "Iliada - Streszczenie i cechy eposu",
        url: "https://www.youtube.com/watch?v=a7jIu9mM3tw",
        type: "video",
      },
      {
        title: "Iliada - Streszczenie eposu",
        url: "https://www.youtube.com/watch?v=OMdvJyRJNq4",
        type: "video",
      },
      {
        title: "Homer „Iliada” - Streszczenie i opracowanie w pigułce",
        url: "https://www.youtube.com/watch?v=kAWph2o3KjM",
        type: "video",
      },
      {
        title: "Streszczenie z grubsza... HOMER - ILIADA",
        url: "https://www.youtube.com/watch?v=IjzPIfVCAas",
        type: "video",
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
    externalResources: [
      {
        title: "AleKlasa",
        url: "https://aleklasa.pl/liceum/c300-lektury/antygona-tragedia",
        type: "article",
      },
      {
        title: "Opracowanie szczegółowe",
        url: "https://www.bryk.pl/lektury/sofokles/antygona.problematyka",
        type: "article",
      },
      {
        title: "Antygona - Streszczenie",
        url: "https://www.dlaucznia.pl/lekcja/jezyk-polski,nauka-o-literaturze,antyk,antyk-lektury,sofokles-antygona-streszczenie",
        type: "article",
      },
      {
        title: "Antygona - Streszczenie",
        url: "https://poezja.org/wz/interpretacja/3603/Antygona_streszczenie",
        type: "article",
      },
      {
        title: "Antygona - Krótkie streszczenie",
        url: "https://klp.pl/antygona/a-11088.html",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie",
        url: "https://www.youtube.com/watch?v=zgE439C3dO8&ab_channel=Maturanamaksa%21",
        type: "video",
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
    externalResources: [
      {
        title: "Streszczenie szczegółowe",
        url: "https://www.bryk.pl/lektury/nieznany/rozmowa-mistrza-polikarpa-ze-smiercia.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Interpretacja utworu",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/wiersze/1010696-rozmowa-mistrza-polikarpa-ze-smiercia-interpretacja-utworu.html",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/5085/Rozmowa_mistrza_Polikarpa_ze_Smiercia_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i omówienie",
        url: "https://babaodpolskiego.pl/rozmowa-mistrza-polikarpa-ze-smiercia-streszczenie-i-omowienie/",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=T-w5nxDTYZ8",
        type: "video",
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
    externalResources: [
      {
        title: "Streszczenie szczegółowe na Bryk.pl",
        url: "https://www.bryk.pl/lektury/nieznany/piesn-o-rolandzie.streszczenie-krotkie",
        type: "article",
      },
      {
        title: "Streszczenie na Setkazpolaka.pl",
        url: "https://setkazpolaka.pl/piesn-o-rolandzie-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie na Epoki-literackie.pl",
        url: "https://www.epoki-literackie.pl/sredniowiecze/piesn-o-rolandzie-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=8f-1KLoDM2g",
        type: "video",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=R7MisZ31sgc",
        type: "video",
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
    externalResources: [
      {
        title: "Makbet - Streszczenie szczegółowe na Bryk.pl",
        url: "https://www.bryk.pl/lektury/william-szekspir/makbet.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Makbet - Streszczenie krótkie na KLP.pl",
        url: "https://klp.pl/makbet/a-5944.html",
        type: "article",
      },
      {
        title: "Makbet - Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3655/Makbet_streszczenie",
        type: "article",
      },
      {
        title: "Makbet - Streszczenie i opracowanie w 5 minut na YouTube",
        url: "https://www.youtube.com/watch?v=IiUcjRBh4dg",
        type: "video",
      },
      {
        title: "Makbet w 10 minut na YouTube",
        url: "https://www.youtube.com/watch?v=Ii1tXCQQO7w",
        type: "video",
      },
    ],
  },
  {
    id: 9,
    title: "Skąpiec",
    author: "Molier",
    period: "Barok",
  },
  {
    id: 10,
    title: "Satyra (wybrana)",
    author: "Ignacy Krasicki",
    period: "Oświecenie",
  },
  {
    id: 11,
    title: "Romantyczność",
    author: "Adam Mickiewicz",
    period: "Romantyzm",
  },
  {
    id: 12,
    title: "Dziady cz. III",
    author: "Adam Mickiewicz",
    period: "Romantyzm",
  },
  {
    id: 13,
    title: "Lalka",
    author: "Bolesław Prus",
    period: "Pozytywizm",
  },
  {
    id: 14,
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    period: "Realizm",
  },
  {
    id: 15,
    title: "Wesele",
    author: "Stanisław Wyspiański",
    period: "Młoda Polska",
  },
  {
    id: 16,
    title: "Przedwiośnie",
    author: "Stefan Żeromski",
    period: "Dwudziestolecie międzywojenne",
  },
  {
    id: 17,
    title: "Sklepy cynamonowe (opowiadanie)",
    author: "Bruno Schulz",
    period: "Dwudziestolecie międzywojenne",
  },
  {
    id: 18,
    title: "Dżuma",
    author: "Albert Camus",
    period: "Literatura współczesna",
  },
  {
    id: 19,
    title: "Rok 1984",
    author: "George Orwell",
    period: "Literatura współczesna",
  },
  {
    id: 20,
    title: "Tango",
    author: "Sławomir Mrożek",
    period: "Literatura współczesna",
  },
  {
    id: 21,
    title: "Zdążyć przed Panem Bogiem",
    author: "Hanna Krall",
    period: "Literatura współczesna",
  },
];
