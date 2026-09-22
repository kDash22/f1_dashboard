import { selectedDriver, strategy } from "../../data/mockdata";

const selectedStratagey = strategy[1];

function DriverPanel() {
  return (
    <>
      <section>
        <h2>
          {selectedDriver.code} {selectedDriver.name}
        </h2>

        <div>
          <span>Status </span>
          <span>{selectedDriver.status}</span>
        </div>

        {/*Horizontal bar */}
        <div>
          <span>Position </span>
          <span>{selectedDriver.position}</span>
        </div>

        <div>
          <span>Last Lap </span>
          <span>{selectedDriver.lastLap}</span>
        </div>

        <div>
          <span>Best Lap </span>
          <span>{selectedDriver.bestLap}</span>
        </div>

        {/* horizontal bar */}
        <div>
          <span>Tyre </span>
          <span>{selectedDriver.tyre}</span>
        </div>

        <div>
          <span>Tyre Age </span>
          <span>{selectedDriver.tyreAge}</span>
        </div>

        {/* horizontal bar */}
        <div>
          <span>Strategy </span>
          <span>
            {selectedStratagey.stints.map((stint, index) => (
              <div key={index}>
                <span>{stint.tyre} </span>
                <span>{stint.laps} laps</span>
              </div>
            ))}
          </span>
        </div>

        {/*horizontal bar */}
        <div>
          <span>Sector 1 </span>
          <span>{selectedDriver.s1}</span>
        </div>

        <div>
          <span>Sector 2 </span>
          <span>{selectedDriver.s2}</span>
        </div>

        <div>
          <span>Sector 3 </span>
          <span>{selectedDriver.s3}</span>
        </div>
      </section>
    </>
  );
}

export default DriverPanel;
