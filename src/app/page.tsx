import Link from "next/link";
import dynamic from 'next/dynamic';

const DemoContainer = dynamic(() => import('@/components/demo-container'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-8">
        <DemoContainer />
        <Link href="/kitchen-sink" className="text-blue-500 hover:underline">
          Go to Kitchen Sink
        </Link>
      </div>
    </main>
  )
}
