 <template>
    <div class="main-header">
        <div class="left">
            <i class="el-icon-s-fold" @click="changeFlag"></i>
            <span>{{ pathArr[0] }} / {{pathArr[1]}}</span>  
        </div>
        <el-button @click="outLogin">退出</el-button>
    </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, Ref, inject, watch, reactive } from 'vue'
import { ElMessageBox } from 'element-plus';


let flag = ref<boolean>(false)
let color = ref<string>('#666')
let collapse = ref(inject('collapse'))
const listenEvent:any = inject('listenEvent')
const route = useRoute()
const router = useRouter()
const pathArr: any = reactive([])

function changeFlag() {
    flag.value = !flag.value
    flag.value ? color.value = '#489eff' : color.value = '#666'
    listenEvent(flag.value)
}
function outLogin() {
    ElMessageBox({
        title: '您确定退出登陆吗？'
    })
    .then(() =>  {
        sessionStorage.removeItem("token");
        router.replace('/login')
    })
    .catch(action => {})
}
watch(route, (newVal: any) => {
    pathArr[0] = newVal.meta.bar.split('/')[0]
    pathArr[1] = newVal.meta.bar.split('/')[1]
}, { immediate: true })

</script>

<style lang='scss' scoped>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        .el-icon-s-fold {
            cursor: pointer;
            vertical-align: middle;
            font-size: 25px;
            color: v-bind(color);
            margin-right: 15px;
        }
        span {
            margin: 0 5px;
            font-weight: 700;
            color: #97a87e;
            font-size: 18px;
        }
    }
    .el-button {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 5px;
        background: rgb(209, 32, 32);
    }
}
</style>