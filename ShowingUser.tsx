import Image from 'next/image'
import { UserContext } from './Context'
import { useContext } from 'react'

const ShowingUser = () => {
  const context = useContext(UserContext)
  return (
    <div className="flex items-center cursor-pointer gap-2">
      {context?.userData && (
        <Image
          src={context?.userData?.imageUrl}
          alt="IMAGE"
          className="rounded-xl"
          width={30}
          height={40}
        />
      )}
      <h6 className="text-xs sm:text-base capitalize">
        {context?.userData?.Name}
      </h6>
    </div>
  )
}

export default ShowingUser
