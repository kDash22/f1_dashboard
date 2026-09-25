function DriverRow({ driver }) {
  {
    /* add the name of the driver as a pop up when hovering over code */
  }
  return (
    <>
      <div className="grid grid-cols-[5%_25%_12%_12%_15%_12%_12%_7%] text-sm">
        <span>{driver.position}</span>
        <span>
          {driver.code} {driver.team}
        </span>
        <span>{driver.gap}</span>
        <span>{driver.gapToCarAhead}</span>
        <span>
          {driver.tyreAge} {driver.tyre}
        </span>
        <span>{driver.lastLap}</span>
        <span>{driver.bestLap}</span>
        {driver.inPit ? <span>IN PIT</span> : <span>{driver.pitStops}</span>}
      </div>
    </>
  );
}

export default DriverRow;
