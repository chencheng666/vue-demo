<template>
    <div class='component-first'>
        <div>{{msg}}</div>
        <slot>slot default</slot>
        <slot name="slot-first">slot first</slot>
        <slot name="slot-second">slot second</slot>
        <slot name="slot-third">slot third</slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: null
        }
    },
    created() {
        this.msg = 'my first global component!!'
    }
}
</script>

<style scoped>

</style>


