import { drivers } from "../../data/mockdata";
import DriverRow from "./DriverRow";

function TimingTable() {
  return (
    <>
      <section className="border-2 p-2">
        <div className="grid grid-cols-[5%_25%_12%_12%_15%_12%_12%_7%] text-[.95rem]">
          <span>POS</span>
          <span>DRIVER </span>
          <span>LEADER</span>
          <span>GAP AHEAD</span>
          <span>TYRE</span>
          <span>LAST LAP</span>
          <span>BEST LAP</span>
          <span>PIT</span>
        </div>

        {drivers.map((driver) => (
          <DriverRow key={driver.pos} driver={driver} />
        ))}
      </section>
    </>
  );
}

export default TimingTable;
