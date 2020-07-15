<template>
<div>
    <div class="container">
         <form action="">
            <lable>name</lable>
            <input type="text" v-model="name" placeholder="type..."/>
         </form>
    </div>
</div>
   
</template>

<script>
import { mapActions} from 'vuex';
export default {
    name: 'User',
    data() {
        return{
            name: ''
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>