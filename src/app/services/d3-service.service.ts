import { Injectable } from '@angular/core';
import {TreeModel } from '../../assets/tree-model-js-master/dist/TreeModel';

@Injectable({
  providedIn: 'root'
})
export class D3ServiceService {

  treeModel: TreeModel= new TreeModel();

  constructor() { }

  createChart(chartContainer: any, treeData: any): void {
    let element = chartContainer.nativeElement;
    element.innerHTML= "";
    this.treeModel.addSvgToContainer(chartContainer);
    this.treeModel.createLayout();
    this.treeModel.createTreeData(treeData);
  }

  update(){
    this.treeModel.rightTreeUpdate(this.treeModel.rroot);
    this.treeModel.leftTreeUpdate(this.treeModel.lroot);
  }
}
