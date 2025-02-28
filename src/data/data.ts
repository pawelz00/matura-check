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
        title: "Streszczenie szczegółowe na Bryk.pl",
        url: "https://www.bryk.pl/lektury/william-szekspir/makbet.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie krótkie na KLP.pl",
        url: "https://klp.pl/makbet/a-5944.html",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3655/Makbet_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie w 5 minut na YouTube",
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
    externalResources: [
      {
        title: "Streszczenie szczegółowe na Bryk.pl",
        url: "https://www.bryk.pl/lektury/molier/skapiec.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/molier-skapiec-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3905/Skapiec_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie obrazkowe na YouTube",
        url: "https://www.youtube.com/watch?v=tNEUEhcksp0",
        type: "video",
      },
      {
        title: "Opracowanie i streszczenie na Baba od polskiego",
        url: "https://babaodpolskiego.pl/molier-skapiec-opracowanie-i-streszczenie/",
        type: "article",
      },
    ],
  },
  {
    id: 10,
    title: "Satyra (wybrana)",
    author: "Ignacy Krasicki",
    period: "Oświecenie",
    externalResources: [
      {
        title: "Streszczenie i analiza na Bryk.pl",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/wiersze/1010736-satyry-ignacego-krasickiego-analiza-i-interpretacja.html",
        type: "article",
      },
      {
        title: "Omówienie na DlaUcznia.pl",
        url: "https://www.dlaucznia.pl/lekcja/jezyk-polski,nauka-o-literaturze,oswiecenie,oswiecenie-lektury,ignacy-krasicki-satyry",
        type: "article",
      },
      {
        title: "Teksty na WolneLektury.pl",
        url: "https://wolnelektury.pl/katalog/lektura/satyry/",
        type: "article",
      },
      {
        title: "Wybrane utwory na YouTube",
        url: "https://www.youtube.com/watch?v=0zQz8Z8zZqg",
        type: "video",
      },
      {
        title: "Knowunity",
        url: "https://knowunity.pl/knows/jzyk-polski-satyry-ignacego-krasickiego-dd24cf6f-f017-4ad1-ac9c-f0c18b056dfd",
        type: "article",
      },
    ],
  },
  {
    id: 11,
    title: "Romantyczność",
    author: "Adam Mickiewicz",
    period: "Romantyzm",
    externalResources: [
      {
        title: "Streszczenie i interpretacja na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3341/Romantycznosc",
        type: "article",
      },
      {
        title: "Streszczenie na Zasob.pl",
        url: "https://zasob.pl/jezyk-polski/romantycznosc-adama-mickiewicza-streszczenie/",
        type: "article",
      },
      {
        title: "Analiza i interpretacja na Baba od polskiego",
        url: "https://babaodpolskiego.pl/romantycznosc-analiza-i-interpretacja/",
        type: "article",
      },
      {
        title: "Streszczenie na Bryk.pl",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/streszczenia-i-plany-wydarzen/1001862-streszczenie-utworu-adama-mickiewicza-romantycznosc.html",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=Ula0WaOrSh0",
        type: "video",
      },
    ],
  },
  {
    id: 12,
    title: "Dziady cz. III",
    author: "Adam Mickiewicz",
    period: "Romantyzm",
    externalResources: [
      {
        title: "Streszczenie szczegółowe na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/dziady-cz-iii-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie krótkie na Bryk.pl",
        url: "https://www.bryk.pl/lektury/adam-mickiewicz/dziady-cz-iii.streszczenie-krotkie",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3706/Dziady_cz_III_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe na YouTube",
        url: "https://www.youtube.com/watch?v=vsLbg8RkDu0",
        type: "video",
      },
      {
        title: "Notatki i streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=dtZxwQ2JNXY",
        type: "video",
      },
    ],
  },
  {
    id: 13,
    title: "Lalka",
    author: "Bolesław Prus",
    period: "Pozytywizm",
    externalResources: [
      {
        title: "Streszczenie szczegółowe na Bryk.pl",
        url: "https://www.bryk.pl/lektury/boleslaw-prus/lalka.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/lalka-streszczenie-powiesc-boleslaw-prus/",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3668/Lalka_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie w 5 minut na YouTube",
        url: "https://www.youtube.com/watch?v=ovk96DcnnWw",
        type: "video",
      },
      {
        title: "Opracowanie do matury na StudniówkaMaturalna.pl",
        url: "https://studniowkamaturalna.pl/lalka-streszczenie-opracowanie-do-matury/",
        type: "article",
      },
    ],
  },
  {
    id: 14,
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    period: "Realizm",
    externalResources: [
      {
        title: "Streszczenie szczegółowe na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/zbrodnia-i-kara-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie na Bryk.pl",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/lektury/1011105-zbrodnia-i-kara-fiodor-dostojewski-streszczenie.html",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/4086/Zbrodnia_i_kara_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie rozszerzone na YouTube",
        url: "https://www.youtube.com/watch?v=0DlOMt8-GS8",
        type: "video",
      },
      {
        title: "Opracowanie do matury na Opracowania.pl",
        url: "https://opracowania.pl/opracowania/jezyk-polski/zbrodnia-i-kara-f-dostojewski,oid,428,streszczenie",
        type: "article",
      },
    ],
  },
  {
    id: 15,
    title: "Wesele",
    author: "Stanisław Wyspiański",
    period: "Młoda Polska",
    externalResources: [
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=H2etKrzBMKQ",
        type: "video",
      },
      {
        title: "Streszczenie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/wesele-streszczenie-stanislaw-wyspianski/",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na Baba od polskiego",
        url: "https://babaodpolskiego.pl/wesele-stanislaw-wyspianski/",
        type: "article",
      },
      {
        title:
          "Najważniejsze informacje do matury na WielkaPowtorkaMaturalna.pl",
        url: "https://wielkapowtorkamaturalna.pl/wesele-stanislaw-wyspianski/",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/4597/Wesele_streszczenie",
        type: "article",
      },
    ],
  },
  {
    id: 16,
    title: "Przedwiośnie",
    author: "Stefan Żeromski",
    period: "Dwudziestolecie międzywojenne",
    externalResources: [
      {
        title: "Streszczenie i opracowanie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/przedwiosnie-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie do matury na StudniówkaMaturalna.pl",
        url: "https://studniowkamaturalna.pl/przedwiosnie-streszczenie-opracowanie/",
        type: "article",
      },
      {
        title: "Streszczenie na Baba od polskiego",
        url: "https://babaodpolskiego.pl/stefan-zeromski-przedwiosnie-streszczenie-i-opracowanie/",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie w 5 minut na YouTube",
        url: "https://www.youtube.com/watch?v=xvwmIM-ypUY",
        type: "video",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/4027/Przedwiosnie_streszczenie",
        type: "article",
      },
    ],
  },
  {
    id: 17,
    title: "Sklepy cynamonowe (opowiadanie)",
    author: "Bruno Schulz",
    period: "Dwudziestolecie międzywojenne",
    externalResources: [
      {
        title: "Streszczenie na Ostatni Dzwonek",
        url: "https://ostatnidzwonek.pl/sklepy-cynamonowe/a-11423.html",
        type: "article",
      },
      {
        title: "Streszczenie i bohaterowie na Knowunity",
        url: "https://knowunity.pl/knows/jzyk-polski-sklepy-cynamonowe-74452cd3-46b2-4a33-9b52-6d36f25fba2c",
        type: "article",
      },
      {
        title: "Streszczenie na KLP.pl",
        url: "https://klp.pl/sklepy-cynamonowe/a-5892.html",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/5352/Sklepy_cynamonowe_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=F866SUmiaXs",
        type: "video",
      },
    ],
  },
  {
    id: 18,
    title: "Dżuma",
    author: "Albert Camus",
    period: "Literatura współczesna",
    externalResources: [
      {
        title: "Streszczenie szczegółowe na Bryk.pl",
        url: "https://www.bryk.pl/lektury/albert-camus/dzuma.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/dzuma-bohaterowie-streszczenie-opracowanie/",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/4311/Dzuma_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=q2pRKP2rp2w",
        type: "video",
      },
      {
        title: "Streszczenie na Ortograf.pl",
        url: "https://www.ortograf.pl/lektury/dzuma-streszczenie",
        type: "article",
      },
    ],
  },
  {
    id: 19,
    title: "Rok 1984",
    author: "George Orwell",
    period: "Literatura współczesna",
    externalResources: [
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/4930/Rok_1984_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie na maturę na WielkaPowtorkaMaturalna.pl",
        url: "https://wielkapowtorkamaturalna.pl/rok-1984-streszczenie-na-mature/",
        type: "article",
      },
      {
        title: "Streszczenie na Knowunity",
        url: "https://knowunity.pl/knows/jzyk-polski-rok-1984-8047b725-df56-4e56-a052-b580eb780189",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=4MyFBy4qZ78",
        type: "video",
      },
      {
        title: "Streszczenie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/rok-1984-streszczenie/",
        type: "article",
      },
    ],
  },
  {
    id: 20,
    title: "Tango",
    author: "Sławomir Mrożek",
    period: "Literatura współczesna",
    externalResources: [
      {
        title: "Streszczenie i opracowanie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/tango-streszczenie-slawomir-mrozek/",
        type: "article",
      },
      {
        title: "Streszczenie, bohaterowie i problematyka na StrefaEdukacji.pl",
        url: "https://strefaedukacji.pl/tango-slawomira-mrozka-streszczenie-bohaterowie-problematyka-lektura-obowiazkowa-na-mature-2024/ar/c5-17103065",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/3708/Tango_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=LnVJipaq_Uo",
        type: "video",
      },
      {
        title: "Streszczenie szczegółowe na KLP.pl",
        url: "https://klp.pl/tango/a-5658.html",
        type: "article",
      },
    ],
  },
  {
    id: 21,
    title: "Zdążyć przed Panem Bogiem",
    author: "Hanna Krall",
    period: "Literatura współczesna",
    externalResources: [
      {
        title: "Streszczenie i opracowanie",
        url: "https://setkazpolaka.pl/zdazyc-przed-panem-bogiem/",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie",
        url: "https://babaodpolskiego.pl/hanna-krall-zdazyc-przed-panem-bogiem/",
        type: "article",
      },
      {
        title: "Streszczenie, bohaterowie",
        url: "https://knowunity.pl/knows/jzyk-polski-zdy-przed-panem-bogiem-58ba2988-fe8d-48af-8126-e2a3614d3853",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe",
        url: "https://www.bryk.pl/lektury/hanna-krall/zdazyc-przed-panem-bogiem.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/4987/Zdazyc_przed_Panem_Bogiem_streszczenie",
        type: "article",
      },
    ],
  },
];
