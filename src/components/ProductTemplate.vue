<template>
    <a v-for="saveur in Saveurs" v-bind:key="saveur.id" 
        href="#"
        class="flex items-center justify-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          src="{{ saveur.link }}"
          alt=""
          style="width: 65px; height: 100px"
          class="object-cover"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ saveur.name }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{saveur.description}}</p>
        </div>
      </a>
<slot></slot>
</template>
<script>

export default {
 name:'ProductTemplate',

  setup() {
    let Saveurs = [
      { id: 1, name: "Vanille", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 2, name: "Chocolat", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 3, name: "Choco-Noisettes",link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla"},
      { id: 4, name: "Citron", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 5, name: "Pistache", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 6, name: "Fraise", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 7, name: "Framboise", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 8, name: "Melon", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 9, name: "Vanille Noire", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 10, name: "Coco", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 11, name: "Oreo", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
      { id: 12, name: "Nutella", link: "@/assets/img/saveurs/cream-blue.jpg", description: "blablablabla" },
    ];
    return { Saveurs };
  },
};
  </script>