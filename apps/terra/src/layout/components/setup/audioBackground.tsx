'use client'
import { useEffect, useRef } from 'react'
import { UI } from '@global/store'
import { useAudio } from '@nexel/nextjs/libs/hooks/audio'

const AudioUrl = '/layout/audio/WebSound.mp3'

const AudioComp = () => {
  const _audio = UI((state) => state.audio)
  const _setAudio = UI((state) => state.setAudio)
  const [audio] = useAudio(_audio, _setAudio)
  const BGaudio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audio ? BGaudio.current?.play() : BGaudio.current?.pause()
  }, [audio])

  return (
    <>
      <audio ref={BGaudio} loop key='audioBG'>
        <source src={AudioUrl} type='audio/mpeg' />
      </audio>
    </>
  )
}

export default AudioComp
