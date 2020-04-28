import { Component, OnInit } from '@angular/core';
declare var d3: any;

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {

  constructor() { }

  tree: any;
  chartContainer: any;
  diagonal: any;
  svg: any;
  root: any;
  treeData: any;
  i: any;

  ngOnInit(): void {

  //   console.log('on init');
  //       const createChart = () => {
  //           var margin = { top: 20, right: 120, bottom: 20, left: 120 },
  //               width = 1560 - margin.right - margin.left,
  //               height = 1000 - margin.top - margin.bottom;

  //           this.tree = d3.layout.tree()
  //               .size([height, width]);

  //           const element = this.chartContainer.nativeElement;

  //           this.diagonal = d3.svg.diagonal().projection((d) => { return [d.y, d.x]; });

  //           this.svg = d3.select(element).append("svg")
  //               .attr("width", width + margin.right + margin.left)
  //               .attr("height", height + margin.top + margin.bottom)
  //               .append("g")
  //               .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //           this.root = this.treeData[0];
  //           this.root.x0 = height / 2;
  //           this.root.y0 = 0;

  //           hideChildren(this.root);

  //           d3.select(self.frameElement).style("height", "1000px");
  //       };


  //       const update = (source) => {

  //           // Compute the new tree layout.
  //           var nodes = this.tree.nodes(this.root).reverse(),
  //               links = this.tree.links(nodes);

  //           // Normalize for fixed-depth.
  //           nodes.forEach((d) => { d.y = d.depth * 180; });

  //           // Update the nodes…
  //           var node = this.svg.selectAll("g.node")
  //               .data(nodes, (d) => { return d.id || (d.id = ++this.i); });

  //           // Enter any new nodes at the parent's previous position.
  //           var nodeEnter = node.enter().append("g")
  //               .attr("class", "node")
  //               .attr("transform", (d) => { return "translate(" + source.y0 + "," + source.x0 + ")"; })
  //               .on("click", click);

  //           nodeEnter.append("circle")
  //               .attr("r", 1e-6)
  //               .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; });

  //           nodeEnter.append("text")
  //               .attr("x", (d) => { return d.children || d._children ? -13 : 13; })
  //               .attr("dy", ".35em")
  //               .attr("text-anchor", (d) => { return d.children || d._children ? "end" : "start"; })
  //               .text((d) => { return d.name; })
  //               .style("fill-opacity", 1e-6);

  //           // Transition nodes to their new position.
  //           var nodeUpdate = node.transition()
  //               .duration(this.duration)
  //               .attr("transform", (d) => { return "translate(" + d.y + "," + d.x + ")"; });

  //           nodeUpdate.select("circle")
  //               .attr("r", 10)
  //               .style("fill", (d) => { return d._children ? "lightsteelblue" : "#fff"; });

  //           nodeUpdate.select("text")
  //               .style("fill-opacity", 1);

  //           // Transition exiting nodes to the parent's new position.
  //           var nodeExit = node.exit().transition()
  //               .duration(this.duration)
  //               .attr("transform", (d) => { return "translate(" + source.y + "," + source.x + ")"; })
  //               .remove();

  //           nodeExit.select("circle")
  //               .attr("r", 1e-6);

  //           nodeExit.select("text")
  //               .style("fill-opacity", 1e-6);

  //           // Update the links…
  //           var link = this.svg.selectAll("path.link")
  //               .data(links, (d) => { return d.target.id; });

  //           // Enter any new links at the parent's previous position.
  //           link.enter().insert("path", "g")
  //               .attr("class", "link")
  //               .attr("d", (d) => {
  //                   var o = { x: source.x0, y: source.y0 };
  //                   return this.diagonal({ source: o, target: o });
  //               });

  //           // Transition links to their new position.
  //           link.transition()
  //               .duration(this.duration)
  //               .attr("d", this.diagonal);

  //           // Transition exiting nodes to the parent's new position.
  //           link.exit().transition()
  //               .duration(this.duration)
  //               .attr("d", (d) => {
  //                   var o = { x: source.x, y: source.y };
  //                   return this.diagonal({ source: o, target: o });
  //               })
  //               .remove();

  //           // Stash the old positions for transition.
  //           nodes.forEach((d) => {
  //               d.x0 = d.x;
  //               d.y0 = d.y;
  //           });

  //           console.log('end creating chart');
  //       };


  //       const hideChildren = (node) => {
  //           if (node.children) {
  //               node._children = node.children;
  //               node.children = null;
  //               node._children.forEach((a) => { hideChildren(a); });
  //           }
  //       };

  //       const click = (d) => {
  //           if (d.children) {
  //               d._children = d.children;
  //               d.children = null;
  //           } else {
  //               d.children = d._children;
  //               d._children = null;
  //           }

  //           update(d);
  //       };

  //       createChart();
  //       this.root.update = update;
  //       update(this.root);
  // }
  // duration(duration: any) {
  //   throw new Error("Method not implemented.");
   }


}
