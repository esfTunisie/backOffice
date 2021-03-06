import React from 'react'
import CIcon from '@coreui/icons-react'


  const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,

  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Commande',
    route: '/commande',
    icon: <CIcon name="cilBasket" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Nouveaux commandes',
        to: '/nouveaux_commande',
      
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Commandes en cours',
        to: '/commandes_en_cours',
       
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Commandes annulées',
        to: '/commandes_annulées',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Paniers abondannées',
        to: '/panier_abondonnées',
      },  
]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Product',
    route: '/Product',
    icon: <CIcon name="cilBasket" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Liste des produits',
        to: '/product_list',
      
      },   
]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Prestashop Api Form',
    to: '/form_prestashop',
    icon: <CIcon name="cilNotes" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Settings',
    to: '/settings',
    icon: <CIcon name="cilNotes" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Droppex',
    to: '/shipping',
    icon: <CIcon name="cilNotes" customClasses="c-sidebar-nav-icon"/>,
  }
 
]
export default _nav
