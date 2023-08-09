import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main>
      <h1 className='text-3xl text-center text-blue-500 font-semibold my-4'>Auth Simplified</h1>
      <div className="w-full flex items-center justify-center">
      <UserButton afterSignOutUrl="/"/>
    </div>
    <h1 className='text-3xl text-center text-blue-500 font-semibold my-4'>That is how simple it is</h1>
    </main>
  )
}
