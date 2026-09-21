function DriverRow(driver) {
  {
    /* add the name of the driver as a pop up when hovering over code */
  }
  return (
    <>
      <div className="grid grid-cols-[50px_1fr_120px_100px_120px_150px]">
        <span>{driver.position}</span>
        <span>
          {driver.code} {driver.team}
        </span>
        <span>{driver.gap}</span>
        <span>{driver.tyre}</span>
        <span>{driver.tyreAge}</span>
        <span>{driver.lastLap}</span>
      </div>
    </>
  );
}

export default DriverRow;
