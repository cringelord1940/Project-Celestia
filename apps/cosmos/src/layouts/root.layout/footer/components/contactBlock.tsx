import { useShallow } from 'zustand/react/shallow'
import { useUiState, CURSOR } from '@/store'
import { contacts as contactsRaw } from '@config'
import SocialLinkIcon from './socialLinkIcon'

const CreditBlock = () => {
  const [_setCursor] = useUiState(useShallow((st) => [st.setCursor]))

  const contacts = {
    facebook: contactsRaw.facebook,
    instagram: contactsRaw.instagram,
    youtube: contactsRaw.youtube,
    mail: contactsRaw.mail,
    discord: contactsRaw.discord,
  }

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
      {Object.entries(contacts).map(([key, href], i) => (
        <SocialLinkIcon name={key} href={href} index={i} key={key} />
      ))}
    </div>
  )
}

export default CreditBlock
