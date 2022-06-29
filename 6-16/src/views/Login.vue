<template>
    <div>
        <div class="bar" :style="{'background-color':store.state.color}">
            <h3>用户登录</h3>
            <p @click="changecolor">切换主题</p>
        </div>
        <div class="login">
            <div class="loginchild">
                <p>账号</p>
                <van-field @change="uName" v-model="username" placeholder="请输入用户名" />
                <van-icon class="icon" name="passed" v-if="nameflag==true" v-show="nameshow" />
                <van-icon class="icon" name="close" else v-if="nameflag==false" v-show="nameshow" />
            </div>
            <div class="loginchild">
                <p>密码</p>
                <van-field @change="pwd" v-model="password" placeholder="请输入密码" />
                <van-icon class="icon" name="passed" v-if="pwdflag==true" v-show="pwdshow" />
                <van-icon class="icon" name="close" else v-if="pwdflag==false" v-show="pwdshow" />
            </div>
            <van-button @click="login" class="btn" round type="primary" :disabled="disabled">登录</van-button>
        </div>
    </div>
</template>
<script>
    import { ref, reactive, toRefs } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    export default {
        setup() {
            const store = useStore()
            const router = useRouter()
            const username = ref('')
            const password = ref('')
            const nameflag = ref('')
            const pwdflag = ref('')
            const nameshow = ref(false)
            const pwdshow = ref('')
            const disabled = ref(true)
            const color = ref('')
            const changecolor = () => {
                color.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
                store.commit('changecolor', color.value)
            }
            const uName = () => {
                if (username.value.length >= 0) {
                    nameshow.value = true
                } else {
                    nameshow.value = false
                }
                nameflag.value = /^1\d{10}$/.test(username.value)
                if (nameflag.value == true && pwdflag.value == true) {
                    disabled.value = false
                } else {
                    disabled.value = true
                }
            }
            const pwd = () => {
                if (username.value.length > 0) {
                    pwdshow.value = true
                } else {
                    pwdshow.value = false
                }
                pwdflag.value = /^[a-zA-Z]\w{5,17}$/.test(password.value)
                if (nameflag.value == true && pwdflag.value == true) {
                    disabled.value = false
                } else {
                    disabled.value = true
                }
            }
            const login = () => {
                router.push('/index')
            }
            return {
                store,
                username,
                password,
                nameflag,
                pwdflag,
                uName,
                pwd,
                nameshow,
                pwdshow,
                disabled,
                login,
                color,
                changecolor
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

    .login {
        height: 200px;
        margin: auto 20px;
        margin-top: 8rem;
        border: 1px solid #ccc;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .loginchild {
            padding: 0 20px;
            width: 100%;
            display: flex;
            align-items: center;

            p {
                width: 20%;
            }

            .icon {
                font-size: 30px
            }
        }

        .btn {
            width: 70%;
        }
    }
</style>