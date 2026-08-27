export const primaryRoutes = [
  { id: 1, name: "Ajah – CMS", corridor: "Island / East", status: "Active" },
  { id: 2, name: "Ikorodu – CMS", corridor: "East / Mainland", status: "Active" },
  { id: 3, name: "Berger – Obalende", corridor: "North-East / Island", status: "Moderate" },
  { id: 4, name: "Abule Egba – CMS", corridor: "West / Mainland", status: "Active" },
  { id: 5, name: "Okokomaiko – CMS", corridor: "West / Island", status: "Active" },
  { id: 6, name: "Apapa – Oshodi", corridor: "Industrial / Mainland", status: "Heavy" },
  { id: 7, name: "Oworo – Oshodi", corridor: "Mainland", status: "Moderate" },
  { id: 8, name: "Iyana-Iba Road", corridor: "Badagry / West", status: "Active" },
];

export const trucks = [
  { id: "CM-101", type: "Large compactor", area: "Ikeja", route: "Berger – Obalende", status: "Collecting", tripsToday: 3, load: 68 },
  { id: "CM-204", type: "Large compactor", area: "Oshodi", route: "Apapa – Oshodi", status: "En route", tripsToday: 2, load: 42 },
  { id: "CM-312", type: "Small community unit", area: "Alimosho", route: "Local feeder route", status: "Collecting", tripsToday: 5, load: 55 },
  { id: "CM-410", type: "Small community unit", area: "Mushin", route: "Neighbourhood collection", status: "At transfer", tripsToday: 4, load: 81 },
  { id: "CM-522", type: "Large market truck", area: "Balogun", route: "Market evacuation", status: "Scheduled", tripsToday: 1, load: 34 },
  { id: "CTN-001", type: "Compact pilot unit", area: "Concept: Cotonou", route: "Pilot feeder route", status: "Prototype", tripsToday: 0, load: 20 },
];

export const busStopsDemo = [
  { id: "ikeja", name: "Ikeja", lat: 6.6018, lng: 3.3515, buses: 12, routes: 5 },
  { id: "oshodi", name: "Oshodi", lat: 6.5556, lng: 3.3430, buses: 18, routes: 7 },
  { id: "yaba", name: "Yaba", lat: 6.5092, lng: 3.3777, buses: 10, routes: 4 },
  { id: "cms", name: "CMS", lat: 6.4531, lng: 3.3916, buses: 15, routes: 6 },
  { id: "ajah", name: "Ajah", lat: 6.4698, lng: 3.5852, buses: 9, routes: 3 },
  { id: "ikorodu", name: "Ikorodu", lat: 6.6194, lng: 3.5105, buses: 8, routes: 3 },
  { id: "abule-egba", name: "Abule Egba", lat: 6.6700, lng: 3.2800, buses: 11, routes: 4 },
];

export const trafficSignals = [
  { id: "t1", name: "Ikeja Under-Bridge", lat: 6.6035, lng: 3.3518, status: "Green wave" },
  { id: "t2", name: "Oshodi", lat: 6.5552, lng: 3.3420, status: "Busy" },
  { id: "t3", name: "Yaba", lat: 6.5095, lng: 3.3770, status: "Moderate" },
  { id: "t4", name: "CMS", lat: 6.4534, lng: 3.3912, status: "Busy" },
];

export const collectionPoints = [
  { id: "CM-B-001", name: "Ikeja Community Point", area: "Ikeja", fill: 64, next: "10:30", type: "General" },
  { id: "CM-B-018", name: "Ojuelegba Collection Point", area: "Surulere", fill: 82, next: "14:30", type: "Priority" },
  { id: "CM-B-032", name: "Alimosho Access Point", area: "Alimosho", fill: 91, next: "09:45", type: "Urgent" },
  { id: "CM-B-044", name: "Ajah Community Point", area: "Ajah", fill: 48, next: "16:00", type: "General" },
  { id: "CM-B-067", name: "Mushin Market Point", area: "Mushin", fill: 74, next: "12:15", type: "General" },
  { id: "CM-B-081", name: "Ikorodu Junction Point", area: "Ikorodu", fill: 57, next: "15:20", type: "Recycling" },
];

export const markets = [
  { name: "Balogun Market", scale: "Large", trucksPerDay: 4, focus: "High-frequency market evacuation" },
  { name: "Alaba International", scale: "Large", trucksPerDay: 4, focus: "Consolidated commercial waste" },
  { name: "Trade Fair", scale: "Large", trucksPerDay: 4, focus: "Heavy commercial movement" },
  { name: "Oshodi Market", scale: "Large", trucksPerDay: 3, focus: "High pedestrian/traffic interface" },
  { name: "Local Community Market", scale: "Small", trucksPerDay: 1, focus: "Dedicated daily evacuation" },
];

export const majorRoads = [
  "Lagos–Ibadan Expressway", "Lagos–Abeokuta Expressway", "Apapa–Oshodi Expressway",
  "Lekki–Epe Expressway", "Badagry Expressway", "Ikorodu Road", "Funsho Williams Avenue",
  "Agege Motor Road", "Third Mainland Bridge", "Carter Bridge", "Eko Bridge"
];

export const coverageZones = [
  { name: "Mainland North", communities: ["Alimosho", "Agege", "Ikeja", "Ifako-Ijaiye"], focus: "Small-road access + feeder collection" },
  { name: "Mainland South", communities: ["Surulere", "Mushin", "Yaba", "Oshodi-Isolo"], focus: "High-density corridors + transfer timing" },
  { name: "Island / East", communities: ["Lagos Island", "Eti-Osa", "Kosofe", "Ikorodu"], focus: "Traffic-aware scheduling" },
  { name: "West Corridor", communities: ["Amuwo-Odofin", "Ajeromi-Ifelodun", "Badagry"], focus: "Long-corridor coordination" },
  { name: "Coastal / Outer Lagos", communities: ["Epe", "Ibeju-Lekki", "Outer communities"], focus: "Distance + pickup planning" },
];

export const wastePartners = [
  { name: "RecyclePoints", streams: ["Plastic", "Paper", "Metal"] },
  { name: "Wecyclers", streams: ["Plastic", "Paper", "Recyclables"] },
  { name: "Chanja Datti", streams: ["Plastic", "Paper", "Metal"] },
  { name: "E-Terra Technologies", streams: ["E-waste"] },
  { name: "Hinckley Recycling Nigeria", streams: ["E-waste"] },
];
