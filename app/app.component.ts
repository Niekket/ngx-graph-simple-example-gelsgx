import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular 5';
  hierarchialGraph = { nodes: [], links: [] };
  curve = shape.curveBundle.beta(1);
  // curve = shape.curveLinear;

  public ngOnInit(): void {
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.links = [
      {
        id: 'a',
        source: '1',
        target: '2',
        label: 'No',
      },
      {
        id: 'b',
        source: '2',
        target: '3',
      },
      {
        id: 'c',
        source: '3',
        target: '4',
        label: 'No',
      },
      {
        id: 'd',
        source: '4',
        target: '5',
      },
      {
        id: 'e',
        source: '3',
        target: '6',
        label: 'Yes',
      },
      {
        id: 'f',
        source: '6',
        target: '7',
      },
      {
        id: 'g',
        source: '7',
        target: '5',
      },
      {
        id: 'h',
        source: '1',
        target: '5',
        label: 'Yes',
      },
      {
        id: 'i',
        source: '5',
        target: '8',
      },
      {
        id: 'j',
        source: '8',
        target: '9',
      },
      {
        id: 'k',
        source: '9',
        target: '10',
      },
      {
        id: 'l',
        source: '10',
        target: '11',
      },
      {
        id: 'm',
        source: '11',
        target: '9',
        label: 'No',
      },
      {
        id: 'n',
        source: '8',
        target: '11',
        label: 'Yes',
      },
      {
        id: 'o',
        source: '11',
        target: '12',
        label: 'Yes',
      },
      {
        id: 'p',
        source: '12',
        target: '13',
      },
      {
        id: 'q',
        source: '12',
        target: '15',
      },
      {
        id: 'r',
        source: '13',
        target: '14',
      },
      {
        id: 's',
        source: '15',
        target: '16',
        label: 'No',
      },
      {
        id: 'u',
        source: '15',
        target: '17',
        label: 'Yes',
      },
      {
        id: 'w',
        source: '14',
        target: '18',
      },
      {
        id: 'x',
        source: '16',
        target: '18',
      },
      {
        id: 'y',
        source: '17',
        target: '18',
      },
    ];

    this.hierarchialGraph.nodes = [
      {
        id: '1',
        label: 'Node A',
      },
      {
        id: '2',
        label: 'Node B',
      },
      {
        id: '3',
        label: 'Node C',
      },
      {
        id: '4',
        label: 'Node D',
      },
      {
        id: '5',
        label: 'Node E',
      },
      {
        id: '6',
        label: 'Node W',
      },
      {
        id: '7',
        label: 'Node W',
      },
      {
        id: '8',
        label: 'Node F',
      },
      {
        id: '9',
        label: 'Node G',
      },
      {
        id: '10',
        label: 'Node H',
      },
      {
        id: '11',
        label: 'Node I',
      },
      {
        id: '12',
        label: 'Parallel',
      },
      {
        id: '13',
        label: 'Node J',
      },
      {
        id: '14',
        label: 'Node K',
      },
      {
        id: '15',
        label: 'Node L',
      },
      {
        id: '16',
        label: 'Node M',
      },
      {
        id: '17',
        label: 'Node N',
      },
      {
        id: '18',
        label: 'Parallel',
      },
    ];
  }
}
