export const currentUser = {
  firstName: 'Jan',
  fullName: 'Jan Kowalski',
  email: 'jan.kowalski@firma.pl',
};

export const vehiclesById = {
  corolla: {
    id: 'corolla',
    brand: 'toyota',
    name: 'Toyota Corolla',
    fullName: 'Toyota Corolla Hybrid',
    plate: 'GD 98765',
    fuel: 'Hybryda (4.5l/100)',
    transmission: 'Automatyczna',
    seats: '5 osób',
    trunk: '470 litrów',
    imageKey: 'corolla',
    description:
      'Wygodny, ekonomiczny samochód hybrydowy idealny na trasy międzymiastowe oraz poruszanie się po zakorkowanym mieście. Pojazd wyposażony w aktywny tempomat i czujniki parkowania.',
  },
  camry: {
    id: 'camry',
    brand: 'toyota',
    name: 'Toyota Camry',
    fullName: 'Toyota Camry',
    plate: 'KR 45678',
    fuel: 'Benzyna (6.2l/100)',
    transmission: 'Automatyczna',
    seats: '5 osób',
    trunk: '524 litry',
    imageKey: 'corolla',
    description:
      'Komfortowa limuzyna idealna na dłuższe wyjazdy służbowe. Przestronne wnętrze, niskie spalanie i bogate wyposażenie bezpieczeństwa.',
  },
  focus: {
    id: 'focus',
    brand: 'ford',
    name: 'Ford Focus',
    fullName: 'Ford Focus',
    plate: 'PO 11223',
    fuel: 'Diesel (4.8l/100)',
    transmission: 'Manualna',
    seats: '5 osób',
    trunk: '375 litrów',
    imageKey: 'corolla',
    description:
      'Zwrotny i ekonomiczny hatchback do codziennej jazdy po mieście. Sprawdza się w korkach i na krótszych trasach służbowych.',
  },
};

export const fleetVehicle = vehiclesById.corolla;

export const activeReservation = {
  name: 'Skoda Octavia',
  plate: 'WA 12345',
  label: 'Skoda Octavia (WA 12345)',
  time: '10:00 - 16:00',
};

export const companyVehicles = [
  { id: '1', name: 'Skoda Octavia', plate: 'WA 12345', label: 'Skoda Octavia (WA 12345)' },
  { id: '2', name: 'Toyota Corolla Hybrid', plate: 'GD 98765', label: 'Toyota Corolla Hybrid (GD 98765)' },
  { id: '3', name: 'Toyota Camry', plate: 'KR 45678', label: 'Toyota Camry (KR 45678)' },
  { id: '4', name: 'Ford Focus', plate: 'PO 11223', label: 'Ford Focus (PO 11223)' },
  { id: '5', name: 'Volkswagen Passat', plate: 'WZ 33441', label: 'Volkswagen Passat (WZ 33441)' },
];

export const calendarCars = [
  { id: '1', vehicleId: 'camry' },
  { id: '2', vehicleId: 'focus' },
];

export const tripHistory = [
  { id: '1', date: '12 Maj', vehicle: 'Skoda Octavia', status: 'Zakończony' },
  { id: '2', date: '5 Maj', vehicle: 'Toyota Corolla Hybrid', status: 'Zakończony' },
  { id: '3', date: '28 Kwi', vehicle: 'Ford Focus', status: 'Zakończony' },
  { id: '4', date: '15 Kwi', vehicle: 'Toyota Camry', status: 'Zakończony' },
];

export const pickupChecklistItems = [
  { key: 'documents', label: 'Kluczyki i dokumenty są w pojeździe' },
  { key: 'cleanliness', label: 'Wnętrze jest czyste i zadbane' },
  { key: 'damage', label: 'Brak nowych, niezgłoszonych uszkodzeń' },
];

export const fleetManager = {
  initials: 'AN',
  name: 'Adam Nowak',
  role: 'Menadżer Floty',
  phone: '+48 111 222 333',
};

export const collisionGuideSteps = [
  {
    id: 1,
    title: 'Krok 1: Zabezpiecz miejsce',
    description:
      'Włącz światła awaryjne, wystaw trójkąt ostrzegawczy (min. 50m poza zabudowanym).',
    icon: 'alert',
  },
  {
    id: 2,
    title: 'Krok 2: Sprawdź, czy są ranni',
    description: 'Jeśli tak, natychmiast zadzwoń pod 112 i udziel pierwszej pomocy.',
    icon: 'heart',
  },
  {
    id: 3,
    title: 'Krok 3: Spisz oświadczenie',
    description:
      'Druk oświadczenia znajdziesz w schowku pojazdu. Nie musisz wzywać policji, jeśli nikt nie ucierpiał, a sprawca się przyznaje.',
    icon: 'file',
  },
  {
    id: 4,
    title: 'Krok 4: Zrób zdjęcia',
    description: 'Sfotografuj uszkodzenia obu pojazdów oraz ich tablice rejestracyjne.',
    icon: 'camera',
  },
];
