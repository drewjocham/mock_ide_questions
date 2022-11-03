import bus from '../lib/bus'
import { events, TOKEN_KEY } from '@/constants'

const getMetadata = () => {
    return {
        [TOKEN_KEY]: localStorage.getItem(TOKEN_KEY)
    }
}

const deps = {
    bus,
    events,
    tokenKey: TOKEN_KEY,
    getMetadata,
    proto: {
        apiClient: "localhost:8082"
    }
}

const requireFile = require.context(
    '../services',
    false,
    /[\w-]+\.js$/
)

const services = {}
requireFile.keys().forEach(fileName => {
    const config = requireFile(fileName)
    const name = fileName
        .replace(/^\.\//, '')
        .replace(/^\.\/_/, '')
        .replace(/\.\w+$/, '')
    const Service = config.default || config
    services[name] = new Service(deps)
})

export default ({ Vue }) => {
    Vue.prototype.$service = services
}
