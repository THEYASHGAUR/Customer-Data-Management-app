import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col mx-36 my-10 gap-5'>

      <div className='flex gap-4  border-b-2 justify-between'>
        <h1 className='font-extrabold  py-8 items-center flex  tracking-tighter h-8 text-3xl text-black'>List of Customers</h1>
        <button className="rounded-md bg-green-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Add Customer</button>
      </div>

      <div className='w-full h-[500px] bg-gray-200 rounded-xl shadow-md'></div>
    </div>
  )
}
