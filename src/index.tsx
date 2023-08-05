import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'

export interface TelegramUser {
  id: number
  first_name: string
  username: string
  photo_url: string
  auth_date: number
  hash: string
}

interface Props {
  botName: string
  usePic?: boolean
  className?: string
  cornerRadius?: number
  requestAccess?: boolean
  dataOnauth: (user: TelegramUser) => void
  buttonSize?: 'large' | 'medium' | 'small'
}

declare global {
  interface Window {
    TelegramLoginWidget: {
      dataOnauth: (user: TelegramUser) => void
    }
  }
}

const TelegramLoginButton: React.SFC<Props> = props => {
  const ref = useRef<HTMLDivElement>(null)

  const {
    usePic = false,
    botName,
    className,
    buttonSize = 'large',
    dataOnauth,
    cornerRadius,
    requestAccess = true
  } = props

  useEffect(() => {
    if (ref.current === null) return

    window.TelegramLoginWidget = {
      dataOnauth: (user: TelegramUser) => dataOnauth(user)
    }

    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-widget.js?22'
    script.setAttribute('data-telegram-login', botName)
    script.setAttribute('data-size', buttonSize)

    if (cornerRadius !== undefined) {
      script.setAttribute('data-radius', cornerRadius.toString())
    }

    if (requestAccess) {
      script.setAttribute('data-request-access', 'write')
    }

    script.setAttribute('data-userpic', usePic.toString())
    script.setAttribute('data-onauth', 'TelegramLoginWidget.dataOnauth(user)')
    script.async = true

    ref.current.appendChild(script)
  }, [
    botName,
    buttonSize,
    cornerRadius,
    dataOnauth,
    requestAccess,
    usePic,
    ref
  ])

  return <div ref={ref} className={className} />
}

TelegramLoginButton.propTypes = {
  botName: PropTypes.string.isRequired,
  usePic: PropTypes.bool,
  className: PropTypes.string,
  cornerRadius: PropTypes.number,
  requestAccess: PropTypes.bool,
  dataOnauth: PropTypes.func.isRequired,
  buttonSize: PropTypes.oneOf(['large', 'medium', 'small'])
}

export default TelegramLoginButton
