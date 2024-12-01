# Sammanfattning:

Jag valde att göra om min portfoliosida från början då jag redan i slutet av förra uppgiften (u01) kände att jag inte riktigt var nöjd med sättet jag byggt och strukturerat html delen med tanke på hur mycket jag redan hade lärt mig under kursens gång. Planen var istället att bygga en hemsida från början som jag sedan under utbildningen ska kunna bygga vidare på och uppdatera allt eftersom jag lär mig mer och gör nya projekt. Jag ville att sidan skulle vara en singlepage sida då jag tycker att det ser snyggare ut och istället byta ut element mm. med JavaScript och känner att det inte kommer vara några problem då hemsidan i helhet är väldigt simpel. 

Jag gillar minimalistisk design och tycker att hemsidan ser ganska bra ut förutom några mindre delar som korten där mina projekt visas te.x vilket jag planerar att uppdatera och göra om i efterhand. Jag fastnade väldigt lätt på att göra design men närmre slutet så bestämde jag mig för att i förstahand göra sidan funktionell och därav hann jag inte uppdatera all design exakt så som jag ville.

Mina JS och CSS filer är också rätt stora vilket jag tror skulle kunna göra det svårt för någon annan än mig att ta över koden och uppdatera projektet vilket jag ser som en stor negativ sak som jag märkt att jag måste förbättra, det blir väldigt lätt att bara skriva kod när man är igång som man själv förstår men jag förstår även vikten av att strukturera koden så att den är lätt att läsa av någon annan, som te. x. lägga funktioner som hanterar samma saker i en enskild fil eller efter varandra istället för huller om buller i filen.

Annars så är jag nöjd med de interaktiva JS funktionerna och css animationer som gör att sidan känns väldigt levande och jag har lyckats med det jag har velat göra utan större problem med JS.


### Vad kan man utveckla m.h.a av Javascript inom frontend?

Man kan göra hemsidor interaktiva och manipulera dess HTML och CSS kod (DOMen). Hämta data från APIer och JSON filer och använda datan du får tillbaka på hemsidan direkt utan att skriva in allting eller specifika saker i förväg. Spel går även att utveckla för webbläsare. Animationer och övergångar, hemsidor som inte behövs laddas om för att uppdatera innehållet och mycket mer.

### Vad är JSON och hur används det inom frontend?

JSON står för JavaScript Object Notation och är ett sätt att lätt skicka och lagra data då det tar väldigt lite plats och är också väldigt enkelt för människor att läsa och förstå vad det innehåller. Det går främst till så att man frågar om data från ett API via JS fetch funktionen och sedan använder man datan man får tillbaka för att visa olika saker på en hemsida eller app så som te.x fråga om vädret i en specifik stad via ett väder API eller som vi gjorde i vårat grupprojekt och hämtade data från ett quizAPI för att sedan generera olika frågor och lägga till de i olika html element med hjälp av JS för att visa rätt och fel svar i appen. 
JSON kan även användas för att lagra och hämta data från localStorage i en webbläsare eller att via vissa tjänster som NPM tillägget "json-server" skapa en tillfällig "fake" API för att underlätta en utvecklares arbete och testa koden innan en riktigt API behöver kallas eller skrivas.

### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
HyperTextTransferProtocol är ett protokoll som används för att skicka data över internet och hjälper datorerna förstå vilken data som ska skickas mellan te.x servrar och webbläsare. HTTP är mycket viktigt att ha koll på som frontendare då man ofta jobbar med sidor och appar som kommer skicka saker via protokollet som te.x användarnamn och lösenord och vet man inte alls hur det går till är det väldigt lätt att det kan bli en stor säkerhetsrisk. Man kommer även komma i kontakt med felkoder ofta och att veta vad dessa är i större utsträckning kommer att underlätta mycket, exempel på några är (200-299 successful, 400-499 error på klientsidan, 500-599 error på serversidan). HTTP är det som internet är byggt på men har med tiden blivit utdaterad och ett mycket vanligare protokoll idag är HTTPS(HTTPsecure), detta pga att HTTP skickar okrypterad data medans HTTPS skickar datan krypterad.

# https://fullstackerikportfolio.netlify.app/
