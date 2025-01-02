<template>
  <div class="locations-grid text-xs">
    <div v-for="location in locations" :key="location.venue_name" class="location-card">
      <div class="font-bold">{{ location.location }}</div>
      <div class="venue-name">{{ location.venue_name }}</div>
      <div class="address">
        <a 
          :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {{ location.address }}
        </a>
      </div>
      <div v-if="location.notes" class="notes text-sm text-red-600 font-bold">
        {{ location.notes }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Papa from 'papaparse'

const locations = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://docs.google.com/spreadsheets/d/1Z5eBzq7pl9KnJeiuHYfU9SsYIdSRBHMkrFE8aUHoOeI/gviz/tq?tqx=out:csv')
    const csvText = await response.text()
    
    const results = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: header => header.toLowerCase()
    })
    
    locations.value = results.data
  } catch (error) {
    console.error('Error fetching locations:', error)
  }
})
</script>
<style scoped>
.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.location-card {
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  
}

.venue-name, .address {
  margin-top: 0.5rem;
}
</style>
