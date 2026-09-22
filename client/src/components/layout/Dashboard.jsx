import DashboardHeader from "./DashboardHeader";
import TimingTable from "../timing/TimingTable";
import DriverPanel from "../driver/DriverPanel";
import TrackMap from "../track/TrackMap";
import StrategyPanel from "../strategy/StrategyPanel";
import RaceEvents from "../events/RaceEvents";

function Dashboard() {
  return (
    <>
      <main className="grid grid-cols-2">
        <div className="col-span-2">
          <DashboardHeader />
        </div>

        <TimingTable />
        <DriverPanel />

        <TrackMap />
        <StrategyPanel />
        
        <div className="col-span-2">
          <RaceEvents />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
