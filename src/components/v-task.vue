<template>
    <li class="v-task">
        <router-link v-bind:to="`/view-task/${task.id}`">
            <header class="v-task__header">
                <h4 class="v-task__header-heading">{{ task.date.match(/[А-Я]{1}[а-я]{1,}/)[0] }}</h4>
            </header>
            <p class="v-task__value">
                {{ task.value }}
            </p>
        </router-link>
        <button class="v-task__remove">
            <img v-on:click="$emit('removeTask', task)" v-bind:src="`${require('../assets/images/remove.svg')}`" alt="remove">
        </button>
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object
        }
    }
}
</script>