const Shape = () => {
  return (
    <div className=' h-max my-16 mx-auto w-[432px] lg:float-left lg:my-0'>
      <div className='inline-block ml-4 relative top-8 '>
        <div className='w-52 h-60 bg-neutral-400 rounded-lg rounded-tr-3xl pb-4'></div>
        <div className='w-52 h-40 bg-neutral-400  rounded-lg mt-5'></div>
      </div>
      <div className=' inline-block '>
        <div className='w-52 h-40 bg-neutral-400 rounded-lg mb-5'></div>
        <div className='w-52 h-60 bg-neutral-400 rounded-lg rounded-bl-3xl'></div>
      </div>
    </div>
  )
}

export { Shape }
