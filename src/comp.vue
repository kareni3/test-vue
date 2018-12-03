<template>
<div>


<!--
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
  <v-progress-linear class="qwer" color="red" indeterminate></v-progress-linear>-->

  <v-progress-linear
    class="qwer" color="red" 
    v-model="buffer"
    :buffer-value="bufferValue"
    buffer
  ></v-progress-linear>

    <div class="container">
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
    </div>

</div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
export default {
  name: 'app',
  data() {
    return {
      items: ['asd', 'dsa', 'ert'],
      list: null,
        value: 0,
        buffer: 0,
        bufferValue: 100,
        interval: 0,
      settings: {
        maxScrollbarLength: 60,
      },
    }
  },
  components: { 
    PerfectScrollbar,
  },
  methods: {
      isNull(data) {
        return data === null
      },
      
      startBuffer () {
        this.interval = setInterval(() => {
          this.buffer += Math.random() * (0.5 - 0.2) + 0.2
          this.bufferValue += Math.random() * (0.5 - 0.2) + 0.2
        }, 1000/25)
      },
    scrollHanle(evt) {
      console.log(evt)
    }
  },
  mounted () {
    var ps = new PerfectScrollbar('.container');
      this.startBuffer()
    },
    

    beforeDestroy () {
      clearInterval(this.interval)
    },
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
.qwerty {
    height: 40px;
    margin: auto;
    text-align: center;
}
.qwer {
    position: fixed;
    top:-18px;
    left:0;
    width: 100vw!important;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
.kolom {
    height: 40px;
    margin: auto;
    text-align: center; 
    margin: 10px;
    background: red;
}
#container {
    position: relative;
    width: 600px;
    height: 400px;
  }

  .container {
  position: relative;
  width: 480px;
  height: 320px;
  overflow: auto;
  background: #fafafa;
}

.container .content {
  background-image: url('https://i.imgur.com/nAUUNzH.jpg');
  width: 1280px;
  height: 720px;
}


/*
 * Container style
 */
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/*
 * Scrollbar rail styles
 */
.ps__rail-x {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  height: 15px;
  /* there must be 'bottom' or 'top' for ps__rail-x */
  bottom: 0px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  width: 15px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  opacity: 0.6;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #eee;
  opacity: 0.9;
}

/*
 * Scrollbar thumb styles
 */
.ps__thumb-x {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, height .2s ease-in-out;
  -webkit-transition: background-color .2s linear, height .2s ease-in-out;
  height: 6px;
  /* there must be 'bottom' for ps__thumb-x */
  bottom: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__thumb-y {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, width .2s ease-in-out;
  -webkit-transition: background-color .2s linear, width .2s ease-in-out;
  width: 6px;
  /* there must be 'right' for ps__thumb-y */
  right: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-x:hover > .ps__thumb-x,
.ps__rail-x:focus > .ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
  background-color: #999;
  height: 11px;
}

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #999;
  width: 11px;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
</style>
