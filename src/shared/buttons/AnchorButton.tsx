import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children: React.ReactNode;
  toSection: string;
}

const AnchorButton = ({children , toSection}: Props) => {
  return (
    <AnchorLink href={toSection} className='scroll-smooth font-bold rounded-lg text-sm px-4 py-3 text-center underline'>
      {children}
    </AnchorLink>
  )
}

export default AnchorButton