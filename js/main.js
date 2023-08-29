const { createApp } = Vue
console.log(Vue)

const helloApp = createApp( {
    data() {
        return {
            msg: "Hello world!"
        }
    }
})

helloApp.mount("#hello")