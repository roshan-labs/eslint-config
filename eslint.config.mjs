import config from './index.mjs'

export default [...(await config.toConfigs())]
