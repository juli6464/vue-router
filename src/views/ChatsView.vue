<template>
    <div>
        <aside>
            <div v-for="chat in chats" :key="chat.id">
                <router-link :to="`/chats/${chat.id}`">
                    {{ chat.name }}
                </router-link>
            </div>
        </aside>
        <article>
            <router-view />
        </article>
    </div>
</template>

<!-- <script>
export default {
    data() {
        return {
            chats: []
        }
    },

    created() {
        this.$watch(
            () => this.$route.params,
            (val) => {
                console.log('update params', val)
                this.chats = [                    
                    { id: 1, name: 'ximena'},
                    { id: 2, name: 'pepeson'},
                    { id: 3, name: 'juan'}
                ]
            },
            { immediate: true }

        )
    },
}
</script> -->

<!--composition api-->
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';
const chats = ref()

const route = useRoute()

watch(
    () => route.params,
    (val) => {
    console.log('update params', val)
    chats.value = [                    
        { id: 1, name: 'ximena'},
        { id: 2, name: 'pepeson'},
        { id: 3, name: 'juan'}
    ]
}, {
    immediate: true
})
</script>