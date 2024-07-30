mapboxgl.accessToken =
"pk.eyJ1IjoiMHVkaW5lIiwiYSI6ImNsdmZ1Z3BwNTBiazMybW5weTI0YzBnZHkifQ.zvrWkMtWnChsFIe69mZ2Fg"; // Replace with your Mapbox access token
// Coordinates of the city center
var cityCenter = [-9.233699512061456, 32.29497240385899];
// Define a bounding box around the city (ensure this covers the coordinates you are using)
var bounds = [
[-9.273, 32.27], // Southwest coordinates
[-9.2, 32.32], // Northeast coordinates
];
// Create the map instance
var map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/streets-v11", // style URL
center: cityCenter, // starting position [lng, lat]
zoom: 12, // starting zoom (increased for better visibility)
maxBounds: bounds, // Set the bounding box as max bounds
});
const cords = [
{ id: 0, lat: 32.664108, long: -9.006899, ph: 5 },
{ id: 1, lat: 32.664623, long: -9.036011, ph: 7 },
{ id: 2, lat: 32.664128, long: -9.006222, ph: 4 },
{ id: 3, lat: 32.664148, long: -9.006859, ph: 2 },
{ id: 4, lat: 32.664128, long: -9.0332869, ph: 1 },
{ id: 5, lat: 32.632208, long: -9.03299, ph: 5 },
];
map.on('click', function (e) {
const sum = [];
const lngLat = e.lngLat;
cords.forEach((cord, index) => {
    const lat = cord.lat - lngLat.lat;
    const long = cord.long - lngLat.lng;
    sum.push({ id: index, sum: lat + long });
});
console.log(sum);
//The idea is that smaller sums indicate closer points.
let first = sum[0];
for (let i = 0; i < sum.length; i++) {
    if (sum[i].sum < first.sum) {
        first = sum[i];
    }
}
console.log(first);
//intiall first with the first cords and if he found a smaller coordination then the first coordination it will update the variable first
const closer = cords.find((cord) => cord.id == first.id);
let lat = document.getElementById('lat');
let long = document.getElementById('long');
let ph = document.getElementById('ph');
lat.innerHTML = closer.lat;
long.innerHTML = closer.long;
ph.innerHTML = closer.ph;
var marker = new mapboxgl.Marker()
    .setLngLat([closer.long, closer.lat])
    .addTo(map);
console.log(lat, long, ph);
console.log('closer : ', closer);
});

// Add navigation control (zoom buttons)
map.addControl(new mapboxgl.NavigationControl());
// Add geolocation control
map.addControl(
new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true,
    },
    trackUserLocation: true,
})
);