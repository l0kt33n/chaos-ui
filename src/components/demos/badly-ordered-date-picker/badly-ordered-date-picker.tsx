"use client"

import React, { useState, useEffect } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

type BadlyOrderedDatePickerProps = {
  onChange?: (date: Date) => void
}

export default function BadlyOrderedDatePicker({ onChange }: BadlyOrderedDatePickerProps) {
  const [year, setYear] = useState<number | null>(null)
  const [month, setMonth] = useState<number | null>(null)
  const [day, setDay] = useState<number | null>(null)

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 201 }, (_, i) => currentYear - 200 + i).toReversed();
  const months = [
    "April", "August", "December", "February", "January", "July", 
    "June", "March", "May", "November", "October", "September"
  ]
  const days = Array.from({ length: 31 }, (_, i) => i + 1).sort((a, b) => {
    return a.toString().localeCompare(b.toString(), undefined, { numeric: false })
  })

  useEffect(() => {
    if (year !== null && month !== null && day !== null) {
      const date = new Date(year, month, day)
      onChange?.(date)
    }
  }, [year, month, day, onChange])


  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Label htmlFor="year">Year</Label>
        <Select value={year !== null ? String(year) : undefined} onValueChange={(value) => setYear(Number(value))}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {years.map((y) => (
                <SelectItem key={y} value={String(y)}>
                  {y}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="month">Month</Label>
        <Select value={month !== null ? String(month) : undefined} onValueChange={(value) => setMonth(Number(value))}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {months.map((m, index) => (
                <SelectItem key={m} value={String(index)}>
                  {m}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="day">Day</Label>
        <Select value={day !== null ? String(day) : undefined} onValueChange={(value) => setDay(Number(value))}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {days.map((d) => (
                <SelectItem key={d} value={String(d)}>
                  {d}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
