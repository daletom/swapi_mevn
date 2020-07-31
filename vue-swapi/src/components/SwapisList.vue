<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Star Wars Object List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(swapi, index) in swapis"
          :key="index"
          @click="setActiveSwapi(swapi, index)"
        >
          {{ swapi.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentSwapi">
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

        <a class="badge badge-warning"
          :href="'/swapis/' + currentSwapi.id"
        >
          Edit
        </a>
        <img :src="currentSwapi.image_url + '?w=400&auto=format,compress'" sizes="300px" width="300px" height="auto" />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Star Wars Object...</p>
      </div>
    </div>
  </div>
</template>

<script>
import SwapiDataService from "../services/SwapiDataService";

export default {
  name: "swapis-list",
  data() {
    return {
      swapis: [],
      currentSwapi: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveSwapis() {
      SwapiDataService.getAll()
        .then(response => {
          this.swapis = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveSwapis();
      this.currentSwapi = null;
      this.currentIndex = -1;
    },

    setActiveSwapi(swapi, index) {
      this.currentSwapi = swapi;
      this.currentIndex = index;
    },
    
    searchTitle() {
      SwapiDataService.findByTitle(this.title)
        .then(response => {
          this.swapis = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveSwapis();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>