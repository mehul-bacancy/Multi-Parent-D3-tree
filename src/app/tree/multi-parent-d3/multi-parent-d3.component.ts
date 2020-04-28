import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-multi-parent-d3',
  templateUrl: './multi-parent-d3.component.html',
  styleUrls: ['./multi-parent-d3.component.scss']
})
export class MultiParentD3Component implements OnInit {
 
 treeDataRaw = [
    {
      "name": "Grandparent",
      "parent": "null",
      "children": [
        {
          "name": "Parent",
          "parent": "Grandparent",
          "children": [
            {
              "name": "Sibiling",
              "parent": "Parent",
              "children": [
                {
                  "name": "Child 5",
                  "parent": "Sibiling",
                },
              ]
            },
            {
              "name": "ACME",
              "parent": "Parent",
              "children": [
                {
                  "name": "Child 1",
                  "parent": "ACME",
                },
                {
                  "name": "Child 2",
                  "parent": "ACME",
                },
                {
                  "name": "Child 3",
                  "parent": "ACME",
                },
                {
                  "name": "Child ",
                  "parent": "ACME",
                }
              ]
            }
          ]
        },
        {
          "name": "Uncle",
          "parent": "Grandparent"
        }, {
          "name": "Great Uncle",
          "parent": "Grandparent"
        }
      ]
    }];
  treeData = new TreeDataNode("Grandparent", "null",
    [
      new TreeDataNode("Parent", "Grandparent", [
        new TreeDataNode("Sibling", "Parent", [
          new TreeDataNode("Child 5", "Sibling"),
         
        ]),
        new TreeDataNode("ACME", "Parent",[
          new TreeDataNode("Child 1", "ACME"),
          new TreeDataNode("Child 2", "ACME"),
          new TreeDataNode("Child 3", "ACME"),
          new TreeDataNode("Child ", "ACME"),

        ]),
      ]),
      new TreeDataNode("Uncle", "Grandparent"),
      new TreeDataNode("Great Uncle", "Grandparent"),
    ]);
    
  
    svg;
    layer1;
    layer2;
    treemap;
  
    width;
    height;
    margin;
  
    duration = 750; // animation duration in MS
    distance = 45;  // Nodes distance in PX
    root;
    i = 0;
  
    ngOnInit()
    {
  
      /*
      var jsText = 'var a = 0; var b = b; var x = {a:1,b:[1,2,3]};';
  
      console.log( esprima.tokenize( jsText ) );
      
      console.log( esprima.parse(jsText, {
        range: true,
        loc: true,
        tolerant: true,
        attachComment: true,
        sourceType: 'script'
      }) );
  
      return;
      /**
       * function (node) {
      console.log(node.type);
  });
       */
  
      // Set the dimensions and margins of the diagram
      this.margin = {top: 20, right: 90, bottom: 30, left: 200};
      this.width = 960 - this.margin.left - this.margin.right;
      this.height = 600 - this.margin.top - this.margin.bottom;
  
      this.svg = d3.select('.svgContainer').append('svg');
      this.layer1 = this.svg.append('g');
      this.layer2 = this.svg.append('g');
  
      // append the svg object to the body of the page
      // appends a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      this.svg = this.svg
        .attr("width", this.width + this.margin.right + this.margin.left)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        // .attr('height','100%')
        .append("g")
          .attr('class', 'stage')
          .attr("transform", "translate("
                + this.margin.left + "," + this.margin.top + ")");
  
                
      // declares a tree layout and assigns the size
      this.treemap = d3.tree().size([this.height, this.width]);
  
      // Assigns parent, children, height, depth
      this.root = d3.hierarchy(this.treeData, (d)=>d.children );
      this.root.x0 = this.height / 2;
      this.root.y0 = 0;
  
      // console.log( d3.select('.stage').node().getBBox() );
  
      console.log( 'THIS.ROOT', this.root.children, this.root.data );
  
      // Collapse after the second level
      this.root.children.forEach( this.collapse );
  
      this.update( this.root );
    }
  
    // Collapse the node and all it's children
    collapse( d ) 
    {
      console.log( 'COLLAPSE', this );
  
      if( d.children && d.children.length > 0 ) 
      {
        d._children = d.children
        /// d._children.forEach( this.collapse );
        d.children = null
      }
    }
  
