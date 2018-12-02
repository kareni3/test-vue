<template>
  <div class="hello">
      <div class="ttt">
<div class="qwe">
  <div class="text-xs-center ewq"><v-menu nudge-bottom="40px" class="ddd" attach>
      <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Dropdown1
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="qqq()"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu><v-menu nudge-bottom="40px" class="ddd" attach>
      <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Dropdown2
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="qqq()"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu nudge-bottom="40px" class="ddd" attach>
      <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Dropdown
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="qqq()"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn
        slot="activator"
        color="primary"
        dark
        class="ddd" 
      >
        ddd1
      </v-btn>
      <v-btn
        slot="activator"
        color="primary"
        dark
        class="ddd" 
      >
        ddd2
      </v-btn>
  </div>
      </div>
    
    </div>
    <comp></comp>
  </div>
</template>

<script>
import comp from './comp.vue'

export default {
  data() {
    return {
      items: ['asd', 'dsa', 'ert'],
      list: [],
    }
  },
  components: {
    comp
  },
  methods: {
    qqq() {
      alert(1);
    }
  },
  mounted() {
    satTimeout(()=>{
      this.list = ['asd','asd','asd','asd','asd','asd','asd','asd','asd',]
    }, 4000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ewq {
    width: 100px;
    margin: auto;
    display: inline;
}
.qwe {
    height: 200px;
}
.ttt {
    height: 100px;
    max-height: 100px;
    overflow-y: scroll;
}
</style>
