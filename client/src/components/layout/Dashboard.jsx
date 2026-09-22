import DashboardHeader from "./DashboardHeader";
import TimingTable from "../timing/TimingTable";
import DriverPanel from "../driver/DriverPanel";
import TrackMap from "../track/TrackMap";
import StrategyPanel from "../strategy/StrategyPanel";
import RaceEvents from "../events/RaceEvents";

function Dashboard() {
  return (
    <>
      <main className="grid grid-cols-12 m-4 gap-4">
        <div className="col-span-12">
          <DashboardHeader />
        </div>

        <div className="col-span-7">
          <TimingTable />
        </div>
        <div className="col-span-5">
          <TrackMap />
        </div>
        <div className="col-span-5">
          <DriverPanel />
        </div>

        <div className="col-span-7">
          <StrategyPanel />
        </div>

        <div className="col-span-12">
          <RaceEvents />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
