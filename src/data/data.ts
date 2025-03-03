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
      "Zbiór świętych ksiąg, który stanowi fundament dla judaizmu i chrześcijaństwa. Składa się z dwóch głównych części: Starego Testamentu i Nowego Testamentu. Stary Testament opowiada o stworzeniu świata, historii Izraela, przymierzach Boga z ludźmi, a także o prorokach i prawach moralnych. Nowy Testament koncentruje się na życiu, naukach, śmierci i zmartwychwstaniu Jezusa Chrystusa oraz początkach Kościoła chrześcijańskiego. Biblia jest źródłem duchowego nauczania, moralności, a także inspiracją dla literatury, sztuki i filozofii na przestrzeni wieków.",
    period: "Starożytność",
    externalResources: [
      {
        title: "Księga Hioba - omówienie",
        url: "https://www.youtube.com/watch?v=uTo5Myd_M0w",
        type: "video",
      },
      {
        title: "Wiadomości ogólne",
        url: "https://www.bryk.pl/lektury/nieznany/biblia.wiadomosci-ogolne",
        type: "article",
      },
      {
        title: "Epoki literackie",
        url: "https://www.epoki-literackie.pl/starozytnosc/biblia/",
        type: "article",
      },
      {
        title: "Biblia - streszczenie i opracowanie",
        url: "https://www.youtube.com/watch?v=znHYLu4sdZU&ab_channel=PracowniaLiteracka",
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
      "Zbiór opowieści o bogach, herosach i mitycznych wydarzeniach, które kształtowały starożytną Grecję. Autor przedstawia bogów Olimpijskich, takich jak Zeus, Hera, Atena czy Apollo, oraz ich wpływ na losy ludzi. Opisuje także historie legendarnych bohaterów, jak Herkules, Perseusz czy Odyseusz, którzy przeżywają niezwykłe przygody i zmagają się z boskimi i ludzkimi przeciwnościami. Parandowski ukazuje, jak mitologia grecka kształtowała wierzenia, wartości i wyobrażenia o świecie starożytnych Greków, pozostając fundamentem dla literatury, sztuki i kultury Zachodu.",
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
      "Epicki poemat, który opowiada o wydarzeniach podczas ostatniego roku wojny trojańskiej. Głównym tematem jest gniew Achillesa, najdzielniejszego z greckich wojowników, który z powodu obrazy jego honoru wycofuje się z walki, co ma tragiczne konsekwencje dla całej armii greckiej. Poemat ukazuje nie tylko dramatyczne wydarzenia wojenne, ale również refleksje nad losem, boską interwencją, bohaterstwem, honorami oraz przemijaniem życia. Homer w Iliadzie przedstawia wojną jako tło dla ukazania ludzkich emocji, ambicji i tragicznych dylematów, będąc jednym z fundamentów literatury zachodniej.",
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
      "Tragedia grecka ukazująca konflikt między prawem boskim a ludzkim. Tytułowa bohaterka sprzeciwia się władcy Teb, Kreonowi, chcąc pochować swojego brata zgodnie z nakazami religijnymi. Jej bunt prowadzi do tragicznych konsekwencji, ukazując cenę wierności własnym przekonaniom. Dramat porusza tematy władzy, moralności i lojalności, stawiając pytania o granice posłuszeństwa wobec prawa.",
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
      "Dialog filozoficzny, który porusza temat nieuchronności śmierci i ludzkiego losu. Mistrz Polikarp, starszy mężczyzna, spotyka Śmierć, która przychodzi po niego, ale próbuje negocjować, szukając sposobu na uniknięcie tego losu. W rozmowie z personifikowaną Śmiercią, Polikarp wyraża lęk i sprzeciw wobec nieuchronności śmierci, jednocześnie starając się zrozumieć jej sens. Utwór podejmuje tematykę ludzkiej słabości, przemijania oraz stawiania oporu wobec nieuniknionego końca. Kochanowski w tym dziele łączy elementy filozoficzne z poetycką refleksją nad naturą śmierci i życiem człowieka.",
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
      "Epos rycerski, który opowiada o bohaterskiej śmierci Rolandza, jednego z najodważniejszych rycerzy Karola Wielkiego. Akcja utworu toczy się podczas wojny z Saracenami, a tytułowy bohater staje się symbolem lojalności, honoru i poświęcenia. Roland, nie chcąc zdradzić swoich towarzyszy, nie ostrzega Karola o nadchodzącym niebezpieczeństwie, co prowadzi do jego tragicznej śmierci. Epos porusza tematy honoru, lojalności wobec władcy, a także poświęcenia dla dobra ojczyzny. “Pieśń o Rolandzie” jest jednym z najstarszych i najważniejszych dzieł literatury francuskiej, będąc symbolem rycerskich cnót i średniowiecznego ideału.",
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
      "Tragedia, która ukazuje upadek tytułowego bohatera, szkockiego władcy, który, kierując się ambicją i manipulacjami żony, dokonuje morderstwa króla Duncana, by przejąć tron. Zbrodnia prowadzi do coraz głębszej paranoi, zniszczenia moralności i ostatecznej zguby Makbeta, który zostaje osaczony przez własne wyrzuty sumienia i przewidywaną karę. Szekspir porusza w dziele tematy władzy, lojalności, winy oraz nieuchronności losu. “Makbet” to opowieść o destrukcyjnym wpływie ambicji i moralnych konsekwencjach zbrodni, które prowadzą do tragedii zarówno jednostki, jak i całego królestwa.",
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
    description:
      "Komedia, która ukazuje postać Harpagona, skąpego i egoistycznego ojca, który za wszelką cenę pragnie zachować swoje bogactwo. Jego obsesja na punkcie pieniędzy doprowadza do konfliktów z rodziną, zwłaszcza z dziećmi, które pragną zawrzeć miłość, a nie małżeństwo aranżowane z powodu majątku. Molier w mistrzowski sposób ukazuje wady skąpstwa, przez które Harpagon staje się postacią śmieszną, ale również tragiczną w swojej niezdolności do otwarcia się na ludzkie wartości. Komedia kończy się konfrontacją bohatera z jego własnym szaleństwem, co stanowi krytykę chciwości i materializmu.",
    author: "Molier",
    period: "Barok",
    questions: [
      {
        id: 1,
        motive: "Czy dobra materialne czynią człowieka szczęśliwym?",
        question:
          "Omów zagadnienie na podstawie Skąpca Moliera. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Przyczyny nieporozumień między rodzicami a dziećmi.",
        question:
          "Omów zagadnienie na podstawie Skąpca Moliera. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Utwory, w których autor zgryźliwie komentuje i krytykuje współczesne mu społeczeństwo, moralność oraz obyczaje. Krasiński, z właściwą dla siebie ironią, ukazuje w nich absurdalne postawy i wady ludzkie, które szkodzą zarówno jednostce, jak i narodowi. Jego satyry często dotyczą kwestii narodowych, politycznych oraz religijnych, a także przedstawiają zderzenie idei oświeceniowych z tradycją. Krasiński w sposób wyrazisty ukazuje niepokój o przyszłość kraju, będącego wówczas pod zaborami, a jego satyry są pełne gorzkiej refleksji nad stanem społeczeństwa i jego wartościami.",
    author: "Ignacy Krasicki",
    period: "Oświecenie",
    questions: [
      {
        id: 1,
        motive: "Wady ludzkie w krzywym zwierciadle satyry.",
        question:
          "Omów zagadnienie na podstawie wybranej satyry Ignacego Krasickiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Jeden z pierwszych utworów polskiego romantyzmu, który w sposób manifestacyjny ukazuje odrzucenie klasycyzmu na rzecz indywidualizmu, emocji i subiektywnego postrzegania świata. Wiersz opowiada o spotkaniu młodej dziewczyny z duchem zmarłego ukochanego, co symbolizuje triumf uczuć i duchowej rzeczywistości nad racjonalnym myśleniem. Mickiewicz w “Romantyczności” przedstawia także krytykę ograniczeń oświeceniowego rozumu i podkreśla znaczenie intuicji, wiary oraz przekonań metafizycznych. Utwór jest wyrazem romantycznej fascynacji tajemnicą, ludzką duchowością i światem zjawisk nadprzyrodzonych.",
    author: "Adam Mickiewicz",
    period: "Romantyzm",
    questions: [
      {
        id: 1,
        motive: "Świat ducha a świat rozumu.",
        question:
          "Omów zagadnienie na podstawie Romantyczności Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Jakie znaczenie dla człowieka ma przyroda?",
        question:
          "Omów zagadnienie na podstawie znanych Ci ballad Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Dramat romantyczny, który stanowi jedną z najważniejszych części cyklu “Dziady”. Akcja rozgrywa się w czasach zaborów, a głównym tematem jest walka o wolność narodową i moralne cierpienie jednostki. Dramat ukazuje męczeństwo i poświęcenie bohaterów narodowych, a także ich kontakt z duchami przeszłości. Mickiewicz porusza kwestie religijne, patriotyczne oraz filozoficzne, ukazując wewnętrzne dylematy i duchową walkę o zbawienie. W “Dziadach cz. III” pojawiają się także motywy mesjanistyczne, które mają ukazać Polskę jako naród wybrany do wyzwolenia.",
    author: "Adam Mickiewicz",
    period: "Romantyzm",
    questions: [
      {
        id: 1,
        motive: "Losy młodzieży polskiej pod zaborami.",
        question:
          "Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Mesjanizm jako romantyczna idea poświęcenia.",
        question:
          "Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Postawy społeczeństwa polskiego wobec zaborcy.",
        question:
          "Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 4,
        motive: "Różne postawy człowieka wobec Boga.",
        question:
          "Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 5,
        motive: "Jakie prawdy o człowieku ujawniają jego sny albo widzenia?",
        question:
          "Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 6,
        motive: "W jakim celu twórca nawiązuje do motywów biblijnych?",
        question:
          "Omów zagadnienie na podstawie Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Powieść obyczajowa ukazująca życie społeczne Warszawy w drugiej połowie XIX wieku. Głównym bohaterem jest Stanisław Wokulski, który zakochuje się w Izabeli Łęckiej, próbując zdobyć jej serce. Powieść porusza tematy miłości, ambicji, moralności i upadku wartości.",
    author: "Bolesław Prus",
    period: "Pozytywizm",
    questions: [
      {
        id: 1,
        motive: "Miłość – siła destrukcyjna czy motywująca do działania?",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Różne oblicza przyjaźni",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Praca jako pasja człowieka",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 4,
        motive:
          "Jaką rolę w relacjach międzyludzkich odgrywają majątek i pochodzenie?",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 5,
        motive: "Konfrontacja marzeń z rzeczywistością",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 6,
        motive:
          "Jakie cechy charakteru ułatwiają człowiekowi osiągnięcie celu?",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 7,
        motive: "Miasto – przestrzeń przyjazna czy wroga człowiekowi?",
        question:
          "Omów zagadnienie na podstawie Lalki Bolesława Prusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Powieść psychologiczna ukazująca wewnętrzne rozterki Rodiona Raskolnikowa, który popełnia morderstwo lichwiarki. Bohater próbuje usprawiedliwić swój czyn teorią o jednostkach wybitnych, mających prawo łamać moralne zasady. Zmagając się z wyrzutami sumienia, stopniowo dojrzewa do przyznania się do winy. Powieść porusza tematy zła, kary, sumienia oraz odkupienia, ukazując złożoność ludzkiej psychiki i moralnych dylematów.",
    author: "Fiodor Dostojewski",
    period: "Realizm",
    questions: [
      {
        id: 1,
        motive: "Walka człowieka ze swoimi słabościami",
        question:
          "Omów zagadnienie na podstawie Zbrodni i kary Fiodora Dostojewskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Motyw winy i kary",
        question:
          "Omów zagadnienie na podstawie Zbrodni i kary Fiodora Dostojewskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Ile człowiek jest gotów poświęcić dla innych?",
        question:
          "Omów zagadnienie na podstawie Zbrodni i kary Fiodora Dostojewskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 4,
        motive: "Co może determinować ludzkie postępowanie?",
        question:
          "Omów zagadnienie na podstawie Zbrodni i kary Fiodora Dostojewskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Dramat symboliczny ukazujący podziały społeczne i marazm narodu polskiego na przełomie XIX i XX wieku. Akcja rozgrywa się podczas wesela poety z chłopką, co staje się pretekstem do konfrontacji inteligencji z chłopstwem. W utworze pojawiają się postaci realistyczne i fantastyczne, które symbolizują narodowe mity i marzenia o odzyskaniu niepodległości. Wyspiański krytykuje bierność Polaków i ich niezdolność do działania, tworząc uniwersalne przesłanie o konieczności jedności narodowej.",
    author: "Stanisław Wyspiański",
    period: "Młoda Polska",
    questions: [
      {
        id: 1,
        motive: "Trudności w porozumieniu między różnymi grupami społecznymi",
        question:
          "Co utrudnia porozumienie między przedstawicielami różnych grup społecznych? Omów zagadnienie na podstawie Wesela Stanisława Wyspiańskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Rola chłopów i inteligencji w sprawie niepodległościowej",
        question:
          "Rola chłopów i inteligencji w sprawie niepodległościowej. Omów zagadnienie na podstawie Wesela Stanisława Wyspiańskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Sen o Polsce czy sąd nad Polską?",
        question:
          "Sen o Polsce czy sąd nad Polską? Omów zagadnienie na podstawie Wesela Stanisława Wyspiańskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 4,
        motive: "Symboliczne znaczenie widm i zjaw",
        question:
          "Symboliczne znaczenie widm i zjaw. Omów zagadnienie na podstawie Wesela Stanisława Wyspiańskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 5,
        motive: "Motyw tańca",
        question:
          "Motyw tańca. Omów zagadnienie na podstawie Wesela Stanisława Wyspiańskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Powieść ukazująca losy Cezarego Baryki na tle wydarzeń historycznych w odradzającej się Polsce. Główny bohater, wychowany w Baku, przyjeżdża do ojczyzny z nadzieją na lepsze życie, lecz zderza się z trudną rzeczywistością społeczną. Powieść porusza problem nierówności społecznych, rewolucji oraz poszukiwania własnej tożsamości. Żeromski ukazuje dylematy młodego pokolenia i ich pragnienie budowy nowego, sprawiedliwego świata.",
    author: "Stefan Żeromski",
    period: "Dwudziestolecie międzywojenne",
    questions: [
      {
        id: 1,
        motive: "Młodość jako czas kształtowania własnej tożsamości",
        question:
          "Omów zagadnienie na podstawie Przedwiośnia Stefana Żeromskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Wojna i rewolucja jako źródła doświadczeń człowieka",
        question:
          "Omów zagadnienie na podstawie Przedwiośnia Stefana Żeromskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Różne wizje odbudowy Polski po odzyskaniu niepodległości",
        question:
          "Omów zagadnienie na podstawie Przedwiośnia Stefana Żeromskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 4,
        motive: "Jakie znaczenie ma tytuł dla odczytania sensu utworu?",
        question:
          "Omów zagadnienie na podstawie Przedwiośnia Stefana Żeromskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Oniryczne opowiadanie, w którym rzeczywistość miesza się z fantazją. Narrator, wspominając dzieciństwo, opisuje tajemnicze nocne wędrówki po mieście, pełnym niezwykłych miejsc i postaci. Sklepy symbolizują świat marzeń, tęsknot i niespełnionych pragnień. Utwór łączy realizm z poetycką wizją, ukazując magię codzienności i ulotność ludzkich doznań.",
    author: "Bruno Schulz",
    period: "Dwudziestolecie międzywojenne",
    questions: null,
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
    description:
      "Powieść egzystencjalna, która opisuje epidemię dżumy w Oranie jako metaforę ludzkiego cierpienia i walki z absurdem życia. Główny bohater, doktor Rieux, z poświęceniem walczy z chorobą, mimo świadomości, że jego działania mogą być daremne. Dzieło ukazuje solidarność, heroizm i ludzką godność w obliczu nieuchronnej śmierci. Camus podkreśla, że jedyną odpowiedzią na absurd istnienia jest bunt i bezinteresowna pomoc innym.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Co skłania człowieka do poświęceń?",
        question:
          "Omów zagadnienie na podstawie Dżumy Alberta Camusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Człowiek wobec cierpienia i śmierci",
        question:
          "Omów zagadnienie na podstawie Dżumy Alberta Camusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Czy możliwa jest przyjaźń w sytuacjach skrajnych?",
        question:
          "Omów zagadnienie na podstawie Dżumy Alberta Camusa. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Dystopijna powieść ukazująca totalitarne państwo, w którym władza kontroluje każdy aspekt życia obywateli. Główny bohater, Winston Smith, buntuje się przeciwko reżimowi Partii, jednak jego próba odzyskania wolności kończy się porażką. Orwell przedstawia mechanizmy manipulacji, cenzury i inwigilacji, które prowadzą do zniewolenia jednostki. Powieść jest ostrzeżeniem przed konsekwencjami utraty wolności i zagrożeniem wynikającym z absolutnej władzy.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Relacje międzyludzkie w rzeczywistości państwa totalitarnego",
        question:
          "Omów zagadnienie na podstawie utworu Rok 1984 George’a Orwella. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Jak zachować wolność w państwie totalitarnym?",
        question:
          "Omów zagadnienie na podstawie utworu Rok 1984 George’a Orwella. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Znaczenie propagandy w państwie totalitarnym",
        question:
          "Omów zagadnienie na podstawie utworu Rok 1984 George’a Orwella. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 4,
        motive: "Nowomowa jako sposób na ograniczenie wolności człowieka",
        question:
          "Omów zagadnienie na podstawie utworu Rok 1984 George’a Orwella. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Dramat ukazujący konflikt pokoleń i upadek tradycyjnych wartości. Główny bohater, Artur, próbuje przywrócić porządek w rodzinie, w której panuje chaos i brak zasad. Sztuka porusza temat buntu młodego pokolenia wobec liberalizmu oraz krytykuje skrajności zarówno tradycji, jak i nowoczesności. Mrożek w ironiczny sposób pokazuje, jak trudno znaleźć równowagę między wolnością a zasadami.",
    author: "Sławomir Mrożek",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Bunt przeciwko porządkowi społecznemu",
        question:
          "Omów zagadnienie na podstawie Tanga Sławomira Mrożka. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Problem upadku wartości",
        question:
          "Omów zagadnienie na podstawie Tanga Sławomira Mrożka. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 3,
        motive: "Normy społeczne – ograniczają człowieka czy porządkują życie?",
        question:
          "Omów zagadnienie na podstawie Tanga Sławomira Mrożka. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
    description:
      "Reportaż, który porusza temat powstania w getcie warszawskim. Opowiada historię Marka Edelmana, jednego z przywódców powstania, ukazując jego doświadczenia zarówno jako bojownika, jak i lekarza. Dzieło łączy w sobie wątki wojenne z refleksją nad sensem życia, śmierci i ludzkiej godności. Krall przedstawia dramatyczne wybory moralne oraz walkę o człowieczeństwo w ekstremalnych warunkach.",
    author: "Hanna Krall",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Godność w skrajnych sytuacjach",
        question:
          "Czy możliwe jest zachowanie godności w skrajnych sytuacjach? Omów zagadnienie na podstawie Zdążyć przed Panem Bogiem Hanny Krall. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Zagłada z perspektywy świadka",
        question:
          "Zagłada z perspektywy świadka i uczestnika wydarzeń w getcie. Omów zagadnienie na podstawie Zdążyć przed Panem Bogiem Hanny Krall. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
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
  {
    id: 22,
    title: 'Górą "Edek"',
    author: "Marek Nowakowski",
    description:
      "Utwór przedstawia realia życia codziennego w PRL, ukazując kontrasty społeczne i przemiany zachodzące w ówczesnej Polsce. Autor z ironią i krytycznym spojrzeniem opisuje ludzi z różnych warstw społecznych, tworząc obraz epoki.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive:
          "W jakim celu autor nawiązuje w swoim tekście do innego tekstu?",
        question:
          "Omów zagadnienie na podstawie utworu Górą „Edek” Marka Nowakowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie i opracowanie",
        url: "https://poezja.org/wz/interpretacja/5801/Gora_Edek_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i bohaterowie",
        url: "https://strefaedukacji.pl/gora-edek-marka-nowakowskiego-o-czym-mowi-opowiadanie-opracowanie-lektury-obowiazkowej-na-maturze/ar/c5-17064029",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://knowunity.pl/knows/jzyk-polski-gr-edek-ace52b72-8029-4619-9588-c7846f145275",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe",
        url: "https://www.bryk.pl/lektury/marek-nowakowski/gora-edek.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=a950HWhv9nM",
        type: "video",
      },
    ],
  },
  {
    id: 23,
    title: "Miejsce",
    author: "Andrzej Stasiuk",
    description:
      "Opowiadanie podejmuje temat pamięci i tożsamości, ukazując znaczenie przeszłości w kształtowaniu współczesnego człowieka. Autor w poetycki sposób opisuje podróż do miejsc związanych z historią osobistą i zbiorową.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Jaką wartość dla człowieka ma pamięć o przeszłości?",
        question:
          "Omów zagadnienie na podstawie Miejsca Andrzeja Stasiuka. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/5817/Miejsce_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie",
        url: "https://knowunity.pl/knows/jzyk-polski-miejsce-3fc235f1-b28f-479f-97e0-b4b733596bff",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe",
        url: "https://www.bryk.pl/lektury/andrzej-stasiuk/miejsce.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie i plan wydarzeń",
        url: "https://eszkola.pl/jezyk-polski/miejsce-streszczenie-i-plan-wydarzen-11200.html",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=hXWmWMGtg5Y",
        type: "video",
      },
    ],
  },
  {
    id: 24,
    title: "Profesor Andrews w Warszawie",
    author: "Olga Tokarczuk",
    description:
      "Opowiadanie przedstawia losy profesora, który podczas pobytu w Polsce doświadcza trudnej rzeczywistości stanu wojennego. Utwór ukazuje wrażenia obcokrajowca wobec systemu totalitarnego i ludzkiej codzienności w czasach opresji.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Stan wojenny z perspektywy obcokrajowca",
        question:
          "Omów zagadnienie na podstawie utworu Profesor Andrews w Warszawie Olgi Tokarczuk. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie",
        url: "https://setkazpolaka.pl/profesor-andrews-w-warszawie-streszczenie/",
        type: "article",
      },
      {
        title: "Streszczenie i bohaterowie",
        url: "https://strefaedukacji.pl/olga-tokarczuk-profesor-andrews-w-warszawie-streszczenie-lektury-bohaterowie-motywy-najwazniejsze-informacje-o-utworze/ar/c5-17169387",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/5803/Profesor_Andrews_w_Warszawie_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe",
        url: "https://www.bryk.pl/lektury/olga-tokarczuk/profesor-andrews-w-warszawie.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=ZzDp38rffqM",
        type: "video",
      },
    ],
  },
  {
    id: 25,
    title: "Podróże z Herodotem",
    author: "Ryszard Kapuściński",
    description:
      "Esej łączy wątki podróżnicze z refleksją nad historią i literaturą. Autor zestawia własne doświadczenia z dziełem Herodota, poszukując uniwersalnych prawd o ludzkiej naturze i kulturze.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Czym dla człowieka może być podróżowanie?",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Podróży z Herodotem Ryszarda Kapuścińskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=ZZ0LGpICjRE",
        type: "video",
      },
      {
        title: "Streszczenie i bohaterowie",
        url: "https://matura.greg.pl/polski,podroze-z-herodotem-ryszard-kapuscinski-opracowanie",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/streszczenia-i-plany-wydarzen/1010613-podroze-z-herodotem-streszczenie.html",
        type: "article",
      },
      {
        title: "Streszczenie i problematyka",
        url: "https://knowunity.pl/knows/jzyk-polski-herodot-czytany-przez-kapuciskiegor-kapuciski-podre-z-herodotem-89bf3e1d-57a3-4ef1-9e52-3343f56e499f",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=BhE7X0p8XAk",
        type: "video",
      },
    ],
  },
  {
    id: 26,
    title: "Ferdydurke",
    author: "Witold Gombrowicz",
    description:
      "Powieść groteskowa ukazująca mechanizmy zniewolenia jednostki przez formy społeczne. Autor w satyryczny sposób przedstawia absurdy wychowania, konwenansów i relacji międzyludzkich.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Groteskowy obraz świata",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Ferdydurke Witolda Gombrowicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Człowiek wobec presji otoczenia",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Ferdydurke Witolda Gombrowicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie i opracowanie do matury",
        url: "https://studniowkamaturalna.pl/ferdydurke-streszczenie-opracowanie/",
        type: "article",
      },
      {
        title: "Streszczenie i bohaterowie",
        url: "https://setkazpolaka.pl/ferdydurke-streszczenie-bohaterowie/",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe",
        url: "https://ostatnidzwonek.pl/ferdydurke/a-705.html",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/5240/Ferdydurke_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=S3iqU4dBnYc",
        type: "video",
      },
    ],
  },
  {
    id: 27,
    title: "Proszę państwa do gazu",
    author: "Tadeusz Borowski",
    description:
      "Opowiadanie ukazuje brutalne realia życia w obozie koncentracyjnym. Autor w sposób chłodny i pozbawiony patosu przedstawia losy więźniów, odsłaniając mechanizmy odczłowieczenia i degradacji moralnej.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "„Człowiek zlagrowany” jako ofiara zbrodniczego systemu",
        question:
          "Omów zagadnienie na podstawie utworu Proszę państwa do gazu Tadeusza Borowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/3604/Prosze_panstwa_do_gazu_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i bohaterowie",
        url: "https://knowunity.pl/knows/jzyk-polski-prosz-pastwa-do-gazu-tadeusz-borowski-3b0c1751-5e20-4527-8886-827393f1b071",
        type: "article",
      },
      {
        title: "Streszczenie szczegółowe",
        url: "https://www.bryk.pl/lektury/tadeusz-borowski/prosze-panstwa-do-gazu.streszczenie-szczegolowe",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/streszczenia-i-plany-wydarzen/1010395-prosze-panstwa-do-gazu-tadeusz-borowski-streszczenie.html",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=Qz4Z8KmKwqU",
        type: "video",
      },
    ],
  },
  {
    id: 28,
    title: "Inny świat",
    author: "Gustaw Herling-Grudziński",
    description:
      "Wspomnienia autora z pobytu w sowieckim łagrze, ukazujące okrutne warunki życia i moralne dylematy więźniów. Utwór stanowi świadectwo cierpienia i walki o zachowanie człowieczeństwa w nieludzkich realiach.",
    period: "Literatura współczesna",
    questions: [
      {
        id: 1,
        motive: "Jakie znaczenie ma tytuł dla odczytania sensu utworu?",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Innego świata Gustawa Herlinga-Grudzińskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
      {
        id: 2,
        motive: "Konsekwencje zniewolenia człowieka",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Innego świata Gustawa Herlinga-Grudzińskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie i opracowanie",
        url: "https://setkazpolaka.pl/inny-swiat-streszczenie-i-opracowanie/",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://www.bryk.pl/wypracowania/jezyk-polski/streszczenia-i-plany-wydarzen/1010758-inny-swiat-gustaw-herling-grudzinski.html",
        type: "article",
      },
      {
        title: "Streszczenie i bohaterowie",
        url: "https://knowunity.pl/knows/jzyk-polski-inny-wiat-notatka-i-streszczenie-3eef2344-937d-4ee0-936c-3f7098207c67",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/4954/Inny_swiat_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie na YouTube",
        url: "https://www.youtube.com/watch?v=lCjKETKsS_M",
        type: "video",
      },
    ],
  },
  {
    id: 29,
    title: "Chłopi",
    author: "Władysław Reymont",
    description:
      "Realistyczna powieść ukazująca życie polskiej wsi na przełomie XIX i XX wieku. Reymont szczegółowo opisuje codzienność, obyczaje i hierarchię społeczną mieszkańców Lipiec. Utwór porusza tematy związane z tradycją, naturą oraz konfliktem między jednostką a społecznością.",
    period: "Młoda Polska",
    questions: [
      {
        id: 1,
        motive: "Obyczaj i tradycja w życiu społeczeństwa",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Chłopów Władysława Stanisława Reymonta. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie i bohaterowie",
        url: "https://knowunity.pl/knows/jzyk-polski-chopi-tom-1-wadysaw-stanisaw-reymont-93043e98-a708-445c-b02d-4d6be0726b43",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie",
        url: "https://babaodpolskiego.pl/wladyslaw-stanislaw-reymont-chlopi-streszczenie-i-opracowanie/",
        type: "article",
      },
      {
        title: "Streszczenie",
        url: "https://poezja.org/wz/interpretacja/4926/Chlopi_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie krótkie",
        url: "https://www.bryk.pl/lektury/wladyslaw-stanislaw-reymont/chlopi-t-i.streszczenie-krotkie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=pgWB-AhZ3sE",
        type: "video",
      },
    ],
  },
  {
    id: 30,
    title: "Potop (fragmenty)",
    author: "Henryk Sienkiewicz",
    description:
      "Fragmenty powieści historycznej ukazujące losy Andrzeja Kmicica na tle najazdu szwedzkiego w XVII wieku. Utwór przedstawia dramatyczne wybory bohatera, jego drogę od hańby do odkupienia oraz rolę patriotyzmu w życiu jednostki. Sienkiewicz podkreśla postawy odwagi, honoru i poświęcenia dla ojczyzny.",
    period: "Pozytywizm",
    questions: [
      {
        id: 1,
        motive: "Postawy odwagi i tchórzostwa",
        question:
          "Omów zagadnienie na podstawie znanych Ci fragmentów Potopu Henryka Sienkiewicza. W swojej odpowiedzi uwzględnij również wybrany kontekst.",
      },
    ],
    externalResources: [
      {
        title: "Streszczenie szczegółowe na Knowunity",
        url: "https://knowunity.pl/knows/jzyk-polski-potop-henryk-sienkiewicz-7f377d64-11dc-491e-a2d2-313f7484e14d",
        type: "article",
      },
      {
        title: "Streszczenie na SetkaZPolaka.pl",
        url: "https://setkazpolaka.pl/potop-streszczenie-henryk-sienkiewicz/",
        type: "article",
      },
      {
        title: "Streszczenie na Bryk.pl",
        url: "https://www.bryk.pl/lektury/henryk-sienkiewicz/potop.streszczenie-krotkie",
        type: "article",
      },
      {
        title: "Streszczenie na Poezja.org",
        url: "https://poezja.org/wz/interpretacja/6380/Potop_streszczenie",
        type: "article",
      },
      {
        title: "Streszczenie i opracowanie na YouTube",
        url: "https://www.youtube.com/watch?v=PbrDY1q6EtM",
        type: "video",
      },
    ],
  },
];
