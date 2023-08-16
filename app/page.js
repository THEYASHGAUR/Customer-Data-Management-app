"use client";

// import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <div className='flex flex-col mx-2 lg:mx-32 my-10 gap-5'>

      <div className='flex gap-4  border-b-2 justify-between'>
        <h1 className='font-extrabold  py-8 items-center flex  tracking-tighter h-8 text-3xl text-black'>List of Customers</h1>
        <button className="rounded-md bg-green-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"> <Link href="/addCustomer">Add Customer</Link> </button>
      </div>
      x
      <div className='w-full h-full p-2 lg:p-10 bg-gray-200 rounded-xl shadow-md'>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email 
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                  Yash Gaur
                </th>
                <td className="px-6 py-4">
                  yashgaur2525@gmail.com
                </td>
                <td className="px-6 py-4">
                  92459834594
                </td>
                
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
              </tr>
              
              
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
