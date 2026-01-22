import type { EventIconKey } from "./eventIcons";

export type ItineraryItem = {
  id: string;
  icon: EventIconKey;
  time: string;
  title: string;
};

export type EventsItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: EventIconKey;
  time: string;
  address: string;
  mapUrl: string;
};

function getFutureISO(days = 30, time = "15:30") {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(h, m, 0, 0);

  return d.toISOString();
}

export const eventData = {

  couple: {
    bride: "mariana",
    groom: "daniel",
  },

  date: {
    isoDemo: getFutureISO(30, "15:30"),
    iso: "2026-01-24T15:30:00-05:00",
    timezone: "America/Lima",
  },

  itinerary: [
    { id: "ceremony", icon: "rings", time: "15:30", title: "Ceremonia" },
    { id: "arrival", icon: "location", time: "20:00", title: "Recepción" },
    { id: "toast", icon: "cheers", time: "21:30", title: "Brindis" },
    { id: "dinner", icon: "dinner", time: "22:30", title: "Cena" },
    { id: "party", icon: "party", time: "00:00", title: "Fiesta" },
  ] satisfies ItineraryItem[],

  events: [
    {
      id: "ceremony",
      title: "Ceremonia",
      subtitle: "Parroquia Nuestra Señora del Pilar",
      icon: "church",
      time: "15:30",
      address: "Av. Víctor Andrés Belaunde 160, San Isidro 15073, Lima, Perú",
      mapUrl: "https://maps.app.goo.gl/KLc1YBcFkMWVnMdA7",
  },
  {
      id: "party",
      title: "Fiesta",
      subtitle: "The Westin Lima Hotel & Convention Center",
      icon: "cheers",
      time: "20:00",
      address: "Av. Las Begonias 450, San Isidro, Lima, Perú",
      mapUrl: "https://maps.app.goo.gl/ew6nApbdcWG6Px3n9",
  },
  ] satisfies EventsItem[],

};
