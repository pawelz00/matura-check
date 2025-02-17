export type Item = {
    id: number;
    title: string;
    description?: string;
    author: string | null;
    period: string;
    externalResources?: {
        title: string;
        url: string;
        type?: "video" | "article"
    }[]
    questions: {
        motive: string;
        question: string;
    }[] | null
}

export type Items = Item[]

export const appData: Items = [
    {
        id: 1,
        title: "Biblia",
        author: null,
        description: "Zbiór ksiąg religijnych judaizmu i chrześcijaństwa. Składa się z dwóch części: Starego i Nowego Testamentu. Biblia jest jednym z najważniejszych dzieł literatury światowej. Zawiera m.in. opowieści o stworzeniu świata, historię Izraela, życie i nauczanie Jezusa Chrystusa.",
        period: "Starożytność",
        externalResources: [
            {
                title: "Księga Hioba - omówienie",
                url: "https://www.youtube.com/watch?v=uTo5Myd_M0w",
                type: "video",
            }
        ],
        questions: [
            {
                "motive": "Cierpienie niezawinione",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Księgi Hioba. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Niestałość świata",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Księgi Koheleta. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Koniec świata",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Apokalipsy św. Jana. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    {
        id: 2,
        title: "Mitologia (cz. I Grecja)",
        "author": "Jan Parandowski",
        "period": "Starożytność",
        "questions": [
            {
                "motive": "Poświęcenie w imię wyższych wartości",
                "question": "Omów zagadnienie na podstawie Mitologii (cz. I Grecja) Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Wina i kara",
                "question": "Omów zagadnienie na podstawie Mitologii (cz. I Grecja) Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Miłość silniejsza niż śmierć",
                "question": "Omów zagadnienie na podstawie Mitologii (cz. I Grecja) Jana Parandowskiego. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    {
        id: 3,
        title: "Iliada",
        "author": "Homer",
        "period": "Starożytność",
        "questions": [
            {
                "motive": "Heroizm",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Iliady Homera. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    {
        id: 4,
        title: "Antygona",
        "author": "Sofokles",
        "period": "Starożytność",
        "questions": [
            {
                "motive": "Konflikt racji moralnych",
                "question": "Omów zagadnienie na podstawie Antygony Sofoklesa. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Człowiek wobec przeznaczenia",
                "question": "Omów zagadnienie na podstawie Antygony Sofoklesa. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    {
        id: 5,
        title: "Rozmowa Mistrza Polikarpa ze Śmiercią",
        "author": "",
        "period": "Średniowiecze",
        "questions": [
            {
                "motive": "Taniec śmierci",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Rozmowy Mistrza Polikarpa ze Śmiercią. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    {
        id: 6,
        title: "Pieśń o Rolandzie",
        "author": "",
        "period": "Średniowiecze",
        "questions": [
            {
                "motive": "Etos rycerski",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Pieśni o Rolandzie. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    {
        id: 7,
        "title": "Makbet",
        "author": "William Szekspir",
        "period": "Renesans",
        "questions": [
            {
                "motive": "Moralna odpowiedzialność za czyny",
                "question": "Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Czy człowiek decyduje o własnym losie?",
                "question": "Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            },
            {
                "motive": "Wpływ władzy na człowieka",
                "question": "Omów zagadnienie na podstawie Makbeta Williama Szekspira. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    }
]