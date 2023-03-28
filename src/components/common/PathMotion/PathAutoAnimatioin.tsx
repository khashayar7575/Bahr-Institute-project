import React, { useState, useRef, useEffect, FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  color?: string
  children: any
  step?: [number, number]
  delay?: number
  duration?: number
  svgWidthPath?: number
  ease?: string
  height?: string
  width?: string
}

const PathAutoAnimatioin: FC<Props> = ({
  color = 'black',
  children,
  step = [0, 1],
  delay = 0,
  duration = 5,
  svgWidthPath = 1,
  ease = 'linear',
  height,
  width,
}) => {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const [pathLength, setPathLength] = useState(1000)
  const pathRef = useRef<any>()
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: duration,
        ease: ease,
        delay: delay,
      },
    },
  }
  useEffect(() => {
    setPathLength(
      (pathRef.current?.getTotalLength() * pathRef.current?.getBoundingClientRect().width) /
        pathRef.current?.getBBox().width
    )
  }, [])
  const pathVariants2 = {
    hidden: { strokeDashoffset: '0', overflow: 'scroll' },
    visible: {
      strokeDashoffset: -pathLength,
      //   strokeDasharray: "0 " + pathLength,
      transition: {
        duration: duration,
        ease: ease,
        delay: delay,
      },
    },
  }
  // console.log(pathLength)

  const renderedSvg = { ...children?.render('', '') }
  const path = { ...renderedSvg.props.children[1].props }
  const viewBoxValue = renderedSvg.props.viewBox

  const path2 = { ...renderedSvg.props.children[1].props }
  path.stroke = color
  path2.stroke = 'magenta'
  path.strokeWidth = svgWidthPath
  path2.strokeWidth = 7
  const viewBoxValue2 =
    viewBoxValue.split(' ').slice(0, 3).join(' ') + ` ${parseInt(viewBoxValue.split(' ')[3]) + 7}`
  return (
    <div className=' relative pb-2'>
      <motion.svg
        className=' w-full'
        width={width}
        height={height}
        viewBox={viewBoxValue2}
        variants={svgVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.path
          {...path}
          ref={pathRef}
          variants={pathVariants}
          //   strokeDasharray={pathLength + " 0"}
          //   vectorEffect="non-scaling-stroke"
        />
        <motion.path
          {...path2}
          strokeDasharray={'0 ' + pathLength}
          variants={pathVariants2}
          vectorEffect='non-scaling-stroke'
        />
        {/* {children} */}
      </motion.svg>
      {/* <motion.svg
        className=" absolute top-0 "
        width={width}
        height={height}
        viewBox={viewBoxValue2}
        variants={svgVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
      >
        //  {children} 
      </motion.svg> */}
    </div>
  )
}

export { PathAutoAnimatioin }
