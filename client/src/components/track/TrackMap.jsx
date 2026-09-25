import { cars } from "../../data/mockdata";
import monza from "../../assets/black-outline/monza-7.svg";

function TrackMap() {
  return (
    <>
      <section className="border-2 p-2 flex justify-center items-center h-full w-full">
        <div className="relative w-full max-h-full aspect-square">
          <img
            src={monza}
            alt="Monza Circuit"
            className="block w-full h-full object-contain"
          />
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
      </section>
    </>
  );
}

export default TrackMap;
