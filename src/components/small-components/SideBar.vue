
<script>
export default {
  name: "SideBar"
  
}
</script>

<template>
  <div class="side-bar d-flex flex-column justify-content-between align-items-center ">
    <a href="#">
      <i class="fa-solid fa-ruler-combined"></i>
        <span>Select Demo</span>
    </a>
    <a href="#">
      <i class="fa-solid fa-life-ring"></i>
      <span>Support Channel</span>
    </a>
    <a href="#">
      <i class="fa-solid fa-book"></i>
      <span>Documentation</span>
    </a>
    <a href="#">
      <i class="fa-solid fa-cart-shopping"></i>
      <span>Purchase-MaxCoach</span>
    </a>
  </div>
  
</template>

<style lang="scss" scoped>
  .side-bar{
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 999;
    transform: translateY(-50%);
    width: 40px;
    height: 180px;
    border-radius: 5px 0 0 5px;
    background-color: white;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 0;
    a{
      color: black;
      cursor: pointer;
      span{
        white-space: nowrap;
        display: inline-block;
        height: 45px;
        width: auto;
        position: absolute;
        right: 60px;
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        background-color: black;
        color: white;
        padding: 10px;
        border-radius: 5px;
        transition: all 0.5s ease;
      }
      &:first-child{
        span{
        top: 0;          
        }
        &:hover{
          span{
            z-index: 999;
            opacity: 1;
            visibility: visible;
            right: 50px;
          }
        }
      }
      &:nth-child(2){
        span{
          top: 45px;
        }
        &:hover{
          span{
            z-index: 999;
            opacity: 1;
            visibility: visible;
            right: 50px;
          }
        }
      }
      &:nth-child(3){
        span{
          top: 90px;
        }
        &:hover{
          span{
            z-index: 999;
            opacity: 1;
            visibility: visible;
            right: 50px;
          }
        }
      }
      &:nth-child(4){
        span{
          top: 135px;
        }
        &:hover{
          span{
            z-index: 999;
            opacity: 1;
            visibility: visible;
            right: 50px;
          }
        }
      }
    }
  }

</style>