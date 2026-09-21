import { drivers } from "../../data/mockdata";
import DriverRow from "./DriverRow";

function TimingTable() {
  return (
    <>
      <div className="grid grid-cols-[50px_1fr_120px_100px_120px_150px]">
        <span>POS</span>
        <span>DRIVER </span>
        <span>GAP</span>
        <span>TYRE</span>
        <span>TYRE AGE</span>
        <span>LAST LAP</span>
      </div>

      {drivers.map((driver) => {
        <DriverRow key={driver.pos} driver={driver} />;
      })}
    </>
  );
}

export default TimingTable;
