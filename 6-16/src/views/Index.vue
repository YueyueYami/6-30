<template>
    <div>
        <div class="bar" :style="{'background-color':color}">
            <h3>图书商城</h3>
            <p @click="mybook">我的书架</p>
        </div>
        <p class="ipt">
            <input type="text" placeholder="输入书名搜索">
        </p>
        <BookInfo></BookInfo>
    </div>
</template>
<script>
    import BookInfo from '@/components/BookInfo.vue'
    import { ref, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    export default {
        components: {
            BookInfo
        },
        setup() {
            const store = useStore()
            const router = useRouter()
            const color = store.state.color
            const mybook = () => {
                router.push('/mybook')
            }
            return {
                color,
                mybook
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bar {
        height: 60px;
        width: 100%;
        background-color: red;
        color: white;
        display: flex;

        align-items: center;

        h3 {
            width: 60%;
            display: flex;
            justify-content: flex-end;
        }

        p {
            width: 40%;
            padding-right: 10px;
            display: flex;
            justify-content: flex-end;
            color: blue
        }
    }

    .ipt {
        width: 100%;
        height: 50px;
        padding: 0 20px;
        background-color: #cbcbca;

        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
        }
    }
</style>