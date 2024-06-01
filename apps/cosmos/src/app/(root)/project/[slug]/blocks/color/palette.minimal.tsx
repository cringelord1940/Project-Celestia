import { ColorBlockProps } from './palette.common'

export const MinimalColorPalette: React.FC<ColorBlockProps> = ({
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
          <div className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center py-3 md:py-4'>
            <button
              className='pointer-events-none rounded-md border px-2 py-0 text-xs font-light opacity-60 md:text-base'
              style={{
                color: color.textColor || 'white',
                borderColor: color.textColor || 'white',
              }}
            >
              {color.hex}
            </button>
            <p
              className='mt-2 text-base font-semibold uppercase tracking-wide md:text-xl'
              style={{ color: color.textColor || 'white' }}
            >
              {color.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
