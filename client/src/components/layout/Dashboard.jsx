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
        <div className="col-span-12 relative flex flex-col lg:block gap-4 lg:gap-0">
          <div className="w-full lg:w-7/12 flex flex-col gap-2">
            <DashboardHeader />
            <TimingTable />
          </div>
          <div className="w-full lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-5/12 flex justify-center items-center mt-4 lg:mt-0">
            <TrackMap />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <DriverPanel />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <RaceEvents />
        </div>

        <div className="col-span-12">
          <StrategyPanel />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
