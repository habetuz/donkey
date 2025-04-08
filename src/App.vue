<script setup lang="ts">
import { ref } from 'vue'

const images = ref<string[]>([])

const loadImages = () => {
  const context = import.meta.glob('/public/images/*')
  for (const path in context) {
    images.value.push(path.replace('/public', ''))
  }
}

loadImages()
</script>

<template>
  <h1>Discover the Beauty of Donkeys</h1>
  <p>
    Welcome to our website, where we celebrate the charm and elegance of donkeys through stunning
    imagery.
  </p>
  <div class="image-grid">
    <div v-for="src in images" class="image-item">
      <img :src="src" alt="Image" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-top: 20px;
  color: #333;
}

p {
  text-align: center;
  font-size: 1.2rem;
  margin: 10px 0 20px;
  color: #555;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 80%;
  margin: 0 auto;
}

.image-item img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.image-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
