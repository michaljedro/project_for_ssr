Michał Jędro nr. indeksu 25268
Michał Roszkowski nr. indeksu 36867
Kamil Sawicki nr. indeksu 44709
1. Wprowadzenie, cele i problematyka
Celem projektu jest stworzenie aplikacji webowej umożliwiającej interaktywne przeglądanie i zarządzanie zadaniami. Problem, który aplikacja ma rozwiązywać, to mozliwość dodawania zadań do zrealizowania. Do ich wyświetlenia wykorzystane ma być efektywne renderowanie stron przy minimalnym obciążeniu klienta

2. Opis wszystkich funkcjonalności
Aplikacja składa się z jednej głównej roli, czyli użytkownika.
Funkcjonalności użytkownika:
- Dodawanie, usuwanie zadań do wykonania, 
3. Schemat działania aplikacji
Aplikacja korzysta z SSR w celu generowania zada� do wy�wietlenia co pozwala na szybsze �adowanie i lepsz� optymalizacj� pod k�tem SEO.
Schemat dzia�ania obejmuje:
- Komunikacja klient-serwer: Klient wysy�a zapytanie HTTP do serwera exress. 
- Renderowanie SSR: Serwer u�ywa React do generowania HTML na podstawie zapytania
- Format danych: Dane przesy�ane s� w formacie JSON.
- Po��czenie z MongoDB: Wykorzystujemy bibliotek� Mongoose do komunikacji z baz� danych MongoDB,
- Cacho'wanie: Wykorzystanie pami�ci podr�cznej do przechowania cz�sto u�ywanych danych
4. Opis tego co dzieje si� po stronie serwera:
Po stronie serwera znajduj� si� nast�puj�ce funkcjonalno�ci:
- Wysy�ane s� �adania HTTP ( GET, POST) do serwera. 
- Wiadomo�ci od serwera: Serwer przetwarza ��dania HTTP, komunikuje si� z baz� danych i zwraca odpowiedzi klientowi.
5. Wykorzystane technologie do stworzenia projektu.
J�zyk programowania: JavaScript
�rodowisko zintegorwane: Visual Studio Code
Serwer: Express.js
Baza danych: MongoDB
Biblioteka: React, Mongoose, 
6. Instrukcje zwi�zane z uruchomieniem i deployment.
- Zainstalowa� Nodejs,
- Pobra� kod aplikacji
- zainstalowa� zale�no�ci za pomoc� "npm install"
- uruchomi� aplikacj� za pomoc� "npm start"
7 Opis istotnych funkcjonalno�ci aplikacji
Server-Side Rendering (SSR): Mechanizm SSR jest u�ywany do renderowania widok�w React po stronie serwera, co poprawia wydajno�� �adowania stron i SEO. 
8. Wnioski:
Projekt stworzony przy wykorzystaniu React, Express oraz mondoDB jest pot��nym narz�dziem do tworzenia aplikacji webowych. Integracja SSR pozwala na szybkie �adowanie stron i lepsze pozycjonowanie w wyszukiwarkach. Podczas impllementacji nale�y zwr�ci� uwag� na optymalizacj� i zarz�dzanie sesjami oraz pami�ci� podr�czn�, aby zwi�kszych wydajno�� i skalowalno�� aplikacji. 