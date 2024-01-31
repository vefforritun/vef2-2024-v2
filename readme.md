# Vefforritun 2, 2024, verkefni 2: Express, postgres og hýsing

- [Kynning á verkefni](https://youtu.be/OlYfb4N-IZQ)
- [Byrjun á verkefni í fyrirlestri 4](https://youtu.be/45wAA23x5FA)

## Markmið

- Setja upp express vef með: routes, EJS templateum, formum með staðfestingu og notendaumsjón
- Setja upp postgres gagnagrunn, vinna með skema og gögn sem til eru og bæta við þau
- Setja upp verkefni í hýsingu

## Verkefnið

Verkefnið er framhald á [verkefni 1](https://github.com/vefforritun/vef2-2024-v1) og snýst um að setja upp express vef með postgres gagnagrunni fyrir leikna og hýsa verkefnið.

### Express vefur

Setja skal upp express vef með routes fyrir:

- Forsíðu, með hlekkjum á aðrar síður
- Leikir, yfirlit yfir leiki
- Staða, yfirlit yfir stöðu í deild
- Umsjónarsíða
  - Innskráning
  - Virkni, má vera á sér síðu hvert eða á einni síðu:
    - Yfirlit yfir leiki
    - Skráningarsíða á leik
    - Útskráning

Ef reynt er að fara á síðu sem er ekki til skal birta 404 villu.

### Postgres gagnagrunnur og gögn

Setja skal upp postgres gagnagrunn og færa inn í hann gögn sem til eru í `data/` möppu (sömu og í verkefni 1).

Skema á töflum skal vera:

- Lið
  - `id` – primary lykill töflu, sjálfkrafa skráður
  - `name` – nafn liðs
- Leikir
  - `id` – primary lykill töflu, sjálfkrafa skráður
  - `date` – dagsetning leiks
  - `home` – id á heimalið
  - `away` – id á útilið
  - `home_score` – stig heimaliðs
  - `away_score` – stig útiliðs
- Notendur
  - `id` – primary lykill töflu, sjálfkrafa skráður
  - `username` – notendanafn
  - `password` – lykilorð, geymt sem `bcrypt` hash

Fylla skal í liða og leikjatöflu með gögnum sem til eru í `data/` möppu, ekki er krafa um að forrita innsetningu.

### Admin virkni og notendaumsjón

Setja skal upp notendaumsjón með innskráningu með `passport` og `passport-local`, nota skal töflu í postgres grunni til að geyma notendanafn og lykilorð.

Ekki þarf að setja upp nýskráningu en útbúa skal a.m.k. einn notanda með gefið notendanafn lykilorð í `readme` í skilum.

Innskráningu skal birta ef farið er á `/admin` og innskráning er ekki til staðar. Ef reynt er að innskrá og villa kemur upp skal birta villuskilaboð um það.

Inni á admin síðu skal birta viðburði og möguleiki á að skoða þá, breyta, og síðan bæta við nýjum viðburðum.

### Form og gagnaskráning

Birta skal töflu með öllum leikjum eftir innskráningu sem birtir öll gögn leikja, raðað eftir dagsetningu, nýjast fyrst.

Setja skal upp HTML form á `/admin` til að bæta við leikjum. Formið skal hafa:

- Dagsetningu leiks
- Heimalið, valið úr lista af öllum skráðum liðum
- Útilið, valið úr lista af öllum skráðum liðum
- Stig heimaliðs
- Stig útiliðs

Staðfesta þarf gögnin:

- Dagsetning verður að vera á réttu sniði og ekki meira en tveggja mánaðar gamlar og ekki í framtíðinni
- Lið verða að vera til í gagnagrunni
- Stig verða að vera jákvæð heiltala eða 0

Ef gögn eru ekki á réttu formi skal birta villuskilaboð um það.

Ekki þarf að vera hægt að skrá eða breyta liðum.

### Útlit

Setja skal upp _einfalt_ útlit á vefnum með flexbox eða grid. Takmarka heildarstærð og vera _responsive_.

Forritið skal útbúa merkingarfræðilegt og aðgengilegt HTML með EJS sniðmátum.

### Öryggi

Huga þarf að öryggi en nánar verður farið yfir það í fyrirlestri 6:

- aðeins sé hægt að framkvæma aðgerðir ef viðkomandi er innskráður
- geyma þarf lykilorð á öruggan máta
- XSS árásir skulu ekki vera mögulegar, nota skal `xss` pakka við skráningu á gögnum

### Tæki, tól og test

Nota skal node 20.

Nota skal NPM eða Yarn til að sækja og keyra tól.

Aðeins skal nota ECMAScript modules (ESM, `import` og `export`) og ekki CommonJS (`require`).

Uppsett er `package.json` skrá með `eslint` og `stylelint` uppsett.

Breyta má út frá reglum sem eru settar upp í `eslint` og `stylelint` með því að breyta stillingar (`rc` skrám) en það er ekki leyfilegt að slökkva á reglum í kóða.

`jest` er uppsett ásamt testum fyrir gefna virkni, þessi próf skulu keyra, ekki þarf að bæta við prófum.

GitHub Actions er uppsett til að keyra lint og test, þetta skal vera „grænt“ við skil.

### GitHub og hýsing

Setja skal upp vefinn á Render, Railway eða Heroku (ath að uppsetning á Heroku mun kosta) tengt við GitHub með postgres settu upp.

### Gefin virkni

Gefin er grunnuppsetning á express ásamt virkni í `lib/` möppu. Ekki er krafa um að nota þetta.

Unnið verður áfram í uppsetningu á express og notendaumsjón í fyrirlestri 4, og uppsetningu á gagnagrunni og hýsingu í fyrirlestri 5.

## Mat

- 20% – Express vefur
- 20% – Postgres gagnagrunnur og gögn
- 15% – Admin virkni og notendaumsjón
- 15% – Form og gagnaskráning
- 10% — Útlit
- 10% – Tæki, tól og test
- 10% – GitHub og hýsing

## Sett fyrir

Verkefni sett fyrir í fyrirlestri miðvikudaginn 31. janúar 2023.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 15. febrúar 2024.

Skil skulu innihalda:

- Slóð á verkefni keyrandi í hýsingu.
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir ([sjá nánar í kynningu á áfanga](https://github.com/vefforritun/vef2-2024/blob/main/namsefni/01.kynning/1.kynning.md)):

- fimm minni sem gilda 10% hvert, samtals 50% af lokaeinkunn.
- tvö hópverkefni þar sem hvort um sig gildir 20%, samtals 40% af lokaeinkunn.
- einstaklingsverkefni sem gildir 10–20% af lokaeinkunn.

---

> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |
