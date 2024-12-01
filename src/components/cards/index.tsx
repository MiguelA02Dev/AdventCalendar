import React from "react";
import { motion } from "framer-motion";
import { classNames } from "@/utils/utils";
import Image from "next/image";

interface Props {
  onSelectDay: (id: number) => void;
  openedDays: number[];

  date: any;
  item?: any;
  daysOpen?: number[];
  timeLeft: any;
  isOpen: boolean;
}

const DayCardComponent: React.FC<Props> = ({
  date,
  item,
  timeLeft,
  daysOpen,
  onSelectDay,
  isOpen,
}) => {
  return (
    <motion.div
      animate={
        date?.format("DD") === item?.value
          ? {
              x: [0, 7, -7, 0],
              y: [0, 5, -5, 0],
            }
          : {}
      }
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      onClick={() => onSelectDay(item?.id)}
      className={classNames(
        item?.id === 24
          ? "col-span-1 sm:col-span-2 flex items-center justify-center text-white"
          : "col-span-1 flex items-center justify-end text-white",
        "relative flex justify-center items-center"
      )}
    >
      <motion.div
      key={`${item?.id}_${isOpen}`}
        whileHover={{ scale: 1.1 }}
        style={{
          backgroundColor: item.color,
        }}
        className={classNames(
          item?.id === 24
            ? "col-span-1 sm:col-span-2 flex items-center justify-center text-white"
            : "col-span-1 flex items-center justify-end text-white",
          "w-full h-[150px] font-bold rounded-lg relative p-[14px] cursor-pointer"
        )}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="absolute top-[10px] left-[24px] text-[22.6px] font-belleza"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p
            style={{
              color: item.font,
            }}
          >
            {item.value}
          </p>
        </motion.div>

        {item?.id === 24 ? (
          <>
            {daysOpen?.includes(item?.id) ? (
              <p
                style={{
                  color: item.font,
                }}
                className="text-[22.6px] font-belleza leading-[23px] mt-[10px]"
              >
                {item?.gift}
              </p>
            ) : (
              <img
                src={item?.icon}
                alt="logo"
                className="w-full h-full object-contain"
              />
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-row sm:flex-col justify-center items-center"
          >
            {daysOpen?.includes(item?.id) ? (
              <p
                style={{
                  color: item.font,
                }}
                className="text-[22.6px] font-belleza leading-[23px] mt-[10px]"
              >
                {item?.gift}
              </p>
            ) : (
              <Image src={item?.icon} width={90} height={90} alt="logo" className="w-[80px] h-[80px] lg:w-[110px] md:h-[110px]" />
            )}
            {date?.add(1, "day")?.format("DD") === item?.value ? (
              <p
                style={{
                  color: item.font,
                }}
                className="text-[22.6px] font-belleza"
              >
                {timeLeft?.hours}:{timeLeft?.minutes}:{timeLeft?.seconds}
              </p>
            ) : null}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DayCardComponent;
