import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Formulario', icon: <Web/>, link: '/form' },
    { text: 'Tabla contenidos ', icon: <GridOn/>, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Lorem ipsum 1', price: '50.00', category: 'Lorem ipsum 1'},
      {id: 2, name: 'Lorem ipsum 2', price: '150.00', category: 'Lorem ipsum 2'},
      {id: 3, name: 'Lorem ipsum 3', price: '250.00', category: 'Lorem ipsum 3'},
      {id: 4, name: 'Lorem ipsum 4', price: '10.00', category: 'Lorem ipsum 4'}
      
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Lorem ipsum ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {id: 2, title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {id: 3, title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  '}
      
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Lorem ipsum', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Two Lorem ipsum', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Three Lorem ipsum', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
