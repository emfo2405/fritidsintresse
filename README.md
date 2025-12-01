# fritidsintresse

Den här uppgiften gick ut på att skapa en backend-applikation och en databas där ett fritidsintresse kan lagras. I mitt fall skapades en databas för böcker i en boksamling. För att organisera denna skapades en modell i LoopBack med egenskaper som ska finnas med i varje post. 

#### Tabell för böcker
För varje bok i databasen följs följande struktur:

| modell | _id  | Author | Title | Review | Read | Published | 
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | 
| Book  | STRING PRIMARY KEY  | STRING REQUIRED  | STRING REQUIRED | NUMBER  | BOOLEAN REQUIRED | NUMBER REQUIRED |

#### Hur man använder CRUD
| Metod  | Ändpunkt | Beskrivning | 
| ------------- | ------------- | ------------- |
| GET | /books/count | Returnerar antalet böcker i databasen |
| GET  | /books/{_id}  | Returnerar en specifik bok med givet id. Id för boken måste skickas med |
| GET  | /books  | Returnerar alla böcker lagrade i databasen |
| PUT  | /books/{_id}  | Uppdaterar information för en bok med ett specifikt id i databasen. Ett objekt med korrekt information måste skickas med (Author: string, Title: string, Review: number, Read: boolean, Published: number). |
| DELETE  | /books/{_id} | Raderar en bok ur databasen med ett specifikt id. |
| POST  | /books  | Lagrar en ny bok i databasen. Ett objekt med korrekt information måste skickas med (Author: string, Title: string, Review: number, Read: boolean, Published: number). |

#### Ett korrekt utformat objekt för en bok
```
{
  "Author": "string",
  "Title": "string",
  "Review": 10,
  "Read": true,
  "Published": 9999
}
```
#### Exempelobjekt
```
{
  "Author": "Sally Rooney",
  "Title": "Intermezzo",
  "Review": 8,
  "Read": true,
  "Published": 2024
}
```

