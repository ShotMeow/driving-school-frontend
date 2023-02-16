import { ScheduleEnum } from "@/store/api/schedules/schedules.types";

export const getScheduleType = (type: ScheduleEnum) => {
  switch (type) {
    case ScheduleEnum.Practice:
      return "Практика";
    case ScheduleEnum.Testing:
      return "Тестирование";
    case ScheduleEnum.Theory:
      return "Теория";
  }
};
