<template>
    <header class="v-header">
        <div class="container">
            <div class="v-header__block">
                <button class="v-header__block-btn">
                    <img :src="`${require('../assets/images/search.svg')}`" alt="search">
                </button>
                <input class="v-header__block-search" v-on:input="findTasks()" type="text" placeholder="Поиск заметок" v-model="search">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        findTasks() {}
    }
}
</script>