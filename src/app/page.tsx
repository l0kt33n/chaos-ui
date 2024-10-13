import dynamic from 'next/dynamic';

const DemoContainer = dynamic(() => import('@/components/demo-container'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-8">
        <DemoContainer />
      </div>
    </main>
  )
}
