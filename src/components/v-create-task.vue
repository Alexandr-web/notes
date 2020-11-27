<template>
    <li class="v-create-task">
        <div class="container">
            <header class="v-create-task__header">
                <div class="v-create-task__header-block">
                    <button v-on:click="$router.push('/')" class="v-create-task__header-block-btn v-create-task__header-block-btn-back">
                        <img v-bind:src="`${require('../assets/images/back.svg')}`" alt="back">
                    </button>
                    <button v-on:click="transition && addTask()" class="v-create-task__header-block-btn v-create-task__header-block-btn-ok">
                        <img v-bind:src="`${require('../assets/images/tick.svg')}`" alt="tick">
                    </button>
                </div>
            </header>
            <main class="v-create-task__main">
                <header class="v-create-task__main-header">
                    <div class="v-create-task__main-header-block">
                        <span class="v-create-task__main-header-block-date">{{ `${new Date().getDate()} ${$store.state.mounths[new Date().getMonth()]} ${new Date().getHours()}:${new Date().getMinutes()} | ${taskName.length} символов` }}</span>
                    </div>
                </header>
                <textarea v-model="taskName" class="v-create-task__main-name"></textarea>
            </main>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            taskName: '',
            transition: false
        }
    },
    methods: {
        addTask() {
            const date = new Date();

            const task = {
                value: this.taskName,
                date: `${date.getDate()} ${this.$store.state.mounths[new Date().getMonth()]} ${date.getHours()}:${date.getMinutes()} | ${this.taskName.length} символов`,
                id: Date.now(),
                hide: false
            };

            this.$store.dispatch('addTask', task);
            this.$router.push('/');
        }
    },
    watch: {
        taskName(value) {
            if (value) {
                this.transition = true;
            }
        }
    }
}
</script>