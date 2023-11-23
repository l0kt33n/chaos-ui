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

// a simple modal, that asks user for consent before proceeding to the website
// There is no way to opt out of this, because whichever button user hovers or clicks, it will become yes.
// This is intentional, because this is a demo of bad user interface.


export default function ConsentDialog() {
  const [showModal, setShowModal] = useState(true);
  const [hoveredButton, setHoveredButton] = useState<"left" | "right" | null>(null);

  function hideModal() {
    setShowModal(false);
  }

  return (
    <Dialog open={showModal}>
      <DialogContent className="sm:max-w-[425px]" closeable={false}>
        <DialogHeader >
          <DialogTitle>
            Welcome to Chaos UI
          </DialogTitle>
          <DialogDescription>
            Do you provide consent in order to proceed to the website?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className='min-w-[4rem]'
            variant={hoveredButton === 'left' || hoveredButton === null ? 'default' : 'secondary'}
            onMouseEnter={() => setHoveredButton('left')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={hideModal}
          >
            {hoveredButton === 'right' ? 'No' : 'Yes'}
          </Button>
          <Button
            className='min-w-[4rem]'
            variant={hoveredButton === 'right' ? 'default' : 'secondary'}
            onMouseEnter={() => { setHoveredButton('right') }}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={hideModal}
          >
            {hoveredButton === 'left' || hoveredButton === null ? 'No' : 'Yes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}