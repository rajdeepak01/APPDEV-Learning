// Vuejs example for setTimeout

export default {
    data() {
        return { message: "Wating...", visible: false, timeoutId:null}
    },
    mountend(){
        this.timeoutId = setTimeout(() => {
            this.visible = true;
            this.message = "Hello from vue!";
        }, 2000);
    },
    beforeUnmount() {
        clearTimeout(this.timeoutId);
    }
};
