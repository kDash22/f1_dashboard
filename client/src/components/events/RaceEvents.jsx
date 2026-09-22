import RaceEvent from "./RaceEvent";
import { raceEvents } from "../../data/mockdata";

function RaceEvents() {
  return (
    <>
      <section>
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
