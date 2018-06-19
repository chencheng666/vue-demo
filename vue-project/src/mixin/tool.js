export default {
    data() {
        return {
            mixinData: 'this is mixins data'
        }
    },
    methods: {
        init() {
            console.log('this is mixins methods init function!');
        }
    },
    created() {
        this.init();
    }
}