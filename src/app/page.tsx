import Link from "next/link";
import dynamic from 'next/dynamic';

const DemoContainer = dynamic(() => import('@/components/demo-container'), { ssr: false });

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/kitchen-sink" className="absolute top-4 right-4 text-blue-500 hover:underline">
        Go to Kitchen Sink
      </Link>
      <div className="flex flex-col items-center justify-center space-y-8">
        <DemoContainer />
      </div>
    </main>
  )
}
