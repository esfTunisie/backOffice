import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">Estores Factory</a>
        <span className="ml-1">&copy; 2020 Esftunisie.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="" target="_blank" rel="noopener noreferrer">Estores Factory Tunisie</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
