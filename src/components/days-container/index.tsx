import { DAYS } from "@/utils/constans";
import React from "react";
import DayCardComponent from "../cards";
import dayjs from "dayjs";
import Modal from "../utils/modals";

const DaysContainerComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [daysOpen, setDaysOpen] = React.useState<any[]>([]);
  const [daySelected, setDaySelected] = React.useState<any>(null);
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = dayjs("2023-12-3").endOf('day'); // Ajustamos el targetDate a la medianoche del día actual.

  React.useEffect(() => {
    const updateTimer = () => {
      const now = dayjs();
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const playSound = () => {
    const audio = new Audio("/sounds/box-sound.mp3");
    audio.play();
  };

  const handleSelectDay = (id: number) => {
    const daySelected = DAYS?.find((day) => day.id === id);

    if (daySelected && parseInt(targetDate?.format("DD")) >= daySelected?.id) {
      setDaySelected(daySelected);
      setIsOpen(true);

      const storedDays = JSON.parse(localStorage.getItem("daysopen") || "[]");

      if (!storedDays.includes(id)) {
        const updatedDays = [...storedDays, id];
        localStorage.setItem("daysopen", JSON.stringify(updatedDays));
        setDaysOpen(updatedDays);
      }
    } else {
      playSound();
    }
  };

  React.useEffect(() => {
    const storedDays = JSON.parse(localStorage.getItem("daysopen") || "[]");
    setDaysOpen(storedDays);
  }, []);

  console.log('daySelected', daySelected);
  return (
    <div className="w-full h-full bg-[#122721] col-span-1 sm:col-span-6 flex items-center justify-center">
      <div className="w-full flex items-center justify-center py-[60px] px-[20px] sm:px-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full">
          {DAYS?.map((item: any, index: number) => (
            <DayCardComponent
              key={index}
              item={item}
              openedDays={daysOpen}
              date={targetDate}
              onSelectDay={handleSelectDay}
              daysOpen={daysOpen}
              timeLeft={timeLeft}
              isOpen={daySelected?.id === item?.id}
            />
          ))}
        </div>
      </div>
      <Modal
        open={isOpen}
        setOpen={setIsOpen}
        background={daySelected?.secondColor}
        color={daySelected?.color}
        secondColor={daySelected?.color}
        icon={daySelected?.icon}
        message={daySelected?.message}
        title={daySelected?.gift}
        url={daySelected?.url}
      />
    </div>
  );
};

export default DaysContainerComponent;
