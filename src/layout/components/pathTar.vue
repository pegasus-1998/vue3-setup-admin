<template>
    <div class="tags">
        <el-tag
            v-for="(item, index) in tagArrs"
            :key="Number(index)"
            :closable = 'tagArrs[index] == tempPath ? false : true'
            :disable-transitions="false"
            :class="{nowPath: tagArrs[index] == tempPath}"
            @click="changeRoute(Number(index))"
            @close="handleClose(Number(index))"
        >{{ item }}</el-tag>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { replaceChar } from '@/utils/reg'

const route = useRoute()
const router = useRouter()
const tagArrs: any = reactive([])
let tempPath = ref('')  

watch(route, (newVal) => {
     tempPath.value = replaceChar(newVal.path)
    if(tagArrs.some((item: any) => tempPath.value == item)) {
        return
    }else {
        tagArrs.push(tempPath.value)
    }
}, { immediate: true })
function changeRoute(index :number) {
    const temp = ( '/' + tagArrs[index]).replace(/-/,'/')
     router.replace(temp)
}
function handleClose(index :number) {
    tagArrs.splice(index, 1)
}
</script>

<style lang='scss' scoped>
.tags {
    padding: 8px;
    background: #fff;
    margin: 10px 0;
    border-radius: 8px;
    .nowPath {
        color: #fff;
        background: #42b983;
    }
    .el-tag {
        cursor: pointer;
        height: 27px;
        line-height: 27px;
        margin-right: 5px;
    }
}
</style>