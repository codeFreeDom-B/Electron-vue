/*
 * @Author: SUN HENG
 * @Date: 2023-10-07 17:35:36
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2023-10-08 10:52:16
 * @FilePath: \Electronvite\types\global.d.ts
 * @Description: 
 */
import {Graph} from "@antv/x6";
declare global {
    interface Window {
      GraphInstance: Graph;
    }
    const GraphInstance:Graph

  }