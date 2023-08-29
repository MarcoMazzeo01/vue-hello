const { createApp } = Vue

const helloApp = createApp( {
    data() {
        return {
            msg: "Hello world!"

        }
    }
});


const bonusApp = createApp({
    data() {
        return {
            img: "./img/kitty.gif",
            alt: "kitty cat"
        }
    },
    template: `
    <img :src="img" :alt="alt">
    `,
})

helloApp.mount("#hello")
bonusApp.mount("#kitty")