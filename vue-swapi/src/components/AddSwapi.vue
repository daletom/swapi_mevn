<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="swapi.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="episode_id">Episode ID</label>
        <input
          class="form-control"
          id="episode_id"
          required
          v-model="swapi.episode_id"
          name="episode_id"
        />
      </div>

      <div class="form-group">
        <label for="opening_crawl">Opening Crawl</label>
        <input
          class="form-control"
          id="opening_crawl"
          required
          v-model="swapi.opening_crawl"
          name="opening_crawl"
        />
      </div>

      <div class="form-group">
        <label for="director">Director</label>
        <input
          class="form-control"
          id="director"
          required
          v-model="swapi.director"
          name="director"
        />
      </div>

      <div class="form-group">
        <label for="producer">Producer</label>
        <input
          class="form-control"
          id="producer"
          required
          v-model="swapi.producer"
          name="producer"
        />
      </div>

      <div class="form-group">
        <label for="release_date">Release Date</label>
        <input
          class="form-control"
          id="release_date"
          required
          v-model="swapi.release_date"
          name="release_date"
        />
      </div>

      <div class="form-group">
        <label for="image_url">Image URL</label>
        <input
          class="form-control"
          id="image_url"
          required
          v-model="swapi.image_url"
          name="image_url"
        />
      </div>

      <button @click="saveSwapi" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newSwapi">Add</button>
    </div>
  </div>
</template>

<script>
import SwapiDataService from "../services/SwapiDataService";

export default {
  name: "add-swapi",
  data() {
    return {
      swapi: {
        id: null,
        title: "",
        episode_id: "",
        opening_crawl: "",
        director: "",
        producer: "",
        release_date: "",
        image_url: ""
      },
      submitted: false
    };
  },
  methods: {
    saveSwapi() {
      var data = {
        title: this.swapi.title,
        episode_id: this.swapi.episode_id,
        opening_crawl: this.swapi.opening_crawl,
        director: this.swapi.director,
        producer: this.swapi.producer,
        release_date: this.swapi.release_date,
        image_url: this.swapi.image_url
      };

      SwapiDataService.create(data)
        .then(response => {
          this.swapi.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newSwapi() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>