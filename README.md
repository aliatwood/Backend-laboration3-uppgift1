# Backend Laboration 3 - REST API med MongoDB

Detta repository innehåller kod för ett REST API byggt med Express och MongoDB. 
APIet är byggt för att hantera arbetserfarenheter så som tidigare arbetsplatser, 
jobbtitlar, platser och anställningsperioder.
Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

## Länk
En liveversion av APIet finns tillgänglig på följande URL: ..........

## Installation och databas

APIet använder en MongoDB-databas. Klona ner källkodsfilerna och följ stegen nedan:

1. Kör `npm install` för att installera nödvändiga paket
2. Skapa en `.env`-fil i rotkatalogen med följande innehåll:
MONGO_URI=din_mongodb_connection_string
PORT=3000
3. Starta servern med `node server.js`

### Databasstruktur

| Samling (Collection) | Fält |
|---|---|
| workexperiences | _id (ObjectId), companyName (String), jobTitle (String), location (String), startDate (Date), endDate (Date), description (String) |

## Användning

Nedan beskrivs hur man når APIet:

| Metod | Ändpunkt | Beskrivning |
|---|---|---|
| GET | /api/workexperience | Hämtar alla arbetserfarenheter |
| GET | /api/workexperience/:id | Hämtar en specifik arbetserfarenhet med angivet ID |
| POST | /api/workexperience | Skapar en ny arbetserfarenhet |
| PUT | /api/workexperience/:id | Uppdaterar en befintlig arbetserfarenhet med angivet ID |
| DELETE | /api/workexperience/:id | Raderar en arbetserfarenhet med angivet ID |

### Exempel på objekt

Ett arbetserfarenhet-objekt returneras/skickas som JSON med följande struktur:

```json
{
  "companyName": "Företaget AB",
  "jobTitle": "Webbutvecklare",
  "location": "Stockholm",
  "startDate": "2022-01-01",
  "endDate": "2023-06-30",
  "description": "Arbetade med frontend-utveckling i React och backend i Node.js"
}
```

> **OBS:** `endDate` är valfritt. Lämnas det tomt betyder det att anställningen är pågående.

### Obligatoriska fält vid POST och PUT

- `companyName`
- `jobTitle`
- `location`
- `startDate`
- `description`
