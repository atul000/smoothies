<template>
  <div class="add-smoothie container">
    <h2 class="center-align add-smoothies indigo-text">
      Add New Smoothie Recipe
    </h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">
          Add an ingredient:
        </label>
        <input type="text" name="add ingredient" />
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null
    };
  },
  methods: {
    AddSmoothie() {
      // eslint-disable-next-line no-console
      console.log(this.title);
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-smoothies {
  font-style: italic;
  font-family: Montserrat;
}

.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-smoothie .field {
  margin: 20px auto;
}
</style>