    update( source ) 
    {
      // Assigns the x and y position for the nodes
      var treeDataMap = this.treemap( this.root );
  
      // Compute the new tree layout.
      var nodes = treeDataMap.descendants(),
          links = treeDataMap.descendants().slice(1);
  
      // Normalize for fixed-depth.
      nodes.forEach(function(d){ d.y = d.depth * 180});
  
      // ****************** Nodes section ***************************
  
      // Update the nodes...
      var node = this.svg.selectAll('g.node')
          .data(nodes, function(d) {return d.id || (d.id = ++this.i); });
  
      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
          .attr('class', 'node')
          .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        // Toggle children on click.
        .on('click', d=> 
        {
          if (d.children) {
              d._children = d.children;
              d.children = null;
            } else {
              d.children = d._children;
              d._children = null;
            }
          this.update( d );
        } );
  
  
  
      // Add Circle for the nodes
      nodeEnter.append('circle')
          .attr('class', 'node')
          .attr('r', 1e-6)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });
  
      // Add labels for the nodes
      nodeEnter.append('text')
          .attr("dy", ".35em")
          .attr("x", function(d) {
              return d.children || d._children ? -13 : 13;
          })
          .attr("text-anchor", function(d) {
              return d.children || d._children ? "end" : "start";
          })
          .text(function(d) { return d.data.name; });
  
      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);
  
      // Transition to the proper position for the node
      nodeUpdate
        //.transition()
        //.duration(this.duration)
        .attr("transform", function(d) { 
            return "translate(" + d.y + "," + d.x + ")";
        });
  
      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        })
        .attr('cursor', 'pointer');
  
      // Remove any exiting nodes
      var nodeExit = node.exit()
          //.transition()
          //.duration( this.duration )
          //.attr("transform", d=> "translate(" + source.y + "," + source.x + ")" )
          .remove();
  
      // On exit reduce the node circles size to 0
      nodeExit.select('circle')
        .attr('r', 1e-6);
  
      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);
  
      // ****************** links section ***************************
  
      // Creates a curved (diagonal) path from parent to the child nodes
      var diagonal = function(s, d) {
  
        var path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`
  
        return path
      };
  
      // Update the links...
      var link = this.svg.selectAll('path.link')
          .data(links, function(d) { return d.id; });
  
      // Enter any new links at the parent's previous position.
      var linkEnter = link.enter()
          .insert('path', "g")
          .attr("class", "link")
          .attr('d', function(d){
            var o = {x: source.x0, y: source.y0}
            return diagonal(o, o)
          });
  
      // UPDATE
      var linkUpdate = linkEnter.merge(link);
  
      // Transition back to the parent element position
      linkUpdate
          //.transition()
          //.duration(this.duration)
          .attr('d', function(d){ return diagonal(d, d.parent) });
  
      // Remove any exiting links
      var linkExit = link.exit()
          //.transition()
          //.duration(this.duration)
          //.style('stroke-opacity', -2)
          //.attr('d', (d)=> {
          //  var o = { x: source.x, y: source.y }
          //  return diagonal(o, o);
          //})
          .remove();
  
      // Store the old positions for transition.
      nodes.forEach(function(d){
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }
  
    isPaused = false;
    btnPauseVisible = true;
    btnStepVisible = false;
  
    btnPauseClick( e ) 
    {
      this.isPaused = ! this.isPaused;
      this.btnStepVisible = this.isPaused;
      d3.select( e.target )
        .html( this.isPaused ? "Resume" : "Pause" );    
    }
    btnStepClick( e ) 
    {
  
    }
  }
  
  export class TreeDataNode {
    
    name:string;
    parent:string;
    children:TreeDataNode[];
  
    _children:TreeDataNode[] = [];
  
    constructor( name:string, parent:string, children:TreeDataNode[]=[] )
    {
      this.name = name;
      this.parent = parent;
      this.children = children;
    }
  
    forEach( callBack )
    {
      if( ! this.children || this.children.length < 1 ) return;
      
      this.children.forEach( node=>
      {
        console.log( node ? 'TRUE' : 'FALSE' );
  
        if( ! node ) return;
  
        callBack(node);
  
        node.forEach( callBack );
      });
    }
}
