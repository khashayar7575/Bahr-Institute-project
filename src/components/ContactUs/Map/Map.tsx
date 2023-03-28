import React from 'react'

const Map = () => {
  return (
    <div className='mt-6 rounded-md'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.1508490459178!2d53.06279151525417!3d36.5986757799906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f851522e5d2c82f%3A0x999336efa3f829bb!2sRouzbahan%20Educational%20Institute!5e0!3m2!1sen!2s!4v1667519388280!5m2!1sen!2s'
        width='600'
        height='600'
        className='border-0 w-full rounded-xl shadow-lg'
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export { Map }
