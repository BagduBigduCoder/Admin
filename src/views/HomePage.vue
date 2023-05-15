<template>
  <div
    class="grid grid-cols-3 gap-4 justify-center items-center px-6 py-12 lg:px-8"
  >
    <template v-for="(data, index) in cardData" :key="index">
      <Card
        :cardData="data"
        @changed="
          (value) => {
            catchEvent(data, value);
          }
        "
      />
    </template>
  </div>
  <div class="flex justify-center items-center">
    <div class="flex-1"></div>
    <div class="flex flex-1 justify-center">
      <button
        @click="submitChangeLog"
        class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit Change Log
      </button>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
import Card from "../components/Cardlist.vue";
import {
  collection,
  getDocs,
  writeBatch,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "../utils/fireabse";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cardData: [],
      changeLog: new Map(),
    };
  },
  methods: {
    async getReviews() {
      const q = query(collection(db, "review"), orderBy("timeStamp", "desc"));
      const result = await getDocs(q);
      this.cardData = result.docs.map((doc) => {
        const obj = { ...doc.data(), id: doc.id };
        return obj;
      });
    },
    catchEvent(doc, value) {
      this.changeLog.set(doc.id, value);
    },
    async submitChangeLog() {
      const batchQuerry = writeBatch(db);
      for (let [key, val] of this.changeLog) {
        const docRefs = doc(db, "review", key);
        batchQuerry.update(docRefs, { show: val });
        console.log(key, val);
      }
      try {
        await batchQuerry.commit();
        console.log("Doc update");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  mounted() {
    this.getReviews();
  },
};
</script>
