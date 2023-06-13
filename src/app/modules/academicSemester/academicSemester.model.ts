import status from 'http-status';
import { Schema, model } from 'mongoose';

import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import ApiError from '../../../errors/ApiError';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      required: true,
      type: String,
      enum: academicSemesterTitles,
    },
    year: {
      required: true,
      type: Number,
    },
    code: {
      required: true,
      type: String,
      enum: academicSemesterCodes,
    },
    startMonth: {
      required: true,
      type: String,
      enum: academicSemesterMonths,
    },
    endMonth: {
      required: true,
      type: String,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic semester is already exist!');
  }
  next()
});


export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);