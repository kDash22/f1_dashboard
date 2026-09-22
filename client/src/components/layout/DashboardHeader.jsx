import { raceInfo } from "../../data/mockdata";

function DashboardHeader() {
  return (
    <>
      <section className="p-5">
        <div className="flex justify-between">
          <span> {raceInfo?.name}</span>
          <span> {raceInfo?.circuit}</span>

          <span>
            LAP
            <span>
              {raceInfo?.lap}/{raceInfo?.totalLaps}
            </span>
          </span>

          <span> {raceInfo?.status}</span>
          <span> {raceInfo?.temperature}°C</span>
        </div>
        <div className="flex gap-4 justify-center mt-3">
          <span> {raceInfo?.weather}</span>
          <span> {raceInfo?.trackTemperature}°C</span>
        </div>
      </section>
    </>
  );
}

export default DashboardHeader;
