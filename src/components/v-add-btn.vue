<template>
    <div class="v-add-btn" v-on:click="addTask"></div>
</template>

<script>
export default {
    methods: {
        addTask() {
            this.$router.push('/task');
        }
    }
}
</script>