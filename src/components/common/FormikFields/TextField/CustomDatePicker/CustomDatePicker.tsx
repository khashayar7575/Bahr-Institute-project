import React, { useState, FC } from 'react'
import { useFormikContext, ErrorMessage, useField } from 'formik'
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker'
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css'
import { toFarsiNumber } from '../../../../../core/utils/convert-numbers/to-farsi-number.utils'
import { integerToPersianNumber } from '../../../../../core/utils/convert-numbers/integer-to-persian-number.utils'
import { PrimaryButton } from '../../../Buttons/PrimaryButton'

type Data = {
  year: number
  month: number
  day: number
}

type Props = {
  fieldName: string
  label: string
}

const CustomDatePicker: FC<Props> = ({ fieldName, label }) => {
  // const [selectedDay, setSelectedDay] = useState<Data | null>(null)
  // const [inputValue, setInputValue] = useState<string | null>(null)
  const { setFieldValue } = useFormikContext()
  const [labelPosition, setLabelPosition] = useState(
    useField(fieldName)[0].value === '' ? 'down' : 'up'
  )
  const [field, meta, action] = useField(fieldName)

  const renderLabelClassName = () => {
    return labelPosition === 'down'
      ? ' -translate-x-6 top-0 translate-y-4'
      : ' px-2 -translate-x-4 -top-2 !text-xs'
  }

  const handleLabelUnfocus = () => {
    action.setTouched(true)
    // if (inputValue === null || inputValue === '') setLabelPosition('down')
    if (field.value === null || field.value === '') setLabelPosition('down')
    else setLabelPosition('up')
  }

  const handleDateChange = (data: Data): void => {
    const stringedDateObject = `${data.year}/${data.month}/${data.day}`
    // const dateToPersianNumber = `${toFarsiNumber(data.year)}/${integerToPersianNumber(
    //   data.month
    // )}/${integerToPersianNumber(data.day)}`

    // setInputValue(dateToPersianNumber)
    setFieldValue(fieldName, stringedDateObject)
  }

  // rendering a custom input for date picker
  type myRef = {
    ref: any
  }
  const renderCustomInput = ({ ref }: myRef) => (
    <input
      readOnly
      ref={ref}
      placeholder=' '
      value={field.value || ''}
      className='bg-white border-2 border-gray-300 text-neutral-700 text-sm rounded-lg block w-full px-6 py-3.5 outline-none appearance-none'
    />
  )

  return (
    <>
      <div
        className='relative rounded group'
        onFocus={() => setLabelPosition('up')}
        onBlur={handleLabelUnfocus}
      >
        <DatePicker
          // value={selectedDay}
          onChange={handleDateChange}
          inputPlaceholder={` `}
          shouldHighlightWeekends
          locale='fa'
          inputName='birthDate'
          renderInput={renderCustomInput}
          wrapperClassName='w-full relative !block bg-transparent border-none !z-0'
          calendarSelectedDayClassName='!bg-teal-600'
          calendarTodayClassName='!border-1 !font-medium !border-gray-300 after:invisible'
          renderFooter={() => (
            <div className='flex justify-center !pb-4 !px-8'>
              <PrimaryButton
                type='button'
                onClick={() => {
                  // setSelectedDay(null)
                  // setInputValue(null)
                  setFieldValue(fieldName, '')
                }}
              >
                تنظیم مجدد
              </PrimaryButton>
            </div>
          )}
        />
        <label
          className={
            'absolute text-sm text-gray-400 duration-300 transform origin-[0] bg-white cursor-text right-0 pointer-events-none !z-0' +
            renderLabelClassName()
          }
        >
          {label}
        </label>
        <div
          className={
            'w-1/2 h-[2px] absolute bottom-0 right-1/4 block' +
            (meta.touched && meta.error ? ' !bg-red-400' : ' bg-neutral-400') +
            (meta.touched && !meta.error ? ' !bg-green-400' : '') +
            (field.value !== '' && !meta.error ? ' !bg-green-400' : '')
          }
        ></div>
      </div>
      <div className='min-h-[45px]'>
        <ErrorMessage
          component='span'
          className='block pt-2 text-xs font-bold text-red-500'
          name={fieldName}
        ></ErrorMessage>
      </div>
    </>
  )
}

export { CustomDatePicker }
