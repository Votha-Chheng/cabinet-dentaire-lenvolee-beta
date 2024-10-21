import { ParkingSquare } from 'lucide-react'
import React, { FC } from 'react'

type ParkinInfoProps = {
  menuTop?: boolean
}

const ParkingInfo: FC<ParkinInfoProps> = ({menuTop=false}) => {
  const bandStyle= "flex items-center gap-2 tracking-wider h-[80px]"

  return (
    <article className='flex items-center gap-2 tracking-wide'>
      <div className={`${menuTop ? "gap-2 h-[80px]":"gap-6"} flex items-center tracking-wider`} >
        <ParkingSquare size={40} />
        <div className={`${menuTop && "border-l-2 border-buff text-sm px-2"}`}>
          <ul className='p-0'>
            <li>
              Parking TAM de Gaulle accès rue du Prado (payant)
            </li>
            <li>
              Parking Place de Gaulle (2h gratuites)
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ParkingInfo