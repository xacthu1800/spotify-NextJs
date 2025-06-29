"use client";

import useDebounced from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import React, { useEffect, useState } from 'react'
import Input from './Input';

const SearchInput = () => {

    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounced<string>(value, 500)

    useEffect(()=>{
        const query= {
            title: debouncedValue,
        }

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })

        router.push(url)

    }, [debouncedValue, router])

  return (
    <Input 
        placeholder='What do you want to listen to'
        value={value}
        onChange={(e)=> setValue(e.target.value)}
    />
  )
}

export default SearchInput