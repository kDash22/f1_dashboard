import RaceEvent from "./RaceEvent";
import { raceEvents } from "../../data/mockdata";

function RaceEvents() {
  return (
    <>
      <section className="border-2 p-2">
        <h2>Race Events</h2>
        {/* horizontal bar */}
        <div>
          {raceEvents.map((raceEvent, index) => (
            <RaceEvent event={raceEvent} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default RaceEvents;
