<template>
    <div class='component-first'>
        <div>{{msg}}</div>
        <slot>slot default</slot>
        <slot name="slot-first">slot first</slot>
        <slot name="slot-second">slot second</slot>
        <slot name="slot-third">slot third</slot>
        <div v-for="(item, index) in data" :key="index">{{item.name}}</div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            msg: null
        }
    },
    created() {
        this.msg = 'my first component!!',
        console.log(this.$route);
        console.log(this);
    }
}
</script>

<style scoped>

</style>


