import React, { useState, useEffect } from 'react'

const colors: number[][] = [
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0],
]

const gradientSpeed: number = 0.002

const Gradient: React.FC = () => {
  const [colorIndices, setColorIndices] = useState<
    [number, number, number, number]
  >([0, 1, 2, 3])
  const [step, setStep] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(updateGradient, 5)
    return () => clearInterval(intervalId)
  }, [step, colorIndices])

  const updateGradient = (): void => {
    let newStep: number = step + gradientSpeed
    if (newStep >= 1) {
      newStep %= 1
      const newColorIndices: [number, number, number, number] = [
        ...colorIndices,
      ]
      newColorIndices[0] = newColorIndices[1]
      newColorIndices[2] = newColorIndices[3]
      newColorIndices[1] =
        (newColorIndices[1] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length
      newColorIndices[3] =
        (newColorIndices[3] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length
      setColorIndices(newColorIndices)
    }
    setStep(newStep)
  }

  const interpolateColor = (
    color1: number[],
    color2: number[],
    step: number
  ): string => {
    const r: number = Math.round((1 - step) * color1[0] + step * color2[0])
    const g: number = Math.round((1 - step) * color1[1] + step * color2[1])
    const b: number = Math.round((1 - step) * color1[2] + step * color2[2])
    return `${r},${g},${b}`
  }

  const color1: string = `rgb(${interpolateColor(
    colors[colorIndices[0]],
    colors[colorIndices[1]],
    step
  )})`
  const color2: string = `rgb(${interpolateColor(
    colors[colorIndices[2]],
    colors[colorIndices[3]],
    step
  )})`

  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${color1}, ${color2})`,
  }

  return <div className="background" style={gradientStyle}></div>
}

export default Gradient
