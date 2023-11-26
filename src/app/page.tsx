import DiceCaptcha from '@/components/demos/captchas/dice';
import GlitchyHeaderText from '@/components/demos/glitchy-header';
import dynamic from "next/dynamic";

const ConsentDialog= dynamic(() => import("@/components/demos/consent-dialog"), {
  ssr: false,
  });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-8">
        <ConsentDialog />
        <GlitchyHeaderText />
        <DiceCaptcha />
      </div>
    </main>
  )
}
