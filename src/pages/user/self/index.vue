 <template>
  <div class="self">
    <img class="ava" :src="users[idx].ava" alt />
    <span class="sp">{{ users[idx].account }}</span>
    <p>个性签名：{{ users[idx].con }}</p>
    <img class="welcome" src="@/images/welcome.gif" alt />
  </div>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'

const store = useStore()
const users = store.state.users
const token = sessionStorage.getItem('token')
let idx = 0

for (let i = 0; i < users.length; i++) {
  if (token === users[i].account) {
    idx = i
    break
  }
}
</script>

 <style lang="scss" scoped>
.self {
  padding: 35px;
  font-size: 21px;
  font-weight: 700;
  .ava {
    margin-right: 15px;
  }
  .sp {
    color: green;
  }
  p {
    margin: 25px 0;
    width: 150px;
    text-indent: 2em;
    color: orangered;
  }
  .welcome {
    display: block;
    margin-left: 150px;
    width: 210px;
    border-radius: 50%;
  }
}
</style>