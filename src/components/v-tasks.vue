<template>
    <ul class="v-tasks">
        <h1 class="v-tasks__nothing" v-if="!getTasks.length">Заметок нет.</h1>
        <vTask v-else v-for="(task, i) in getTasks" :key="i" v-bind:task="task" v-on:removeTask="removeTask" />
    </ul>
</template>

<script>
import vTask from './v-task';

export default {
    components: {
        vTask
    },
    computed: {
        getTasks() {
            return this.$store.getters.getTasks;
        }
    },
    methods: {
        removeTask(task) {  
            this.$store.state.tasks = this.$store.state.tasks.filter(item => item.id !== task.id);
            localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
        }
    }
}
</script>