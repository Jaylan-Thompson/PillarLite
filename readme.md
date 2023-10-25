
# PillarLite


This application is built with Next.js and integrates Mapbox for displaying maps and asset locations pulled from Pillar's API.


## Initial Installation

Before you can run or develop the application, you'll need to install the required dependencies.

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd <project-directory-name>
   ```

3. **Install Dependencies**:
   ```bash
   npm install

## Running the Application

There are two ways to run the application:

### Using the Command Line

1. Open a terminal or command prompt.
2. Navigate to the root directory of the project.
3. Run the following command:
```
npm run dev
```
4. Once the server starts, visit `http://localhost:3000`

### Using the Quick-Run Batch File

1. Navigate to the root directory of the project.
2. Double-click on the `npm_run_dev.bat` file.

## Components

### MapBox
- Initializes a Mapbox GL JS map instance.
- Uses `GeolocateControl` and `AssetLocationMarkers` components for additional functionalities.

### GeolocateControl
- Provides a geolocation control on the map to locate the user.
- Listens for geolocation events and updates the longitude and latitude accordingly.

### AssetLocationMarkers
- Creates markers for asset locations on the map.
- Fetches asset location data from Pillar's API '../api/assetsLocations/all' and displays them as custom markers on the map.

## Pages

### index.js
- Main entry page for the application.
- Uses Next.js's `dynamic` import to load the `Mapbox` component only on the client-side.
- Renders a fullscreen map from `MapBox.js` Component.

## Styles

### Mapbox.module.css
- Define styles for the map.
- Ensures the map takes up full width and height of screen.

## Editing the Application

### Pages

To edit the layout of the domain or subdomain(s) of the application:

1. Navigate to the `pages` directory.
2. Open the `index.js` file / Create a new `______.js` file in your preferred code editor.

### Components

Each component has its dedicated file inside the `components` directory. To edit a component:

1. Navigate to the `components` directory.
2. Open/Create the desired component file (e.g., `MapBox.js`).

### Styles

The style for each component is defined in the `styles` directory. To edit styles:

1. Navigate to the `styles` directory.
2. Open the desired CSS module file (e.g., `{component_name}.module.css`).

