<template>
  <div class="mx-2 my-4 p-4 rounded shadow bg-white border-gray-300 md:w-1/5"
  style="min-width: 300px">
    <div class="w-full">
      <div class="font-bold text-medium w-full text-left mb-2">
        <h4 >{{getDate(item.date)}}</h4>
      </div>
      <div class="text-sm w-full">
        <div
        v-for="food in item.foods"
        :key="food.id"
        class="border-t-2 border-gray-100 py-1 flex flex-row justify-center"
        >
          <p class="w-1/5">{{getTime(food.created_at)}}</p>
          <p class="w-2/5">{{food.name}}</p>
          <p class="w-2/5 text-right">Rp {{formatRp(food.cost)}}</p>
        </div>
      </div>
        <div class="font-bold text-sm border-t-2 border-gray-300 pt-2 w-full text-right">
          <p><span class="mr-5">Total</span> Rp {{ formatRp(item.totalCost) }}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['item'],
  methods: {
    getDate(date) {
      const getday = Number(date.slice(8, 10));
      const getmonth = Number(date.slice(5, 7)) - 1;
      const month = ['Januari', 'Februari', 'Maret', 'April',
        'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
        'November', 'Desember'];
      return `${getday} ${month[getmonth]}`;
    },
    getTime(time) {
      const getTime = time.slice(11, 16);
      return getTime;
    },
    formatRp(cost) {
      const formatted = cost.toLocaleString('id-ID');
      return formatted;
    },
  },
};
</script>
