<template>
  <div class="home">
    {{ $t('home-welcome') }}
    <as-message title="提示2"></as-message>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
  },
  methods: {
  },
});
</script>

<style lang="scss">
  .home {
    padding: 12px;
    display: flex;
    flex-direction: row;
    .algorithm-draw-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .human-flow {
      width: 500px;
      height: 500px;
      border: 1px solid black;
    }
  }
</style>
