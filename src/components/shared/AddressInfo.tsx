import Link from 'next/link'
import React, { FC } from 'react'
import { TbLocationFilled } from 'react-icons/tb'

type AddressInfoProps = {
  menuTop?: boolean
}

const AddressInfo: FC<AddressInfoProps> = ({menuTop=false}) => {

  return (
    <article className='flex items-center gap-2 tracking-wide'>    
      <div className={` flex items-center tracking-wider ${menuTop ? "h-[80px] gap-x-2":"gap-x-6"}`}>
        <TbLocationFilled size={40} />
        <Link 
          href="https://www.google.fr/maps/place/Dr+Sylvie+MA+-+Francin+L+envol%C3%A9e-cabinet+dentaire/@43.6283831,3.8947128,17z/data=!3m1!4b1!4m5!3m4!1s0x12b15d67b2934f89:0x93197d4f7d8e15e4!8m2!3d43.6283792!4d3.8969015" 
          target="_blank" 
          rel="noreferrer"
          className={`${menuTop && 'border-l-2 border-buff px-2 text-sm'}`}
        >
          {
            menuTop
            ?
            <span>
              Résidence L&apos;Envolée, 3 place Charles de Gaulle<br/>
              34 170 Castelnau-le-Lez
            </span>
            :
            <span>
              Résidence L&apos;Envolée<br/>
              3 place Charles de Gaulle<br/>
              34 170 Castelnau-le-Lez
            </span>
          }
        </Link>
      </div>
    </article>
  )
}

export default AddressInfo