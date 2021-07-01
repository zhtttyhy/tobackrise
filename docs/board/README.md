---
editLink: false
---

# 留言板
<script>
  export default {
    mounted() {
      this.hideLU();
    },
    methods: {
      hideLU() {
        var lu = document.getElementsByClassName("last-updated");
        for(var i = 0; i < lu.length; i++){
          lu[i].style.display = "none"
        }
      },
    },
  };
</script>