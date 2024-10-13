"use client"

import DiceCaptcha from '@/components/demos/captchas/dice';
import GlitchyHeaderText from '@/components/demos/glitchy-header';
import ConsentDialog from '@/components/demos/consent-dialog';
import AgeConfirmDialog from '@/components/demos/age-confirm-dialog';
import { useState } from 'react';

export default function DemoContainer() {
    const [showConsentDialog, setShowConsentDialog] = useState(true);
    const [showAgeConfirmDialog, setShowAgeConfirmDialog] = useState(false);

    const handleConsentDialogConfirm = () => {
        setShowConsentDialog(false);
        setShowAgeConfirmDialog(true);
    }

    const handleAgeConfirmDialogConfirm = (date: Date) => {
        setShowAgeConfirmDialog(false);
        console.log("Confirmed date of birth:", date);
    }

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <GlitchyHeaderText />
      <DiceCaptcha />
      <ConsentDialog open={showConsentDialog} onConfirm={handleConsentDialogConfirm} />
      <AgeConfirmDialog open={showAgeConfirmDialog} onConfirm={handleAgeConfirmDialogConfirm} />
    </div>
  )
}

