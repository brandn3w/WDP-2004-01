


# WDP Projekt Zespołowy

## Opis Projektu 

Projekt to strona sklepu internetowego z meblami. Projekt w głównej mierze miał na celu zaznajomienie się z pracą w zespole,
poprawę umiejętności programowania, poznanie ReactJS i Redux, oraz obycie się z systemem kontroli wersji git.

## Demo 

<a href="https://wonderful-poitras-780108.netlify.app/">Link do strony</a>

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

<ul>
  <li>W projekcie stosujemy jako wcięcia 2 spacje</li>
  <li>Wszystkie kolory dajemy do zmiennych i wrzucamy do pliku settings.scss</li>
  <li>Jeśli jakiś styl będzie się powtarzał warto z niego zrobić klasę helperową i wrzucić do global.scss.</li>
  <li>W projekcie korzystamy z bootstrapa</li>
  <li>Warto trzymać się zasady skauta Zawsze zostawiaj obóz czystszy, niż go zastałeś.</li>
</ul>
