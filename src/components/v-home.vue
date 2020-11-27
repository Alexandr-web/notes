<template>
    <div class="v-home">
        <vHeader />
        <div class="container">
            <vTasks />
        </div>
        <vAddBtn />
    </div>
</template>

<script>
import vHeader from './v-header';
import vAddBtn from './v-add-btn';
import vTasks from './v-tasks';

export default {
    name: "Home",
    components: {
        vHeader,
        vAddBtn,
        vTasks
    },
    mounted() {
        if (localStorage.getItem('tasks')) {
            this.$store.state.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }
}
</script>