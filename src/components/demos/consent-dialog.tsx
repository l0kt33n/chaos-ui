"use client"

import React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogProps } from "@radix-ui/react-dialog";

interface ConsentDialogProps extends DialogProps {
  onConfirm?: () => void
}

export default function ConsentDialog({ onConfirm, ...props }: ConsentDialogProps) {
  const [hoveredButton, setHoveredButton] = useState<"left" | "right" | null>(null);

  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-[425px]" closeable={false}>
        <DialogHeader >
          <DialogTitle>
            Welcome to Chaos UI
          </DialogTitle>
          <DialogDescription>
            Do you provide consent to proceed to the website?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className='min-w-[4rem]'
            variant={hoveredButton === 'left' || hoveredButton === null ? 'default' : 'secondary'}
            onMouseEnter={() => setHoveredButton('left')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => {
              onConfirm?.();
            }}
          >
            {hoveredButton === 'right' ? 'No' : 'Yes'}
          </Button>
          <Button
            className='min-w-[4rem]'
            variant={hoveredButton === 'right' ? 'default' : 'secondary'}
            onMouseEnter={() => { setHoveredButton('right') }}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => {
              onConfirm?.();
            }}
          >
            {hoveredButton === 'left' || hoveredButton === null ? 'No' : 'Yes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}