<template>
<div>
    <div v-if="list===null" class="qwerty"> 
        <v-progress-circular
            :size="50"
            :width="5"
            color="black"
            indeterminate
        ></v-progress-circular>
    </div>
    <div v-else-if="list.length > 0">
        <div class="qwerty" v-for="(item, index) in list" :key="index">
            {{item}}
            {{list.length}}
        </div>
    </div>
    <div v-else>
        list is empty
    </div>

    
        
</div>
</template>

<script>
export default {
  data() {
    return {
      items: ['asd', 'dsa', 'ert'],
      list: null,
    }
  },
  methods: {
      isNull(data) {
        return data === null
      }
  },
  mounted() {
    setTimeout(()=>{
      this.list = ['asd', 'dsa', 'ert']
    }, 2000);
  }
}
</script>

<style>
.qwerty {
    height: 40px;
    margin: auto;
    text-align: center;
}
</style>
