# telegram-login-button

[![npm version][npmv-image]][npmv-url]
[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]

## Installation

```
npm install telegram-login-button
```

There are also UMD builds available via [unpkg](https://unpkg.com/):

- https://unpkg.com/telegram-login-button/dist/telegram-login-button.umd.development.js
- https://unpkg.com/telegram-login-button/dist/telegram-login-button.umd.production.js

> React Telegram login button

## Usage

```jsx
import React from 'react'
import { render } from 'react-dom'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'

render(
  <TelegramLoginButton
    botName="test"
    dataOnauth={(user: TelegramUser) => console.log(user)}
  />,
  document.getElementById('root')
)
```

## API

**Props**

- `botName` - _Required_ | _string_ | your bot username without @.
- `dataOnauth` - _Required_ | _function_ | call back on user authentication.
- `usePic` - _Optional_ | _boolean_ | show user profile alongside button. defaults to false.
- `className` - _Optional_ | _string_ | extra className to override things. defaults to undefined.
- `cornerRadius` - _Optional_ | _number_ (in pixel) | radius of the button. defaults to undefined.
- `requestAccess` - _Optional_ | _boolean_ | to send messages from your bot. defaults to true.
- `buttonSize` - _Optional_ | _'large'_ or _'medium'_ or _'small'_ | button size. defaults to large.

## License

MIT

[travis-image]: https://img.shields.io/travis/bardiarastin/telegram-login-button/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/bardiarastin/telegram-login-button
[codecov-image]: https://img.shields.io/codecov/c/github/bardiarastin/telegram-login-button.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/bardiarastin/telegram-login-button
[npmv-image]: https://img.shields.io/npm/v/telegram-login-button.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/telegram-login-button
[npmd-image]: https://img.shields.io/npm/dm/telegram-login-button.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/telegram-login-button
