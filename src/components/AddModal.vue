<template>
  <div>
    <div class="relative w-80 my-3 mx-auto max-w-sm">
      <!--content-->
      <div class="border-0 shadow-lg relative flex flex-col w-full
      bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-3">
          <h3 class="text-lg font-semibold">
            Tambah Entri
          </h3>
        </div>
        <!--body-->
        <div class="relative px-5 flex-auto">
          <form>
            <div class="my-2">
              <label>Nama</label><br>
              <input class="w-full border mt-2 p-1 rounded border-gray-200"
              type="text" v-model="food.name">
            </div>
            <div class="my-2">
              <label>Harga</label><br>
              <input class="w-full border mt-2 p-1 rounded border-gray-200"
              type="number" step="100" v-model="food.cost">
            </div>
          </form>
        </div>
        <!--footer-->
        <div class="flex items-center justify-end p-4">
          <button class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-3 text-sm mr-2"
          @click.prevent="toggleModal">BATAL</button>
          <button class="bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-3 text-sm"
          @click.prevent="addFood">KIRIM</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddModal',
  data() {
    return {
      food: {
        name: '',
        cost: null,
      },
    };
  },
  methods: {
    toggleModal() {
      this.$emit('toggleModal');
    },
    addFood() {
      this.toggleModal();
      this.$store.dispatch('addFood', this.food);
      this.food.name = '';
      this.food.cost = null;
    },
  },
};
</script>
