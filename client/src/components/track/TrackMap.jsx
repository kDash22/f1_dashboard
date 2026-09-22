import { cars } from "../../data/mockdata";

function TrackMap() {
  return (
    <>
      <section>
        <h2>Track Map</h2>

        <div className="relative h-[500px] w-full">
          <div className="absolute inset-20 rounded-full border-8">
            {cars.map((car) => (
              <div
                key={car.code}
                className="absolute"
                style={{ left: `${car.x}%`, top: `${car.y}%` }}
              >
                {car.code}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TrackMap;
