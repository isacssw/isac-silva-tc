'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

interface DatePickerValue {
  startDate: Date
  endDate: Date
}

export function MyDatePicker() {
  const router = useRouter()

  const dayBeforeYesterday = new Date()
  dayBeforeYesterday.setDate(new Date().getDate() - 2)

  const [value, setValue] = useState<DatePickerValue>({
    startDate: dayBeforeYesterday,
    endDate: new Date(),
  })

  const handleValueChange = (newValue: DatePickerValue): void => {
    router.push(`asteroids/${newValue.startDate}&${newValue.endDate}`)
    setValue(newValue)
  }

  return (
    <div className="w-full gap-8 px-4 py-6 justify-center flex bg-gray-100">
      <div className="w-80">
        <Datepicker value={value} onChange={handleValueChange} />
      </div>
    </div>
  )
}
