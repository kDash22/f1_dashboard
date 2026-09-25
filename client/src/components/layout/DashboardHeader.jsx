import { raceInfo } from "../../data/mockdata";

const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

const index = Math.round(raceInfo?.windDirection / 45) % 8;

const direction = directions[index];

function DashboardHeader() {
  return (
    <>
      <section className="p-2 border-2">
        <div className="flex justify-between">
          <span>
            {" "}
            {raceInfo?.name} · {raceInfo?.sessionType}
          </span>
          <span> {raceInfo?.circuit}</span>

          <span>
            LAP
            <span>
              {raceInfo?.lap}/{raceInfo?.totalLaps}
            </span>
          </span>

          <span> {raceInfo?.sessionStatus}</span>
        </div>
        <div className="flex gap-4 justify-center mt-3">
          {raceInfo?.rainfall ? <span>WET</span> : <span>DRY</span>}
          <span>{raceInfo?.humidity}% HUM</span>
          <span>
            {" "}
            {raceInfo?.trackTemperature}°C <span>TRC</span>
          </span>
          <span>
            {" "}
            {raceInfo?.airTemperature}°C <span>AIR</span>
          </span>
          <span>
            {raceInfo?.windSpeed} m/s {direction}
          </span>
        </div>
      </section>
    </>
  );
}

export default DashboardHeader;
