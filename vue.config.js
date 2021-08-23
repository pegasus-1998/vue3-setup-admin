module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/style/mixin.scss";`
            }
        }
    },
}