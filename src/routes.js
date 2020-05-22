import MainLayout from './components/MainLayout/MainLayout';
import PetsLayout from './components/PetsLayout/PetsLayout';
import PetProfileLayout from './components/PetProfileLayout/PetProfileLayout';

export default [
    {
        component: MainLayout,
        path: '/',
    },
    {
        component: PetsLayout,
        path: '/pets',
    },
    {
        component: PetsLayout,
        path: '/pets?page=:id',
    },
    {
        component: PetProfileLayout,
        path: '/pet-profile/:slug',
    },
];
