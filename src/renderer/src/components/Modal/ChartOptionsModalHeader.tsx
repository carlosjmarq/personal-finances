import { FC } from 'react';
import iconClose from '../../assets/svg/icon_close.svg';
import iconArrowLeft from '../../assets/svg/icon_arrow_large_left.svg';

interface ChartOptionsModalHeaderProps {
  title: string;
  description: string;
  openChartSelector: () => void;
  closeModal: () => void;
}

const ChartOptionsModalHeader: FC<ChartOptionsModalHeaderProps> = ({
  title,
  description,
  openChartSelector,
  closeModal,
}) => {
  return (
    <section className="flex items-center justify-between mb-8 px-6">
      <section className="w-full">
        <section className="flex justify-between w-full mb-10">
          <button onClick={openChartSelector} className="border-none w-fit h-fit">
            <img src={iconArrowLeft} alt="Go back" className="w-6 h-6" />
          </button>
          <button onClick={closeModal} className="border-none w-fit h-fit">
            <img src={iconClose} alt="Close Modal" className="w-6 h-6" />
          </button>
        </section>
        <section>
          <h6 className="text-black">{title}</h6>
          <p className="text-sm text-black">{description}</p>
        </section>
      </section>
    </section>
  );
};

export default ChartOptionsModalHeader;
