<template>
   <main class="flex justify-center flex-col items-center p-5">
     <h1 class="text-3xl">Diari Jajan Februari 2021</h1>
     <h1 class="">Pengeluaran Bulan Ini Rp {{totalCost.toLocaleString('id-ID')}}</h1>
     <button class="bg-indigo-800 text-white py-1 px-2 m-2 hover:bg-indigo-700 text-sm"
     @click.prevent="toggleModal"
     >TAMBAH ITEM</button>
     <div class="py-5 flex flex-row flex-wrap justify-center w-full">
       <Card
       v-for="(item, index) in items"
       :key="index"
       :item="item"
       />
     </div>
      <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0
        z-50 outline-none focus:outline-none justify-center items-center flex">
        <AddModal
        @showModal="showModal"
        @toggleModal="toggleModal"/>
      </div>
      <div v-if="showModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>
   </main>
</template>

<script>
import Card from '@/components/Card.vue';
import AddModal from '@/components/AddModal.vue';

export default {
  name: 'Home',
  components: {
    Card,
    AddModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    this.$store.dispatch('fetchItems');
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    totalCost() {
      return this.$store.state.totalCost;
    },
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
