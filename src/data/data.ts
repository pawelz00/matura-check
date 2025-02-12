type AppData = {
    [key: string]: {
        author: string;
        epoka: string;
        questions: {
            motive: string;
            question: string;
        }[] | null
    }
}

export const appData: AppData = {
    "Biblia": {
        author: "",
        epoka: "Starożytność",
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
    "Mitologia (cz. I Grecja)": {
        "author": "Jan Parandowski",
        "epoka": "Starożytność (opracowanie XX w.)",
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
    "Iliada": {
        "author": "Homer",
        "epoka": "Starożytność",
        "questions": [
            {
                "motive": "Heroizm",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Iliady Homera. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    "Antygona": {
        "author": "Sofokles",
        "epoka": "Starożytność",
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
    "Rozmowa Mistrza Polikarpa ze Śmiercią": {
        "author": "",
        "epoka": "Średniowiecze",
        "questions": [
            {
                "motive": "Taniec śmierci",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Rozmowy Mistrza Polikarpa ze Śmiercią. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    "Pieśń o Rolandzie": {
        "author": "",
        "epoka": "Średniowiecze",
        "questions": [
            {
                "motive": "Etos rycerski",
                "question": "Omów zagadnienie na podstawie znanych Ci fragmentów Pieśni o Rolandzie. W swojej odpowiedzi uwzględnij również wybrany kontekst."
            }
        ]
    },
    "Makbet": {
        "author": "William Szekspir",
        "epoka": "Renesans",
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
}