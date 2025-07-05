import {
  type ComponentProps,
  type FC,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import iconClose from "@/assets/svg/icon_close.svg";
import { cn } from "@/utils/twMerge";

export type ModalProps = {
  title: string;
  subtitle?: string;
  description?: string;
  showModal?: boolean;
  setShowModal: (value: boolean) => void;
  children: ReactNode;
  className?: ComponentProps<"dialog">["className"];
  titleContainerClassName?: ComponentProps<"section">["className"];
  customHeader?: ReactNode;
};

export const Modal: FC<ModalProps> = ({
  children,
  title,
  subtitle,
  description,
  showModal,
  setShowModal,
  className,
  titleContainerClassName,
  customHeader,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogRefCurrent = dialogRef?.current ? dialogRef.current : null;

    if (dialogRefCurrent) {
      if (showModal) {
        dialogRefCurrent.showModal();
      } else {
        dialogRefCurrent.close();
      }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const closeModal = () => setShowModal(false);

    if (dialogRefCurrent) {
      dialogRefCurrent.addEventListener("close", closeModal);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => {
      dialogRefCurrent?.removeEventListener("close", closeModal);
    };
  }, [showModal, setShowModal]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "px-6 py-6 pt-7 min-w-[300px] w-[45%] max-w-[668px] bg-white backdrop:bg-black backdrop:bg-opacity-20 rounded-md animate-fade-in",
        className
      )}
    >
      {customHeader ? (
        customHeader
      ) : (
        <section
          className={`flex items-center justify-between mb-8 ${titleContainerClassName}`}
        >
          <section>
            <h6 className="text-black">{title}</h6>
            {subtitle && <p className="text-sm text-black">{subtitle}</p>}
          </section>
          <button
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="border-none w-fit h-fit"
          >
            <img src={iconClose} alt="Close Modal" className="w-6 h-6" />
          </button>
        </section>
      )}
      {description && (
        <section className="mb-8">
          <p className="text-black">{description}</p>
        </section>
      )}
      {children}
    </dialog>
  );
};
