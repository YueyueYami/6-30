<template>
    <div class="b-box">
        <div class="box" v-for="(item,index) in list.value" :key="index">
            <img class="image" :src="item.img">
            <p class="text">&emsp;&emsp;{{item.desc}}</p>
            <div class="title">
                <p class="t-title">{{item.name}}</p>
                <button class="t-btn" @click="add(item)">+</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref, reactive, onMounted } from 'vue'
    import axios from 'axios'
    import { useStore } from 'vuex'
    import { Toast } from 'vant'
    export default {
        props: [],
        setup(props) {
            const store = useStore()
            const list = reactive([])
            onMounted(() => {
                axios.get('/data.json').then(res => {
                    list.value = res.data
                    console.log(list.value);
                })
            })
            const add = (item) => {
                let obj = item
                obj.flag = false
                let aflag = false
                store.state.booklist.forEach(book => {
                    if (book.id === obj.id) {
                        aflag = true
                        Toast.fail('书架已有此书')
                    }
                })
                if (aflag == false) {
                    store.commit('add', obj)
                    Toast.success('添加成功')
                }
            }
            return {
                list,
                add
            }
        }
    }
</script>
<style lang="scss" scoped>
    .b-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 48%;
            margin: 0 auto;
            border: 1px solid #ccc;
            border-top: none;
            box-sizing: border-box;
            padding: 10px;
            background-color: #fff;

            .image {
                width: 100%;
                height: 200px;
            }

            .text {
                width: 100%;
                text-align: center;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                color: #ccc;
            }

            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 40px;
                background-color: #fff;
                border-bottom: 1px solid #ccc;

                .t-title {
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: red
                }

                .t-btn {
                    background-color: red;
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
</style>