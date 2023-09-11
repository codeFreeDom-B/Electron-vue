import type { Component } from "vue" 
export interface ActironBarStateType{
   ActionBarList:{id: string,name: string,type: string,icon:() => VNodeChild}[]
 } 