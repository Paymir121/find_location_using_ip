import {validateIP, addTile, getAddress} from "./helpers"
import 'leaflet/dist/leaflet.css';
import 'babel-polyfill'
import L from 'leaflet';
import icon from '../images/icon-location.svg';

const btn = document.querySelector('.search-bar__btn');
const input = document.querySelector('.search-bar__input');


const ispInfo = document.querySelector('#isp')
const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const mapArea = document.querySelector('.map')
const map = L.map(mapArea).setView([51.505, -0.09], 13);
addTile(map)
const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [40, 40],
})
L.marker([51.5, -0.09], {icon: markerIcon}).addTo(map);


btn.addEventListener('click', getIP)
input.addEventListener('keydown', handleKey)

function getIP() {
    // const ip = input.value;
    const ip = "185.21.12.54";
    if (validateIP(ip)) {
        getAddress(ip)
            .then(setInfo)
    }
}
function handleKey(e) {
    if (e.key === 'Enter') {
        getIP()
    }
}

function setInfo(mapData) {
    const {lat, lng, country, region, timezone} = mapData.location
    console.log(mapData)
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + " "+ region
    timezoneInfo.innerText = timezone
    ispInfo.innerText = mapData.isp
    console.log(lat, lng)
    map.setView([lat, lng], 13);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);
}