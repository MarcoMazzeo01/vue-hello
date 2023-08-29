const { createApp } = Vue

createApp({
    data() {
        return {
            msg: "Hello world!",
            img: "./img/kitty.gif",
            alt: "kitty cat"
        }
    },
}).mount("#app")