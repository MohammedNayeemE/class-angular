import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import path from 'path';
import { Component } from '@angular/core';
export const routes: Routes = [
    {path :'app' , component : AppComponent},
    {path:'hello' , component :HelloComponent}
];
