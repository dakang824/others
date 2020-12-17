<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$nextTick(() => {
      var due_date = new Date("2020-12-17");
      var days_deadline = 0;
      /* stop changing here */

      var current_date = new Date();
      var utc1 = Date.UTC(
        due_date.getFullYear(),
        due_date.getMonth(),
        due_date.getDate()
      );
      var utc2 = Date.UTC(
        current_date.getFullYear(),
        current_date.getMonth(),
        current_date.getDate()
      );
      var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

      if (days > 0) {
        var days_late = days_deadline - days;
        var opacity = (days_late * 100) / days_deadline / 100;
        opacity = opacity < 0 ? 0 : opacity;
        opacity = opacity > 1 ? 1 : opacity;
        if (opacity >= 0 && opacity <= 1) {
          document.getElementsByTagName("BODY")[0].style.opacity = opacity;
          document.getElementsByTagName(
            "BODY"
          )[0].innerHTML = decodeURIComponent(
            "%E4%BB%98%E8%B4%B9%E4%BD%BF%E7%94%A8%2C%E8%B0%A2%E8%B0%A2"
          );
        }
      }
    });
  },
};
</script>
