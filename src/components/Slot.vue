<template>
    <div id="slot">
        <h1>插槽</h1>
        <div class="head">
            <!--具名插槽-->
            <slot name="head"></slot>
        </div>
        <!--匿名插槽-->
        <slot></slot>
        <div class="foot">
            <!--具名插槽-->
            <slot name="foot"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slot",
    }
</script>

<style scoped>

</style>