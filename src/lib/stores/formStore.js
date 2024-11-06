import { writable } from 'svelte/store';

// Fake product data
export const products = [
  { 
    cost: 1250, 
    name: 'Langostino Vannamei', 
    image: 'https://example.com/images/langostino-vannamei.jpg'
  },
  { 
    cost: 2100, 
    name: 'Gamba Roja Argentina', 
    image: 'https://example.com/images/gamba-roja.jpg'
  },
  { 
    cost: 1800, 
    name: 'Calamar Patagónico', 
    image: 'https://example.com/images/calamar.jpg'
  },
  { 
    cost: 1500, 
    name: 'Merluza Austral', 
    image: 'https://example.com/images/merluza.jpg'
  }
];

// Initial history data
const initialHistory = [
  {
    id: 1,
    timestamp: '2024-01-10T08:30',
    cost: 1250,
    product: 'Langostino Vannamei',
    lot: 20240110,
    measurements: {
      glaseado: { m1: 250.5, m2: 251.2 },
      congelado: { m1: 230.1, m2: 229.8 },
      glaseo: { m1: 8, m2: 9 }
    },
    controlPiezas: [
      {
        unit: 'Gramaje (g)',
        measurements: [
          { measurement1: 12.5, measurement2: 12.8 },
          { measurement1: 13.1, measurement2: 12.9 },
          { measurement1: 12.7, measurement2: 12.6 },
          { measurement1: 12.9, measurement2: 13.0 },
          { measurement1: 12.8, measurement2: 12.7 }
        ]
      }
    ],
    bolsaGranel: {
      peso: { m1: 998.5, m2: 1002.3 },
      numero: { m1: 82, m2: 84 }
    },
    observaciones: ['Producto en óptimas condiciones', 'Glaseo dentro de parámetros']
  },
  // Add more historical records as needed
];

function createFormStore() {
  const { subscribe, set, update } = writable(initialHistory);

  return {
    subscribe,
    addRecord: (record) => update(records => [record, ...records]),
    removeRecord: (id) => update(records => records.filter(r => r.id !== id))
  };
}

export const formHistory = createFormStore();