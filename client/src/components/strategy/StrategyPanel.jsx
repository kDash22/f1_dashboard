import { strategy } from "../../data/mockdata";

function StrategyPanel() {
  return (
    <>
      <section>
        <h2>Tyre Strategy</h2>
        {strategy.map((strategy, index) => (
          <div key={index}>
            <span>{strategy.code}</span>
            <div>
              {strategy?.stints.map((stint, index) => (
                <span key={index}>
                  <span>{stint.tyre}</span> <span>{stint.laps}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default StrategyPanel;
