import ENV from '../../../env.json'

const env = {
    getEnv (value) {
        return ENV[value]
    }
}

window.aka = window.aka || {}
window.aka.env = Object.assign(window.aka.env || {}, env)