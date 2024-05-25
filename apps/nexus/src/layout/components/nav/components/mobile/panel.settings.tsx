import clsx from 'clsx'
import { useAudio } from '@nexel/nextjs/libs/hooks/audio'
import { Icon } from '@nexel/cosmos/assets'
import { UI } from '@global/store'

const SettingsPanel = ({
  _dark,
  _setDark,
}: {
  _dark: boolean
  _setDark: (v: boolean) => void
}) => {
  const _audio = UI((state) => state.audio)
  const _setAudio = UI((state) => state.setAudio)
  const [audioPlaying, toggleAudio] = useAudio(_audio, _setAudio)
  const audioToggle = () => {
    toggleAudio()
  }

  return (
    <>
      <div className='flex h-full flex-col'>
        <div
          onClick={() => _setDark(!_dark)}
          className='mb-2 flex justify-between rounded-md bg-black/5 px-4 py-2 dark:bg-white/5'
        >
          <p className='h-full align-middle'>Dark mode</p>
          <div className='fill-dark w-6 p-1 dark:fill-white'>
            <Icon.Dark />
          </div>
        </div>
        <div
          onClick={() => audioToggle()}
          className={clsx(
            'flex justify-between rounded-md bg-black/5 px-4 py-2 dark:bg-white/5',
            audioPlaying &&
              'border-quaternary-2 dark:border-primary-0 border-l-2',
          )}
        >
          <p className='h-full align-middle'>Audio</p>
          <div className='fill-dark w-6 p-1 dark:fill-white'>
            {audioPlaying ? <Icon.SoundOn /> : <Icon.SoundOff />}
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPanel
