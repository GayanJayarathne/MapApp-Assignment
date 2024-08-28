# Map Application

This project is a React Native application built using Expo in TypeScript. The app renders a map with pins representing various issues. When a pin is clicked, a tooltip appears, displaying detailed information including an image, title, and date related to the issue.

## Features

- **Map Rendering:** Displays a map with multiple pins.
- **Pin Interaction:** Clicking a pin opens a tooltip with detailed information.
- **Responsive Design:** Ensures consistent user experience across different devices.
- **Image Display:** Correctly displays images within tooltips using `resizeMode={'contain'}`.

## Prerequisites

- **Node.js** (>=14.x.x)
- **npm** (>=6.x.x) or **yarn** (>=1.x.x)
- **Expo CLI** (>=5.x.x)

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/GayanJayarathne/MapApp-Assignment.git
   cd MapApp-Assignment

2. **Install Dependencies:**
   ```bash
   npm install

3. **Run the Project:**
   ```bash
   npx expo start

4. **Open the App:**
   - Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal.
   - Alternatively, you can run the app in an Android simulator.

5. **Project Structure:**
   - /assets: Contains the images and other static assets.
   - /screens: Contains the main screens (MapScreen and DetailScreen).
   - App.tsx: Entry point of the application.
  
6. **Troubleshooting:**
   - Image Display Issues: Ensure that the resizeMode={'contain'} property is added to the image component to avoid display problems in tooltips.
   - Native Module Errors: If you encounter errors related to native modules (e.g., AIRMapCalloutSubview), try resetting the cache and restarting the Expo server:
   ```bash
   npx expo start --clear
