import React from 'react'
import { IndianRupee } from 'lucide-react'
import { FinanceTable } from './finance-data-table'

export function FinanceOverview() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center p-5">
        <div className='h-[45%] md:h-[25%] w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14 my-4'>
            <div className='h-full w-full flex items-center justify-center rounded-4xl shadow-xl border-1 border-muted bg-[#4ade80]'>
                <IndianRupee className='h-7 md:h-10 w-7 md:w-10' />
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-2xl font-bold'>2,00,000</span>
                    <span className='text-sm'>Total Budget</span>
                </div>
            </div>
            <div className='h-full w-full flex items-center justify-center rounded-4xl shadow-xl border-1 border-muted bg-[#60a5fa]'>
                <IndianRupee className='h-7 md:h-10 w-7 md:w-10' />
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-2xl font-bold'>1,00,000</span>
                    <span className='text-sm'>Amount Paid</span>
                </div>
            </div>
            <div className='h-full w-full flex items-center justify-center rounded-4xl shadow-xl border-1 border-muted bg-[#de6f4a]'>
                <IndianRupee className='h-7 md:h-10 w-7 md:w-10' />
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-2xl font-bold'>1,00,000</span>
                    <span className='text-sm'>Balance Amount</span>
                </div>
            </div>
            
        </div>
        <div className='h-[55%] md:h-[75%] w-[90%] flex items-center justify-center'>
            <FinanceTable width="w-full" height="h-full" />
        </div>
    </div>
  )
}

