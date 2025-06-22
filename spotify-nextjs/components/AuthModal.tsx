"use client";

import React from 'react'
import Modal from './Modal';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';



const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    


  return (
    <Modal
        title='Welcome back'
        description='Login to your account'
        isOpen
        onChange={()=>{}}
    >
        Auth modal children!
    </Modal>
  )
}

export default AuthModal