import { useState } from 'react'
import * as Tone from 'tone'
import { homeAlone } from '../constants/homeAlone'

const useSynth = () => {
  const [indexTheme, setIndexTheme] = useState(0)
  const synth = new Tone.Synth().toDestination()

  const playNote = () => {
    const now = Tone.now()
    synth.triggerAttack(homeAlone[indexTheme], now)
    synth.triggerRelease(now + 0.5)
    setIndexTheme(prev => (prev + 1) % homeAlone.length)
  }

  return { playNote }
}

export default useSynth
