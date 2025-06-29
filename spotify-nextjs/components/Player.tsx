"use client"

import useGetSongById from '@/hooks/useGetSongById'
import useLoadSongUrl from '@/hooks/useLoadSongUrl'
import usePlayer from '@/hooks/usePlayer'
import React from 'react'
import PlayerContent from './PlayerContent'

const Player = () => {
    const player = usePlayer()
    const { song } = useGetSongById(player.activateId)

    const songUrl = useLoadSongUrl(song!)

    if(!songUrl || !song || !player.activateId){
        return null
    }

  return (
    <div className='
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
    '>
        <PlayerContent 
            song={song}
            songUrl={songUrl}
            key={songUrl}
        />
    </div>
  )
}

export default Player