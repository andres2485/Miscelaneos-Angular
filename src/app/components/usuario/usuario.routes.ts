import { Component } from '@angular/core';
import{Routes} from '@angular/router';

const USUARIO_ROUTES:Routes=[


    {path:'routePath', component:Component},
    {path:'**' ,pathMatch:'full',redirectTo:''}
];