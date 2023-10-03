<template>
  <div>
    <div class="menu">
      <button class="menu-item rounded  text-light p-2" :class="{ 'active': activePage === 'tasks' }" @click="showTasks = true; showPackages = false; showBills = false; showProjects = false; showFAQ = false; showLicenses = false; activePage = 'tasks'">Задачи</button>
      <button class="menu-item rounded text-light" :class="{ 'active': activePage === 'packages' }" @click="showTasks = false; showPackages = true; showBills = false; showProjects = false; showFAQ = false; showLicenses = false; activePage = 'packages'">Пакеты</button>
      <button class="menu-item rounded text-light" :class="{ 'active': activePage === 'bills' }" @click="showTasks = false; showPackages = false; showBills = true; showProjects = false; showFAQ = false; showLicenses = false; activePage = 'bills'">Счета</button>
      <button class="menu-item rounded text-light" :class="{ 'active': activePage === 'projects' }" @click="showTasks = false; showPackages = false; showBills = false; showProjects = true; showFAQ = false; showLicenses = false; activePage = 'projects'">Проекты</button>
      <button class="menu-item rounded text-light" :class="{ 'active': activePage === 'faq' }" @click="showTasks = false; showPackages = false; showBills = false; showProjects = false; showFAQ = true; showLicenses = false; activePage = 'faq'">FAQ</button>
      <button class="menu-item rounded text-light" :class="{ 'active': activePage === 'licenses' }" @click="showTasks = false; showPackages = false; showBills = false; showProjects = false; showFAQ = false; showLicenses = true; activePage = 'licenses'">Лицензии</button>
    </div>
    <div>
      <TasksPage v-show="showTasks" class="menu-content"/>
      <PackagesPage v-show="showPackages" class="menu-content"/>
      <BillsPage v-show="showBills" class="menu-content"/>
      <ProjectsPage v-show="showProjects" class="menu-content"/>
      <FAQPage v-show="showFAQ" class="menu-content"/>
      <LicensesPage v-show="showLicenses" class="menu-content"/>
    </div>
  </div>
</template>

<script>
import TasksPage from './layout/TasksPage.vue';
import PackagesPage from './layout/PackagesPage.vue';
import BillsPage from './layout/BillsPage.vue';
import ProjectsPage from './layout/ProjectsPage.vue';
import FAQPage from './layout/FAQPage.vue';
import LicensesPage from './layout/LicensesPage.vue';

export default {
  name: 'App',
  components: {
    TasksPage,
    PackagesPage,
    BillsPage,
    ProjectsPage,
    FAQPage,
    LicensesPage,
  },
  data() {
    return {
      showTasks: true,
      showPackages: false,
      showBills: false,
      showProjects: false,
      showFAQ: false,
      showLicenses: false,
      activePage: 'tasks',
    };
  },
};
</script>
<style scoped>
.menu-content {
    margin: 0 auto;
    width: 100%;
    margin-top: 4rem;
  }

  .menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
}

.menu-item {
  display: inline-block;
  padding: 8px 16px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #2c3e50 !important;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}

.menu-item:hover,
.menu-item.active {
  background-color: #fff;
  color: #2c3e50;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
}

@media screen and (min-width: 768px) {
  .menu {
    flex-wrap: nowrap;
    justify-content: center;
  }

  .menu-item {
    margin: 0 10px;
    padding: 10px 24px;
    font-size: 16px;
    border-radius: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
  }

  .menu-item:hover,
  .menu-item.active {
    background-color: #fff;
    color: #2c3e50;
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  }
}
</style>