import { useShallow } from 'zustand/react/shallow'
import { useUiState, CURSOR } from '@/store'
import { contacts as contactsRaw } from '@config'
import SocialLinkIcon from './socialLinkIcon'

const CreditBlock = () => {
  const [_setCursor] = useUiState(useShallow((st) => [st.setCursor]))

  const contacts = [
    contactsRaw.facebook,
    contactsRaw.instagram,
    contactsRaw.youtube,
    contactsRaw.mail,
    contactsRaw.discord,
  ]

  return (
    <div
      className='flex items-center space-x-4 md:space-x-7'
      onMouseEnter={() => {
        _setCursor(CURSOR.LOGO)
      }}
      onMouseLeave={() => {
        _setCursor(undefined)
      }}
      onClick={() => {
        _setCursor(undefined)
      }}
    >
      {contacts.map((v, i) => (
        <SocialLinkIcon
          name={v.name}
          icon={v.icon}
          href={v.href}
          index={i}
          key={i}
        />
      ))}
    </div>
  )
}

export default CreditBlock
