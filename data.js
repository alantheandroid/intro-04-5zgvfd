const turkish = 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png';
const ryanair =
  'https://play-lh.googleusercontent.com/UlvFF-Zo2h6_8RdoMh9xWbAcaqSrsIU_yhQPOcH5rbTQ7Av9EvfWFTrAen1EX4X-JxA_';
const ita =
  'https://loghi-famosi.com/wp-content/uploads/2021/11/Logo-della-ITA-Airways.png';
const volotea =
  'https://play-lh.googleusercontent.com/gpgsLjPmA7JNdSCl3pAnbk5n3I_ARW_AkfzLFTscMg0VY4XSFNVKq_FsE0_UOZx3Zw';

export const flights = [
  {
    departureTime: '11:00',
    departureAirport: 'CAG',
    arrivalTime: '12:40',
    arrivalAirport: 'MAD',
    companyLogo: ita,
    companyName: 'ITA Airways',
    aircraftType: 'Boeing 777-300',
    passengers: 1,
    flightClass: 'Economy',
    price: 77.25,
  },
  {
    departureTime: '16:00',
    departureAirport: 'CAG',
    arrivalTime: '16:45',
    arrivalAirport: 'ROM',
    companyLogo: ryanair,
    companyName: 'Ryanair',
    aircraftType: 'Boeing 737-800',
    passengers: 2,
    flightClass: 'Economy',
    price: 120.5,
  },
  {
    departureTime: '8:50',
    departureAirport: 'CAG',
    arrivalTime: '10:10',
    arrivalAirport: 'PMO',
    companyLogo: volotea,
    companyName: 'Volotea',
    aircraftType: 'Boeing 737-800',
    passengers: 1,
    flightClass: 'Economy',
    price: 184.24,
  },
  {
    departureTime: '19:20',
    departureAirport: 'PMO',
    arrivalTime: '20:30',
    arrivalAirport: 'FCO',
    companyLogo: volotea,
    companyName: 'Volotea',
    aircraftType: 'Boeing 737-800',
    passengers: 1,
    flightClass: 'Business',
    price: 81.9,
  },
  {
    departureTime: '11:40',
    departureAirport: 'FCO',
    arrivalTime: '14:00',
    arrivalAirport: 'IST',
    companyLogo: turkish,
    companyName: 'Turkish Airlines',
    aircraftType: 'Airbus A330-300',
    passengers: 3,
    flightClass: 'Business',
    price: 347.92,
  },
];
