# @roshan-labs/eslint-config

整合 `@nuxt/eslint-config` 与 `prettier` 规则

## 安装

```bash
pnpm add @roshan-labs/eslint-config eslint -D
```

## 使用

扁平配置

```js
// eslint.config.mjs
import config from '@roshan-labs/eslint-config'

export default [...config]
```

旧版配置

```js
// eslint.config.js
module.exports = {
  extends: ['@roshan-labs/eslint-config'],
}
```

## License

MIT
