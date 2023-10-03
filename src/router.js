import { createRouter, createWebHistory } from 'vue-router'
import TasksPage from './components/layout/TasksPage.vue'
import PackagesPage from './components/layout/PackagesPage.vue';
import FAQPage from './components/layout/FAQPage.vue';
import LicensesPage from './components/layout/LicensesPage.vue';
import BillsPage from './components/layout/BillsPage.vue';
import ProjectsPage from './components/layout/ProjectsPage.vue';

const routes = [
  { path: '/tasks', component: TasksPage },
  { path: '/packages', component: PackagesPage },
  { path: '/faq', component: FAQPage },
  { path: '/licenses', component: LicensesPage },
  { path: '/bills', component: BillsPage },
  { path: '/projects', component: ProjectsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router