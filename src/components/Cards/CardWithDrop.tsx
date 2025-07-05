import { EmbossedButton } from "../Buttons/EmbossedButton";
import "./CardWithDrop.css";

export const CardWithDrop: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <section className="bg-transparent rounded-3xl w-fit min-w-[30rem] relative grid grid-cols-[1fr_auto] card ">
      <div className="card__header"></div>
      <div className="card__body"></div>

      <div className="card__btn">
        <EmbossedButton className="btn">
          <span>Click me</span>
        </EmbossedButton>
      </div>
    </section>
  );
};
