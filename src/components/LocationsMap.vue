<template>
  <div>
    <GMapMap
      v-show="isShowMap"
      :center="{ lat: latData, lng: lngData }"
      :zoom="14"
      :style="{width: width, height: height}"
      :options="{
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true
        }"
    >
      <GMapMarker :position="{ lat: latData, lng: lngData }" />
    </GMapMap>
  </div>
</template>

<script>
export default {
  props: {
    latData: {
      type: Number,
      default() {
        return 22.66;
      },
    },
    lngData: {
      type: Number,
      default() {
        return 120.30;
      },
    },
    isShowMap: {
      type: Boolean,
      default() {
        return true;
      },
    },
    width: {
      type: String,
      default() {
        return '100%';
      },
    },
    height: {
      type: String,
      default() {
        return '500px';
      },
    },
  },
};
</script>
