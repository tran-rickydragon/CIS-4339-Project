import { createRouter, createWebHistory } from 'vue-router'
 //importing Home.vue into index


//Routes to allow vue to change interface based on path called
const routes = [
{
  path: '/',
  name: 'homePage',
  component: () => import('../components/homePage.vue')
},

{
  path: '/newClient',
  name: 'newClient',
  component: () => import('../components/Clients/newClient')
},
{
  path: '/clientList',
  name: 'clientList',
  component: () => import('../components/Clients/clientList')
},
{
  path: '/editClient/:id',
  name: 'editClient',
  component: () => import('../components/Clients/editClient')
},
{
  path: '/clientEvents/:id',
  name: 'clientEvents',
  component: () => import('../components/Clients/clientEvents')
},
{
  path: '/employeeHome',
  name: 'employeeHome',
  component: () => import('../components/Employees/employeeHome')
},
{
  path: '/editEmployee/:id',
  name: 'viewEmployee',
  component: () => import('../components/Employees/editEmployee')
},
{
  path: '/newEmployee',
  name: 'newEmployee',
  component: () => import('../components/Employees/newEmployee')
},
{
  path: '/editEvent/:id',
  name: 'editEvent',
  component: () => import('../components/Events/editEvent')
},
{
  path: '/editOrg/:id',
  name: 'editOrg',
  component: () => import('../components/Organizations/editOrg')
},
{
  path: '/eventList',
  name: 'eventList',
  component: () => import('../components/Events/eventList')
},
{
  path: '/newEvent',
  name: 'newEvent',
  component: () => import('../components/Events/newEvent')
},
{
  path: '/eventClients/:id',
  name: 'eventClients',
  component: () => import('../components/Events/eventClients')
},
{
  path: '/eventEmployees/:id',
  name: 'eventEmployees',
  component: () => import('../components/Events/eventEmployees')
},
{
  path: '/newOrg',
  name: 'newOrg',
  component: () => import('../components/Organizations/newOrg')
},
{
  path: '/orgList',
  name: 'orgList',
  component: () => import('../components/Organizations/orgList')
},
{
  path: '/orgClients/:organizationName',
  name: 'orgClients',
  component: () => import('../components/Organizations/orgClients')
},
{
  path: '/orgEmployees/:organizationName',
  name: 'orgEmployees',
  component: () => import('../components/Organizations/orgEmployees')
},
{
  path: '/orgEvents/:organizationName',
  name: 'orgEvents',
  component: () => import('../components/Organizations/orgEvents')
},
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

export default router
