'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RunawayButton from "@/components/demos/runaway-button";
import DiceCaptcha from "@/components/demos/captchas/dice";
import GlitchyHeaderText from "@/components/demos/glitchy-header";
import ConsentDialog from "@/components/demos/consent-dialog";
import AgeConfirmDialog from "@/components/demos/age-confirm-dialog";
import { useRef, useState } from "react";

export default function KitchenSink() {
  const runawayButtonContainerRef = useRef<HTMLDivElement>(null);
  const [showConsentDialog, setShowConsentDialog] = useState(false);
  const [showAgeConfirmDialog, setShowAgeConfirmDialog] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Kitchen Sink</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card ref={runawayButtonContainerRef}>
          <CardHeader>
            <CardTitle>Runaway Button</CardTitle>
          </CardHeader>
          <CardContent>
            <RunawayButton containerRef={runawayButtonContainerRef} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dice Captcha</CardTitle>
          </CardHeader>
          <CardContent>
            <DiceCaptcha onSuccess={() => {}} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Glitchy Header</CardTitle>
          </CardHeader>
          <CardContent>
            <GlitchyHeaderText />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consent Dialog</CardTitle>
          </CardHeader>
          <CardContent>
            <ConsentDialog open={showConsentDialog} onConfirm={() => setShowConsentDialog(false)} />
            <Button onClick={() => setShowConsentDialog(true)}>Show Dialog</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Age Confirm Dialog</CardTitle>
          </CardHeader>
          <CardContent>
            <AgeConfirmDialog open={showAgeConfirmDialog} onConfirm={() => setShowAgeConfirmDialog(false)} />
            <Button onClick={() => setShowAgeConfirmDialog(true)}>Show Dialog</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
