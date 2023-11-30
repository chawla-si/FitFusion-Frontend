import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: string
    setSelectedPage: (value: string) => void;
}
// page will contain the page name text, selectedpage will contain the page name(id) of the button clicked
const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g,"");
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage? "text-primary-500" : "" }
    transition duration-500 hover:text-primary-300
    `} 
    href={`#${lowerCasePage}`}
    onClick={()=> setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link