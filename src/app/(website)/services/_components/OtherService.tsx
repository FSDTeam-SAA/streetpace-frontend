import PageHeader from '@/components/shared/PageHeader'
import React from 'react'
import ServicesGrid from './SarviceGrid'

const OtherService = () => {
  return (
      <div>
      <PageHeader titile='Other Services' subtitle='Our Services are designed to meet a wide range of customer needs with quality and efficiency. We offer personalized solutions across various industries,' />
      <ServicesGrid />
    </div>
  )
}

export default OtherService