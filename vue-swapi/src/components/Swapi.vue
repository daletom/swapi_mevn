<template>
  <div v-if="currentSwapi" class="view">
    <h4>Star Wars Object</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentSwapi.title }}
        </div>
        <div>
          <label><strong>Episode ID:</strong></label> {{ currentSwapi.episode_id }}
        </div>
        <div>
          <label><strong>Directed By:</strong></label> {{ currentSwapi.director }}
        </div>
        <div>
          <label><strong>Produced By:</strong></label> {{ currentSwapi.producer }}
        </div>
        <div>
          <label><strong>Release Date:</strong></label> {{ currentSwapi.release_date }}
        </div>
        <div>
          <label><strong>Opening Crawl:</strong></label> {{ currentSwapi.opening_crawl }}
        </div>
        <img :src="currentSwapi.image_url + '?w=400&auto=format,compress'" sizes="300px" width="300px" height="auto" />
  </div>

  <div v-else>
    <br />
    <p>Please click on a Star Wars Object...</p>
  </div>
</template>

<script>
import SwapiDataService from "../services/SwapiDataService";

export default {
  name: "swapi",
  data() {
    return {
      currentSwapi: null,
      message: ''
    };
  },
  methods: {
    getSwapi(id) {
      SwapiDataService.get(id)
        .then(response => {
          this.currentSwapi = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getSwapi(this.$route.params.id);
  }
};
</script>

<style>
.view {
  max-width: 700px;
  margin: auto;
}
</style>