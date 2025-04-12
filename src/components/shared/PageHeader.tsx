import React from 'react'
interface Props {
    titile: string
    subtitle: string
}
const PageHeader = ({titile, subtitle}: Props) => {
    return (
        <div className='flex  justify-center pt-[100px]'>
            <div className='text-center'>
                <h2 className='text-[35px] md:text-[40px] text-[#2A2A2A] font-semibold'>{titile}</h2>
                <p className='w-full md:w-[664px] text-base text-[#787878] font-normal leading-[150%] mt-4'>{subtitle}</p>
            </div>
        </div>
    )
}

export default PageHeader