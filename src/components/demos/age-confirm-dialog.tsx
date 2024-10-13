"use client"

import React, { useCallback, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import BadlyOrderedDatePicker from '@/components/demos/badly-ordered-date-picker/badly-ordered-date-picker'
import { DialogProps } from '@radix-ui/react-dialog'

interface AgeConfirmDialogProps extends DialogProps{
    onConfirm?: (date: Date) => void
};

export default function AgeConfirmDialog({ onConfirm, ...props }: AgeConfirmDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date)
  }, [])

  const handleConfirm = () => {
    if (selectedDate) {
      console.log("Confirmed date of birth:", selectedDate)
      onConfirm?.(selectedDate)
    }
  }

  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-[425px]" closeable={false}>
        <DialogHeader>
          <DialogTitle>Confirm Your Age</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4">Please enter your date of birth:</p>
          <BadlyOrderedDatePicker onChange={handleDateChange}/>
        </div>
        <Button onClick={handleConfirm} disabled={!selectedDate}>
          Confirm
        </Button>
      </DialogContent>
    </Dialog>
  )
}

