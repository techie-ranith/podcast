import React from 'react'
import { Input } from '@/components/common/ui/input'
import { Search } from 'lucide-react'
import SearchIcon from '@mui/icons-material/Search'
import Containerf from '../containerf'
const Searchq = () => {
  return (
    <Containerf>
      <div>
        <Input
          className=" pr-16 w-auto "
          type="search"
          placeholder="Search episodes "
          searchIco
        />
      </div>
    </Containerf>
  )
}

export default Searchq
