import { Model } from 'mongoose';

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCode = '01' | '02' | '03';

type IAcademicSemester = {
  title: IAcademicSemesterTitle;
  year: number;
  code: IAcademicSemesterCode;
  startMonth: Month;
  endMonth: Month;
};

type AcademicSemesterModel = Model<IAcademicSemester>;

export { AcademicSemesterModel, IAcademicSemester };
