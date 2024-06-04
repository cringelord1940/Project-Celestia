import { ColorBlockProps } from './palette.common'

export const DefaultColorPalette: React.FC<ColorBlockProps> = ({
  colorPalette,
}) => {
  return (
    <div className='_project-color container'>
      {colorPalette.color.map((color, i: number) => (
        <div
          className='Anim AnimTranslate-10 AnimRotate-1 _project-color-default'
          key={i}
          style={{ backgroundColor: color.hex }}
        >
          <div>
            <button>{color.hex}</button>
            <p style={{ color: color.textColor || 'black' }}>{color.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
