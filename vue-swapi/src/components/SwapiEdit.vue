<template>
  <div v-if="currentSwapi" class="edit-form">
    <h4>Star Wars Object</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentSwapi.title"
        />
      </div>
      <div class="form-group">
        <label for="episode_id">Episode ID</label>
        <input type="text" class="form-control" id="episode_id"
          v-model="currentSwapi.episode_id"
        />
      </div>
      <div class="form-group">
        <label for="opening_crawl">Opening Crawl</label>
        <input type="text" class="form-control" id="opening_crawl"
          v-model="currentSwapi.opening_crawl"
        />
      </div>
      <div class="form-group">
        <label for="director">Director</label>
        <input type="text" class="form-control" id="director"
          v-model="currentSwapi.director"
        />
      </div>
      <div class="form-group">
        <label for="producer">Producer</label>
        <input type="text" class="form-control" id="producer"
          v-model="currentSwapi.producer"
        />
      </div>
      <div class="form-group">
        <label for="release_date">Release Date</label>
        <input type="text" class="form-control" id="release_date"
          v-model="currentSwapi.release_date"
        />
      </div>
      <div class="form-group">
        <label for="image_url">Image URL</label>
        <input type="text" class="form-control" id="image_url"
          v-model="currentSwapi.image_url"
        />
      </div>

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
    </form>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Star Wars Object...</p>
  </div>
</template>

<script>
import SwapiDataService from "../services/SwapiDataService";

export default {
  name: "swapiEdit",
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

    /*updatePublished(status) {
      var data = {
        id: this.currentSwapi.id,
        title: this.swapi.title,
        episode_id: this.swapi.episode_id,
        opening_crawl: this.swapi.opening_crawl,
        director: this.swapi.director,
        producer: this.swapi.producer,
        release_date: this.swapi.release_date,
        image_url: this.swapi.image_url
      };

      SwapiDataService.update(this.currentSwapi.id, data)
        .then(response => {
          this.currentSwapi.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },*/

    updateSwapi() {
      SwapiDataService.update(this.currentSwapi.id, this.currentSwapi)
        .then(response => {
          console.log(response.data);
          this.message = 'The Star Wars Object was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteSwapi() {
      SwapiDataService.delete(this.currentSwapi.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "swapis" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getSwapi(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>