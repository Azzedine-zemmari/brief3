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
const cords =[
    { id: 1, lat: 32.664108, long: -9.006899, ph: 6.8, mo: 4.6, pho: 41.1, pots: 276.3 },
    { id: 2, lat: 32.664623, long: -9.036011, ph: 6.7, mo: 4.3, pho: 34.7, pots: 280.6 },
    { id: 3, lat: 32.664839, long: -9.068059, ph: 7.5, mo: 1.6, pho: 25.2, pots: 346.9 },
    { id: 4, lat: 32.663747, long: -9.092700, ph: 8.9, mo: 3.6, pho: 50.9, pots: 343.4 },
    { id: 5, lat: 32.640814, long: -9.114624, ph: 7.7, mo: 4.9, pho: 16.2, pots: 316.4 },
    { id: 6, lat: 32.605119, long: -9.070100, ph: 6.3, mo: 4.2, pho: 28.4, pots: 246.2 },
    { id: 7, lat: 32.560375, long: -9.035415, ph: 6.2, mo: 1.9, pho: 34.9, pots: 237.7 },
    { id: 8, lat: 32.560375, long: -9.035415, ph: 7.5, mo: 3.6, pho: 30.1, pots: 323.5 },
    { id: 9, lat: 32.513061, long: -8.964457, ph: 6.8, mo: 1.7, pho: 22.1, pots: 336.6 },
    { id: 10, lat: 32.459672, long: -8.885814, ph: 8.7, mo: 3.9, pho: 46.2, pots: 319.9 },
    { id: 11, lat: 32.420656, long: -8.813444, ph: 7.8, mo: 4.2, pho: 36.8, pots: 333.5 },
    { id: 12, lat: 32.401696, long: -8.746130, ph: 7.1, mo: 4.1, pho: 19, pots: 291.6 },
    { id: 13, lat: 32.358516, long: -8.686569, ph: 7, mo: 2.3, pho: 56.9, pots: 215.2 },
    { id: 14, lat: 32.325510, long: -8.628757, ph: 6.8, mo: 3.7, pho: 31.9, pots: 336 },
    { id: 15, lat: 32.476331, long: -8.746213, ph: 8.2, mo: 1.8, pho: 26.1, pots: 284.2 },
    { id: 16, lat: 32.446014, long: -8.694312, ph: 6.4, mo: 4.6, pho: 52.6, pots: 274.2 },
    { id: 17, lat: 32.412752, long: -8.645407, ph: 6.9, mo: 3.1, pho: 20.6, pots: 194.5 },
    { id: 18, lat: 32.495717, long: -8.669867, ph: 6.8, mo: 4.7, pho: 17.7, pots: 280.1 },
    { id: 19, lat: 32.561435, long: -9.187555, ph: 8.5, mo: 1.1, pho: 37.6, pots: 216 },
    { id: 20, lat: 32.562771, long: -9.195556, ph: 7.4, mo: 3.9, pho: 15, pots: 324.9 },
    { id: 21, lat: 32.543909, long: -9.151411, ph: 7.6, mo: 2.7, pho: 41.5, pots: 227.5 },
    { id: 22, lat: 32.525330, long: -9.132522, ph: 7.9, mo: 2.9, pho: 37.3, pots: 233.5 },
    { id: 23, lat: 32.503560, long: -9.084668, ph: 7.6, mo: 1, pho: 32.7, pots: 342.8 },
    { id: 24, lat: 32.443003, long: -9.014146, ph: 7.5, mo: 3, pho: 18.5, pots: 225.6 },
    { id: 25, lat: 32.397292, long: -8.953699, ph: 7.4, mo: 2, pho: 27.6, pots: 320.3 },
    { id: 26, lat: 32.362196, long: -8.898289, ph: 7.9, mo: 1.4, pho: 47.8, pots: 251.3 },
    { id: 27, lat: 32.332407, long: -8.849176, ph: 6.8, mo: 2, pho: 57.5, pots: 318.4 },
    { id: 28, lat: 32.301544, long: -8.773617, ph: 7.6, mo: 1.7, pho: 49.2, pots: 287.5 },
    { id: 29, lat: 32.272800, long: -8.710652, ph: 7.3, mo: 3.7, pho: 50.8, pots: 182 },
    { id: 30, lat: 32.210214, long: -8.837672, ph: 8.5, mo: 4.2, pho: 19.9, pots: 249.8 },
    { id: 31, lat: 32.251187, long: -8.904650, ph: 7.8, mo: 4.5, pho: 34.5, pots: 272.3 },
    { id: 32, lat: 32.283350, long: -8.987457, ph: 8.6, mo: 3.2, pho: 59.7, pots: 208.2 },
    { id: 33, lat: 32.298542, long: -9.026394, ph: 6.2, mo: 3.5, pho: 18.6, pots: 282.1 },
    { id: 34, lat: 32.317528, long: -9.059341, ph: 7.7, mo: 3.6, pho: 21.3, pots: 199.3 },
    { id: 35, lat: 32.345367, long: -9.110259, ph: 7.9, mo: 3.4, pho: 57.3, pots: 182.9 },
    { id: 36, lat: 32.363078, long: -9.158181, ph: 6.9, mo: 3.1, pho: 20.4, pots: 280.8 },
    { id: 37, lat: 32.384882, long: -9.223322, ph: 8.7, mo: 1.3, pho: 59.1, pots: 290.6 },
    { id: 38, lat: 32.279350, long: -9.186599, ph: 8.9, mo: 4.2, pho: 24.2, pots: 191 },
    { id: 39, lat: 32.266100, long: -9.134280, ph: 7.6, mo: 3.7, pho: 20.1, pots: 341.9 },
    { id: 40, lat: 32.248679, long: -9.066989, ph: 8.1, mo: 3, pho: 35.4, pots: 338.6 },
    { id: 41, lat: 32.238226, long: -9.024485, ph: 7.6, mo: 3.3, pho: 27.8, pots: 333.1 },
    { id: 42, lat: 32.221928, long: -8.967361, ph: 7.8, mo: 4, pho: 26.3, pots: 315.5 },
    { id: 43, lat: 32.204367, long: -8.906285, ph: 7.1, mo: 4.7, pho: 20.8, pots: 320.7 },
    { id: 44, lat: 32.181291, long: -8.823418, ph: 8.3, mo: 1.2, pho: 25.7, pots: 300.1 },
    { id: 45, lat: 32.158314, long: -8.764964, ph: 6.4, mo: 1.7, pho: 44.7, pots: 195.6 },
    { id: 46, lat: 32.156186, long: -8.706689, ph: 6.6, mo: 4.6, pho: 23.1, pots: 234.2 },
    { id: 47, lat: 32.175560, long: -8.643218, ph: 8.5, mo: 4.1, pho: 35.8, pots: 276.5 },
    { id: 48, lat: 32.158256, long: -8.597389, ph: 7.9, mo: 2.6, pho: 18.6, pots: 339.6 },
    { id: 49, lat: 32.172593, long: -8.530496, ph: 7.5, mo: 3.3, pho: 40.5, pots: 226.1 },
    { id: 50, lat: 32.177899, long: -8.475919, ph: 8.9, mo: 1.1, pho: 26.7, pots: 319.3 },
    { id: 51, lat: 32.106620, long: -8.421963, ph: 7.8, mo: 2.9, pho: 26.4, pots: 278.6 },
    { id: 52, lat: 32.064624, long: -8.367401, ph: 8.5, mo: 1.8, pho: 28.5, pots: 335.4 },
    { id: 53, lat: 32.021607, long: -8.305530, ph: 7.7, mo: 4.2, pho: 24.6, pots: 317.8 },
    { id: 54, lat: 32.011413, long: -8.252245, ph: 8.6, mo: 4.4, pho: 19.8, pots: 277.7 },
    { id: 55, lat: 32.053423, long: -8.187876, ph: 7.9, mo: 3.1, pho: 47.5, pots: 252.9 },
    { id: 56, lat: 32.101645, long: -8.124513, ph: 6.2, mo: 1.4, pho: 23.6, pots: 215.5 },
    { id: 57, lat: 32.155991, long: -8.060754, ph: 6.6, mo: 4.9, pho: 35.8, pots: 285.3 },
    { id: 58, lat: 32.204443, long: -8.015635, ph: 7.7, mo: 3.9, pho: 38.4, pots: 278.6 },
    { id: 59, lat: 32.263438, long: -7.964120, ph: 8.9, mo: 4.6, pho: 24.1, pots: 336.4 },
    { id: 60, lat: 32.314315, long: -7.901560, ph: 6.5, mo: 2.8, pho: 42.7, pots: 195.8 },
    { id: 61, lat: 32.365238, long: -7.860999, ph: 7.9, mo: 1.7, pho: 27.8, pots: 317.1 },
    { id: 62, lat: 32.423849, long: -7.801481, ph: 8.5, mo: 4.2, pho: 44.5, pots: 291.8 },
    { id: 63, lat: 32.463563, long: -7.754286, ph: 6.8, mo: 1.3, pho: 26.4, pots: 279.9 },
    { id: 64, lat: 32.497550, long: -7.705607, ph: 7.1, mo: 2.6, pho: 31.3, pots: 237.7 },
    { id: 65, lat: 32.555819, long: -7.654192, ph: 6.7, mo: 3.7, pho: 24.1, pots: 272.7 },
    { id: 66, lat: 32.593455, long: -7.596301, ph: 8.7, mo: 3.9, pho: 39.2, pots: 276.3 },
    { id: 67, lat: 32.644810, long: -7.533774, ph: 7.8, mo: 2.8, pho: 29.1, pots: 338.9 },
    { id: 68, lat: 32.685814, long: -7.466268, ph: 8.1, mo: 4.7, pho: 26.8, pots: 254.3 },
    { id: 69, lat: 32.717173, long: -7.408932, ph: 7.5, mo: 4.6, pho: 28.7, pots: 295.8 },
    { id: 70, lat: 32.768559, long: -7.359528, ph: 8.8, mo: 1.3, pho: 33.6, pots: 313.2 },
    { id: 71, lat: 32.829196, long: -7.305726, ph: 8.5, mo: 1.4, pho: 26.7, pots: 284.6 },
    { id: 72, lat: 32.870726, long: -7.252820, ph: 7.6, mo: 3.8, pho: 22.9, pots: 279.2 },
    { id: 73, lat: 32.926014, long: -7.196703, ph: 7.7, mo: 2.5, pho: 35.1, pots: 311.9 },
    { id: 74, lat: 32.962100, long: -7.143108, ph: 7.9, mo: 3.6, pho: 27.6, pots: 234.4 },
    { id: 75, lat: 33.002715, long: -7.096586, ph: 8.1, mo: 4.7, pho: 39.8, pots: 328.4 },
    { id: 76, lat: 33.067907, long: -7.033969, ph: 7.9, mo: 2.3, pho: 41.4, pots: 290.3 },
    { id: 77, lat: 33.135768, long: -6.979297, ph: 8.6, mo: 1.1, pho: 27.5, pots: 218.5 },
    { id: 78, lat: 33.180625, long: -6.913857, ph: 6.8, mo: 1.8, pho: 19.3, pots: 227.2 },
    { id: 79, lat: 33.218016, long: -6.862078, ph: 8.7, mo: 1.5, pho: 44.9, pots: 273.4 },
    { id: 80, lat: 33.245518, long: -6.798354, ph: 6.3, mo: 1.4, pho: 25.3, pots: 215.1 },
    { id: 81, lat: 33.283911, long: -6.743568, ph: 7.6, mo: 4.4, pho: 42.4, pots: 258.4 },
    { id: 82, lat: 33.342824, long: -6.682574, ph: 6.8, mo: 2.3, pho: 34.8, pots: 244.3 },
    { id: 83, lat: 33.399017, long: -6.635148, ph: 8.2, mo: 1.9, pho: 39.7, pots: 314.5 },
    { id: 84, lat: 33.443027, long: -6.563083, ph: 8.1, mo: 3.5, pho: 24.9, pots: 323.7 },
    { id: 85, lat: 33.481815, long: -6.503518, ph: 7.3, mo: 4.2, pho: 29.7, pots: 292.1 },
    { id: 86, lat: 33.517990, long: -6.460786, ph: 6.9, mo: 2.1, pho: 26.4, pots: 234.5 },
    { id: 87, lat: 33.561393, long: -6.413191, ph: 8.7, mo: 4.6, pho: 33.5, pots: 278.6 },
    { id: 88, lat: 33.593981, long: -6.360972, ph: 6.5, mo: 3.7, pho: 42.7, pots: 272.3 },
    { id: 89, lat: 33.637517, long: -6.310367, ph: 6.6, mo: 4.9, pho: 25.2, pots: 268.1 },
    { id: 90, lat: 33.688281, long: -6.267795, ph: 8.3, mo: 1.6, pho: 19.5, pots: 287.9 },
    { id: 91, lat: 33.742589, long: -6.214904, ph: 7.5, mo: 1.2, pho: 34.7, pots: 285.2 },
    { id: 92, lat: 33.799474, long: -6.153267, ph: 8.4, mo: 3.9, pho: 23.1, pots: 309.3 },
    { id: 93, lat: 33.855393, long: -6.102938, ph: 6.9, mo: 1.8, pho: 30.4, pots: 252.3 },
    { id: 94, lat: 33.914784, long: -6.056798, ph: 8.3, mo: 2.6, pho: 31.8, pots: 278.3 },
    { id: 95, lat: 33.968419, long: -6.001073, ph: 8.9, mo: 1.5, pho: 28.4, pots: 245.7 },
    { id: 96, lat: 34.022143, long: -5.954154, ph: 6.2, mo: 4.1, pho: 25.1, pots: 254.4 },
    { id: 97, lat: 34.071315, long: -5.909825, ph: 8.6, mo: 1.3, pho: 32.5, pots: 295.2 },
    { id: 98, lat: 34.123673, long: -5.865193, ph: 7.3, mo: 4.5, pho: 38.4, pots: 239.7 },
    { id: 99, lat: 34.187382, long: -5.817845, ph: 6.4, mo: 3.6, pho: 35.1, pots: 256.8 }
];
//The idea is that smaller sums indicate closer points.
map.on('click', function(e) {
    const sum = [];
    const lngLat = e.lngLat;
    console.log(lngLat)
    cords.forEach((cord,index)=>{
        const lat =  cord.lat - lngLat.lat;
        const long = cord.long - lngLat.lng;
        sum.push({id : index, sum : lat+long});
    });
    let first = sum[0];
    for(let i = 0; i < sum.length;i++){
        if(sum[i].sum < first.sum){
            first = sum[i];
        }
    }
    //intiall first with the first cords and if he found a smaller coordination then the first coordination it will update the variable first
    const closer = cords.find((cord)=>cord.id == first.id);
    let lat = document.getElementById('lat');
    let long = document.getElementById('long');
    let ph = document.getElementById('ph');
    lat.innerHTML =  closer.lat;
    long.innerHTML =  closer.long;
    ph.innerHTML =  closer.ph;
    var marker = new mapboxgl.Marker()
    .setLngLat([closer.long, closer.lat])
    .addTo(map);
    // console.log(lat,long,ph);
    console.log('closer : ',closer);
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
