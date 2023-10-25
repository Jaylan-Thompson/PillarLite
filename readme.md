
# Next.js Mapbox Application

This application is built with Next.js and integrates Mapbox for displaying maps and asset locations.

## Components

### MapBox
- Initializes a Mapbox GL map instance with specific configuration.
- Uses `GeolocateControl` and `AssetLocationMarkers` components for additional functionalities.


### GeolocateControl
- Provides a geolocation control on the map to locate the user.
- Listens for geolocation events and updates the longitude and latitude accordingly.

### AssetLocationMarkers
- Represents markers for asset locations on a map.
- Fetches asset location data from Pillar's API '../api/assetsLocations/all' and displays them as custom markers on the map.

## Pages

### index.js
- Main entry page for the application.
- Uses Next.js's `dynamic` import to load the `Mapbox` component only on the client-side.

## Styles

### Mapbox.module.css
- Defines styles for the map.
- Ensures the map takes the full width and height of the screen.


## Editing the Application

### Pages

To edit the main content of the application:

1. Navigate to the `pages` directory.
2. Open the `index.js` file in your preferred code editor.
3. Make the desired changes and save the file.

### Components

Each component has its dedicated file inside the `components` directory. To edit a component:

1. Navigate to the `components` directory.
2. Open the desired component file (e.g., `MapBox.js`).
3. Make the desired changes and save the file.

### Styles

The styles for the components are defined in the `styles` directory. To edit styles:

1. Navigate to the `styles` directory.
2. Open the desired CSS module file (e.g., `Mapbox.module.css`).
3. Adjust the styles as needed and save the file.

## Running the Application

There are two ways to run the application:

### Using the Command Line

1. Open a terminal or command prompt.
2. Navigate to the root directory of the project.
3. Run the following command:
```
npm run dev
```
4. Once the server starts, visit `http://localhost:3000` in your browser.

### Using the Quick-Run Batch File

1. Navigate to the root directory of the project in File Explorer.
2. Double-click on the `npm_run_dev.bat` file.
3. Once the server starts, visit `http://localhost:3000` in your browser.

