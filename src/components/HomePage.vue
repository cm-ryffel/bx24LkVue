<script setup>
import TasksPage from './assets/TasksPage.vue'
import PackagesPage from './assets/PackagesPage.vue';
import FAQPage from './assets/FAQPage.vue';
import LicensesPage from './assets/LicensesPage.vue';
</script>

<template>
  <div>
    <TasksPage class="menu-content"/>
    <PackagesPage class="menu-content"/>
    <BillsPage class="menu-content"/>
    <ProjectsPage class="menu-content" />
    <FAQPage class="menu-content" />
    <LicensesPage class="menu-content" />
  </div>
</template>
<style scoped>
.menu-content {
    margin: 0 auto;
    width: 100%;
    margin-top: 4rem;
  }  
</style>