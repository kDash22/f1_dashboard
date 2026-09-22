function RaceEvent(event) {
  return (
    <>
      <div>
        <div>
          <span>{event.lap}</span>
          <span>{event.type}</span>
        </div>
        <span>{event.message}</span>
      </div>
    </>
  );
}

export default RaceEvent;
