import React from 'react'
import { Input } from 'components/common/ui/input'
import { Search } from 'lucide-react'
import SearchIcon from '@mui/icons-material/Search'
import Containerf from '../../client/containerf'
const Searchq = () => {
  return (
    <Containerf>
      <div>
        <Input
          className=" pr-16 w-auto "
          type="search"
          placeholder="Enter Your Email"
          searchIco
        />
      </div>
    </Containerf>
  )
}

export default Searchq
