<template>
    <li class="v-view-task">
        <div class="container">
            <header class="v-view-task__header">
                <div class="v-view-task__header-block">
                    <button v-on:click="$router.push('/')" class="v-view-task__header-block-btn v-view-task__header-block-btn-back">
                        <img v-bind:src="`${require('../assets/images/back.svg')}`" alt="back">
                    </button>
                    <button v-on:click="transition && addTask()" class="v-view-task__header-block-btn v-view-task__header-block-btn-ok">
                        <img v-bind:src="`${require('../assets/images/tick.svg')}`" alt="tick">
                    </button>
                </div>
            </header>
            <main class="v-view-task__main">
                <header class="v-view-task__main-header">
                    <div class="v-view-task__main-header-block">
                        <span class="v-view-task__main-header-block-date">{{ `${new Date().getDate()} ${$store.state.mounths[new Date().getMonth()]} ${new Date().getHours()}:${new Date().getMinutes()} | ${taskName.length} символов` }}</span>
                    </div>
                </header>
                <textarea v-model="taskName" class="v-view-task__main-name"></textarea>
            </main>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            taskName: '',
            transition: false,
            task: {}
        }
    },
    methods: {
        addTask() {
            this.$store.state.tasks.map(item => {
                if (item.id === this.task.id)  {
                    item = this.task;
                    this.task.value = this.taskName;
                    
                    localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
                }
            });

            this.$router.push('/');
        }
    },
    watch: {
        taskName(value) {
            if (value) {
                this.transition = true;
            }
        }
    },
    mounted() {
        this.task = this.$store.state.tasks.find(item => item.id === parseInt(this.$route.params.id));
        this.taskName = this.task.value;
    }
}
</script>