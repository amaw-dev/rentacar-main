<template>
  <picture>
    <!-- persona avif -->
    <source
      type="image/avif"
      media="(min-width: 768px)"
      srcset="
        https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fpersona.avif?alt=media&token=39468446-a9bb-4793-8c08-f334e797d36d
      "
      alt="video"
      width="2000"
      height="1620"
      loading="lazy"
    />
    <!-- persona avif movil -->
    <source
      type="image/avif"
      media="(max-width: 767px)"
      srcset="
        https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fpersona-movil.avif?alt=media&token=0085aaff-80de-4260-9a36-12412ae77b4c
      "
      alt="video"
      width="333"
      height="270"
      loading="lazy"
    />
    <!-- persona webp -->
    <source
      type="image/webp"
      media="(min-width: 768px)"
      srcset="
        https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fpersona.webp?alt=media&token=8d98ef71-c9b8-4357-8093-ba9cf0aaa2e8
      "
      alt="carros"
      width="2000"
      height="1620"
      loading="lazy"
    />
    <!-- persona webp movil -->
    <source
      type="image/webp"
      media="(max-width: 767px)"
      srcset="
        https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fpersona-movil.avif?alt=media&token=0085aaff-80de-4260-9a36-12412ae77b4c
      "
      alt="carros"
      width="333"
      height="270"
      loading="lazy"
    />
    <!-- video png -->
    <source
      type="image/png"
      media="(min-width: 768px)"
      srcset="
        https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fvideo.png?alt=media&token=a0fa2d81-0563-4109-954e-2707ad56ae22
      "
      alt="video"
      width="2000"
      height="1620"
      loading="lazy"
    />
    <!-- video movil png -->
    <source
      type="image/png"
      media="(max-width: 767px)"
      srcset="
        https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fvideo-movil.png?alt=media&token=4af04e5d-6ae3-43c2-8d24-07acf5397562
      "
      alt="video"
      width="333"
      height="270"
      loading="lazy"
    />
    <!-- video defecto -->
    <img
      v-youtube-lazy="videoID"
      src="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fvideo.png?alt=media&token=a0fa2d81-0563-4109-954e-2707ad56ae22"
      alt="video"
      width="2000"
      height="1620"
      loading="eager"
      class="mx-auto"
    />
  </picture>
</template>
<script lang="ts" setup>
const videoID = "_MVNhinVYHE";
</script>