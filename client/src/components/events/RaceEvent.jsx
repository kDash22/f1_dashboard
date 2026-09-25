function RaceEvent({ event }) {
  return (
    <>
      <div className="border-2 p-1">
        <div>
          <span>L {event.lap}</span>
          <span> {event.type}</span>
        </div>
        <span>{event.message}</span>
      </div>
    </>
  );
}

export default RaceEvent;
