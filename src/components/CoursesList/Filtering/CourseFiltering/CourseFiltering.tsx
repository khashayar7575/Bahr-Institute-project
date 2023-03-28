import React, { FC } from 'react'
import { GetCourseDataType } from '../../../../core/utils/types/data-types/data-types.utils'
import { CategoryFiltering } from '../CategoryFiltering/CategoryFiltering'
import { CapacityFiltering } from '../CapacityFiltering/CapacityFiltering'
import { CourseStatus } from '../CourseStatus/CourseStatus'
import { FilteringViaInstructors } from '../FilteringViaInstructors/FilteringViaInstructors'
import { CostRange } from './../CostRange/CostRange'
import { PrimaryButton } from './../../../common/Buttons/PrimaryButton'
import { motion, Variants } from 'framer-motion'

type Props = {
  onCategorySelectChange: (arg: string[]) => void
  selectedCategories: string[]
  handleCapacityChange: (arg: string) => void
  valueOfCapacity: string
  handleStatusChange: (arg: string) => void
  valueOfStatus: string
  onInstructorsSelectChange: (arg: string[]) => void
  selectedInstructors: string[]
  coursesList: GetCourseDataType[]
  costRange: { min: number; max: number }
  onCostRangeChange: (arg: { min: number; max: number }) => void
  onFilteringReset: () => void
}

const CourseFiltering: FC<Props> = ({
  onCategorySelectChange,
  selectedCategories,
  handleCapacityChange,
  valueOfCapacity,
  handleStatusChange,
  valueOfStatus,
  onInstructorsSelectChange,
  selectedInstructors,
  coursesList,
  costRange,
  onCostRangeChange,
  onFilteringReset,
}) => {
  const onLoadAnimation: Variants = {
    hidden: {
      opacity: 0,
      top: -200,
    },
    onView: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <motion.div
      initial='hidden'
      variants={onLoadAnimation}
      whileInView='onView'
      viewport={{ once: false, amount: 0.5 }}
      className='flex justify-between bg-white rounded-lg shadow-lg p-2'
    >
      <div className='w-4/6'>
        <div className='p-2'>
          <CategoryFiltering
            selectedCategories={selectedCategories}
            onCategorySelectChange={onCategorySelectChange}
          />
        </div>
        <div className='p-2'>
          <CostRange
            initialValue={{ min: 10000, max: 5000000 }}
            rangeValue={costRange}
            onValueChange={onCostRangeChange}
          />
        </div>
      </div>
      <div className=' p-2 w-2/6'>
        <div className=''>
          <CourseStatus handleStatusChange={handleStatusChange} valueOfStatus={valueOfStatus} />
        </div>
        <div className='mt-12'>
          <CapacityFiltering
            handleCapacityChange={handleCapacityChange}
            valueOfCapacity={valueOfCapacity}
          />
        </div>
      </div>
      <div className='p-2 w-2/6'>
        <FilteringViaInstructors
          selectedInstructors={selectedInstructors}
          onInstructorsSelectChange={onInstructorsSelectChange}
          coursesList={coursesList}
        />
      </div>
    </motion.div>
  )
}

export { CourseFiltering }
