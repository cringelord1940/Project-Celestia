'use client'

import { UI } from '@global/store'
import { contacts as contactsRaw } from '@global/config'
import { SocialLinkIcon } from './footer.social.icon'

const ContactBlock = () => {
  const _setCursor = UI((state) => state.setCursor)

  const contacts = [
    contactsRaw.facebook,
    contactsRaw.instagram,
    contactsRaw.youtube,
    contactsRaw.mail,
    contactsRaw.discord,
  ]
  return (
    <div
      className='flex flex-col items-center space-x-0 space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0'
      onMouseEnter={() => {
        _setCursor('logo')
      }}
      onMouseLeave={() => {
        _setCursor(false)
      }}
      onClick={() => {
        _setCursor(false)
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

export { ContactBlock }
