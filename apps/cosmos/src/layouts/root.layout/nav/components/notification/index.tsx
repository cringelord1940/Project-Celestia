import { User } from '@/store'
import { eNavDropdownState } from '@/store/ui.store'
import { Notification as NotiIcon } from '@nexel/cosmos/assets/icons/notification'

import ListPopupDropdown from '../listPopupDropdown'

const NotificationBlock = ({
  _setNavDropdown,
  _navDropdown,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
}) => {
  const _notifications = User((state) => state.notifications)
  const _setNotification = User((state) => state.setNotifications)

  return (
    <ListPopupDropdown
      _setNavDropdown={_setNavDropdown}
      _navDropdown={_navDropdown}
      state={eNavDropdownState.NOTIFICATIONS}
      icon={<NotiIcon />}
      items={_notifications}
      buttonText='clear all'
      buttonCallback={() => _setNotification([])}
    />
  )
}

export default NotificationBlock
