
# Disney Characters Web Application

This project is a simple web application that displays a list of Disney characters. Users can browse through the characters, search for specific characters, and navigate through different pages of character results. The application utilizes the Disney API to fetch character data.

## Project Structure

The project consists of the following files:

1. **index.html**: The main HTML file that structures the web page.
2. **styles.css**: The CSS file that styles the web page.
3. **app.js**: The main JavaScript file that handles fetching data from the API and updating the UI.
4. **api.js**: A JavaScript file that contains functions for interacting with the Disney API.
5. **ui.js**: A JavaScript file that contains functions for updating the user interface.


### index.html

- Contains the basic structure of the web page.
- Includes elements for searching, displaying characters, and pagination.
- Loads the main JavaScript file (app.js).

### styles.css

- Defines the styles for the web page, including the layout, colors, and typography.
- Includes styles for the search input, buttons, character grid, and pagination controls.

### app.js

- Imports functions from `api.js` and `ui.js`.
- Handles the initial load of characters, search functionality, and pagination.
- Adds event listeners for search input and pagination buttons.

### api.js

- Contains functions for fetching character data from the Disney API.
  - `fetchCharacters(page)`: Fetches a list of characters for the specified page.
  - `searchCharacters(query)`: Searches for characters based on a query string.
  - `getCharacterById(id)`: Fetches details for a specific character by ID.

### ui.js

- Contains functions for updating the user interface.
  - `createCharacterCard(character)`: Creates a card element for a character.
  - `updateCharacterGrid(characters)`: Updates the character grid with new character data.
  - `updatePageNumber(page)`: Updates the displayed page number.

## How to Use

1. **Clone the repository:**

   
   git clone https://github.com/madymona/JavaScript-Web-Application.git>
  

2. **Open `index.html` in a web browser or through preview .**

3. **Search for characters:**
   - Use the search input to find specific Disney characters by name.

4. **Navigate through pages:**
   - Use the "Previous" and "Next" buttons to navigate through different pages of character results.

## Dependencies

- This project uses the Disney API available at `https://api.disneyapi.dev/character`.


