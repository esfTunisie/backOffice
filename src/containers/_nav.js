import React from 'react'
import CIcon from '@coreui/icons-react'

  const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,

  },
  


  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Commande',
    route: '/commande',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Nouveaux commandes',
        to: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Commandes annulées',
        to: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Paniers abondannées',
        to: '',
      },
    
]
  }]
export default _nav
