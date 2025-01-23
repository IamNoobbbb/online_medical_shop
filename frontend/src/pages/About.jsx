import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to MEDIKABAZAR, your trusted partner in health and wellness. Founded with the mission to provide accessible, reliable, and high-quality healthcare solutions, we strive to be more than just a pharmacy—we aim to be a part of your journey toward better health.</p>
              <p>At MEDIKABAZAR, we understand the importance of timely access to medications and healthcare essentials. That’s why we offer a comprehensive range of prescription medicines, over-the-counter products, health supplements, and personal care items, ensuring you find everything you need under one roof.</p>
              <p>Our team of experienced pharmacists and healthcare professionals is committed to delivering personalized care and expert guidance. Whether you have questions about your prescriptions, need advice on managing chronic conditions, or are looking for preventive health solutions, we’re here to help.</p>
              <p>We also embrace the convenience of modern technology. With our user-friendly online platform, you can browse our inventory, place orders, and have your medicines delivered straight to your doorstep.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>"Our mission is to keep you healthy, happy, and stocked with meds—because laughter might be the best medicine, but we’ve got the rest just in case!"</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality You Can Trust</b>
            <p className=' text-gray-600'>We provide only genuine, high-quality medicines and healthcare products, sourced from trusted manufacturers, so you can shop with confidence.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Fast and Reliable Service</b>
            <p className=' text-gray-600'>Whether you visit us in-store or order online, we ensure quick, hassle-free service with doorstep delivery to meet your health needs on time.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Expert Guidance</b>
            <p className=' text-gray-600'>Our friendly and knowledgeable pharmacists are always ready to offer personalized advice, helping you make informed decisions about your health.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
