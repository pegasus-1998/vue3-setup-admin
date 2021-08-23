 <template>
    <router-view v-slot="{ Component }">
        <transition name="fade2" mode="out-in" appear>
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script lang='ts' setup>
import { ref, reactive, Ref } from 'vue'
let num = ref<number>(20)
function add(val: number) {
    num.value += val
}
</script>