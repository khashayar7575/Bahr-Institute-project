import React, { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const PathScrollAnimation = ({
  color = 'black',
  children,
  start = 40,
  end = 50,
  fillPercent = 20,
  height,
  width,
}) => {
  const [drawValue, setDrawValue] = useState({
    set: 0,
    offset: 1000,
  })
  const [pathLength, setPathLength] = useState(1000)
  const svgRef = useRef()
  const pathRef = useRef()
  const calculateScrollPosition = () => {
    const pathLength =
      (pathRef.current.getTotalLength() * pathRef.current.getBoundingClientRect().width) /
      pathRef.current.getBBox().width
    const top = svgRef.current.getBoundingClientRect().top
    const screen = window.innerHeight
    const startTop = screen - (screen / 100) * start
    const endTop = screen - (screen / 100) * end
    const between = startTop - endTop
    const position = (startTop - Math.min(Math.max(top, endTop), startTop)) / between
    setDrawValue({
      set: position * pathLength,
      offset: pathLength - position * pathLength,
    })
    // setPathLength(pathRef.current.getTotalLength());
    // console.log(position, pathLength);
    // console.log(pathLength);
  }
  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPosition)
    setPathLength(
      (pathRef.current.getTotalLength() * pathRef.current.getBoundingClientRect().width) /
        pathRef.current.getBBox().width
    )

    return () => {
      window.removeEventListener('scroll', calculateScrollPosition)
    }
  }, [])
  const percent = (number, per) => {
    return (number / 100) * per
  }
  const renderedSvg = { ...children.render('', '') }
  const path = { ...renderedSvg.props.children[1].props }
  const viewBoxValue = renderedSvg.props.viewBox

  const path2 = { ...renderedSvg.props.children[1].props }

  return (
    <div ref={svgRef} className=' relative'>
      <svg className=' w-full' width={width} height={height} viewBox={viewBoxValue}>
        <path
          {...path}
          ref={pathRef}
          // strokeDasharray={`${drawValue.set} ${drawValue.offset}`}
          style={{
            stroke: 'rgb(150 150 150)',
            strokeWidth: '3px',
            strokeDasharray: drawValue.set + ' ' + pathLength,
            pathLength: pathLength,
            vectorEffect: 'non-scaling-stroke',
          }}
        />
        <path
          {...path}
          style={{
            stroke: 'rgb(74 74 74)',
            strokeWidth: '3px',
            strokeDasharray:
              Math.min(drawValue.set, percent(pathLength, fillPercent)) + ' ' + pathLength,
            pathLength: pathLength,
            strokeDashoffset: -Math.max(drawValue.set - percent(pathLength, fillPercent), 0),
            vectorEffect: 'non-scaling-stroke',
          }}
        />
        <path
          {...path2}
          strokeDashoffset={-drawValue.set}
          style={{
            stroke: 'rgb(255, 0, 131)',
            strokeWidth: '20px',
            strokeDasharray: '0 ' + (pathLength + 1),
            pathLength: pathLength,
            vectorEffect: 'non-scaling-stroke',
          }}
        />
      </svg>
    </div>
  )
}

export default PathScrollAnimation
