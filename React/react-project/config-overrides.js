import { override, addLessLoader, addDecoratorsLegacy } from 'customize-cra'
import

module.exports = override(
    addDecoratorsLegacy(),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,

        }
    })
)