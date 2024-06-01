import { ColorBlockProps } from './palette.common'

export const DefaultColorPalette: React.FC<ColorBlockProps> = ({
  colorPalette,
}) => {
  return (
    <div className='container my-[6rem] grid h-[500px] grid-cols-1 gap-8 md:h-[300px] md:grid-cols-3 xl:h-[400px]'>
      {colorPalette.color.map((color, i: number) => (
        <div
          className='Anim AnimTranslate-10 AnimRotate-1 relative overflow-hidden rounded-[1rem]'
          key={i}
          style={{ backgroundColor: color.hex }}
        >
          <div className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center bg-white/60 py-3 backdrop-blur-md md:py-4'>
            <button className='pointer-events-none rounded-md border border-black/40 bg-white/60 px-2 py-0 text-xs text-black md:text-base'>
              {color.hex}
            </button>
            <p
              className='mt-2 text-xs font-semibold uppercase tracking-wide md:text-base'
              style={{ color: color.textColor || 'black' }}
            >
              {color.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
