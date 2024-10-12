const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

for (const [key, value] of gameEvents) {
  key <= 45 && console.log(`[FIRST HALF] ${key} : ${value}`);
  key > 45 && console.log(`[SECOND HALF] ${key} : ${value}`);
}

const k = "mine mine mine";

console.log(k.replaceAll("mine", "j"));

const mine =
  "underscore_case/nfirst_name/nSome_Variable/ncalculate_AGE/ndelayed_departure";

const mindArray = mine.split("/n");
console.log(mindArray);

for (const [i, k] of mindArray.entries()) {
  if (k.includes("_")) {
    const Num = i + 1;
    const [first, second] = k.split("_");

    const finalValue = [first, second[0].toUpperCase(), second.slice(1)]
      .join("")
      .padEnd(20, " ");
    console.log(`${finalValue}${"✅".repeat(Num)}`);
  }
}

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const FlightArray = flights.split("+");
console.log(FlightArray);

for (const Flight of FlightArray) {
  const [type, from, to, time] = Flight.split(";");

  console.log(
    ` ${type.includes("Delayed") ? "🔴" : ""}${type.replaceAll("_", " ")} ${from
      .toUpperCase()
      .slice(0, 3)} to ${to.toUpperCase().slice(0, 3)} (${time.replace(
      ":",
      "h"
    )})`.padStart(39)
  );
}

const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

const greetingHey = greet("hey");
greetingHey("HpK");
greetingHey("Perumal");

greet("hey")("Hpk Perumal");

const HpkAirline = {
  Airline: "Hpk",
  iataCode: "LH",
  booking: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.Airline} ${this.iataCode}${flightnum}`
    );
  },
};

HpkAirline.book(231, "Perumal");
HpkAirline.book(221, "");
