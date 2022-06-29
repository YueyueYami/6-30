<template>
    <div>
        <div class="bar" :style="{'background-color':color}">
            <van-icon class="back" name="revoke" @click="$router.go(-1)" />
            <h3>我的书架</h3>
        </div>
        <div class="list">
            <h2>正在看</h2>
            <h2> > </h2>
        </div>
        <ul>
            <li v-for="(item ,i) in store.state.booklist" :key="i" v-show="item.flag==false">
                <p class="title">{{item.name}}</p>
                <p class="conc">
                    <span @click="swh1(i)">标记为已看完</span> | <span class="del" @click="del(i)">删除图书</span>
                </p>
            </li>
        </ul>
        <div class="list">
            <h2>已看完</h2>
            <h2> > </h2>
        </div>
        <ul>
            <li v-for="(item ,i) in store.state.booklist" :key="i" v-show="item.flag==true">
                <p class="title">{{item.name}}</p>
                <p class="conc">
                    <span @click="swh2(i)">再看一遍</span> | <span class="del" @click="del(i)">删除图书</span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
    import { ref, toRefs, reactive, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import { Toast } from 'vant'
    export default {
        setup() {
            const store = useStore()
            const router = useRouter()
            const color = store.state.color
            const swh1 = (i) => {
                store.commit('swh', i)
            }
            const swh2 = (i) => {
                store.commit('swh', i)
            }
            const del = (i) => {
                store.commit('del', i)
                Toast.success('删除成功')
            }
            return {
                color,
                store,
                swh1,
                swh2,
                del
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
        margin-bottom: 20px;

        .back {
            width: 40%;
            font-size: 30px;
            color: blue;
            padding-left: 10px;
        }

        h3 {
            width: 60%;
        }
    }

    .list {
        height: 50px;
        background-color: red;
        color: white;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        padding: 0 10px;
    }

    ul {
        padding: 10px;

        li {
            display: flex;
            justify-content: space-between;
            padding: 5px 5px;

            .title {
                font-weight: 700
            }

            .conc {
                color: red;

                .del {
                    color: #888;
                }
            }
        }
    }
</style>