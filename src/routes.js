import MainLayout from './components/MainLayout/MainLayout';
import PetsLayout from './components/PetsLayout/PetsLayout';
// import PetLayout from './components/PetLayout/PetLayout';

export default [
    {
        component: MainLayout,
        path: '/',
    },
    {
        component: PetsLayout,
        path: '/pets',
    },
    /* {
        component: "PetLayout",
        path:"/pets/:petId",
    }, */
];
