new Vue({
  el: '#app',
  data: {
    reason: ' ',
    resolution: ' ',
    scope: ' '
    },
   methods: {
    changeReason: function(event){
      this.reason = event.target.value;
    },
     changeResolution: function(event){
      this.resolution = event.target.value;
   },
   changeScope: function(event){
      this.scope = event.target.value;
    }
  }
  });