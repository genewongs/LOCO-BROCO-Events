# LOCO-BROCO
LOCO BROCO EVENTS FINDER

AN EVENT FINDER APPLICATION

## Running your code

1. Open two terminal tabs and navigate to the root directory.

2. In one tab, run `npm start` to start the node server, which serves up static files from the /client/dist directory.

3. In the second tab, run `npm run build`, which uses webpack to regenerate the `bundle.js` file when you save changes to one of your components.

4. Navigate to `localhost:3000` in your browser.

5. Allow Geolocation servives to search for events near your current location.

## On Page Load
<img src="https://i.imgur.com/wWijprU.gif"></img>
On page load, you will be asked to accept Google's geolocation services to be allowed in able to find events near you.
If you choose to decline, you may start searching for events immediately.
If you choose to accept, give the application just a second to load up events near you!

## Searching
<img src="https://i.imgur.com/TXixcHJ.gif"></img>
All fields in the search bar are optional. You may search for events by keyword, city, state, and date.
Once you have results pulled from the Ticketmaster API, you have the option to click directly on the image/header to be directed to buy

## Adding Events
<img src="https://i.imgur.com/5GUPFU7.gif"></img>
You may save these events by either marking them as "Going!" or "Interested" if you sure you aren't committed to an event yet. 
Navigate to the "My Events" section to access the events you are attending.
Navigate to the "Interested" section to access events that you are on the fence about. From here you can decide to either remove the event or mark it as attending. <br>

<hr>
© Gene Wong 2022
