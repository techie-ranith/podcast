import React from 'react'
import { Input } from '@/components/common/ui/input'
import { Search } from 'lucide-react'
import SearchIcon from '@mui/icons-material/Search'
const Searchq = () => {
  return (
    <div>
      <Input
        className=" pr-16"
        type="search"
        placeholder="Search episodes "
        searchIco
      />
    </div>
  )
}

export default Searchq
