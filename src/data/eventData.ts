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
      icon: "church",
      time: "15:30",
      address: "Av. Armendáriz 350, Miraflores",
      mapUrl: "https://maps.app.goo.gl/bjHcxyFu4VKjaNrp9",
    },
    {
      id: "party",
      title: "Fiesta",
      icon: "cheers",
      time: "20:00",
      address: "Av. Armendáriz 350, Miraflores",
      mapUrl: "https://maps.app.goo.gl/bjHcxyFu4VKjaNrp9",
    },
  ] satisfies EventsItem[],

};
