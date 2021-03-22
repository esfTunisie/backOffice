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
        to: '/nouveaux_clients/client1',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Commandes annulées',
        to: '/commandes_annulées/client1',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Paniers abondannées',
        to: '/panier_abondonnées/client1',
      },
    
]
  }]
export default _nav
