import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import ExperimentPage from "@/pages/ExperimentPage.vue";

const routes = [
  {
    name: 'homePage',
    path: '/',
    component: HomePage
  },
  {
    name: 'experimentPage',
    path: '/experiment',
    component: ExperimentPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
