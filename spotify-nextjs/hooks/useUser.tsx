import { Subscription, UserDetails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
}

export const  UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName: string]: any;
};

export const MyUserContextProvider = (props: Props) =>{
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubScription] = useState<Subscription | null>(null);

    const getUserDetails = () => supabase.from(`users`).select(`*`).single();
    const getSubscription = () => 
        supabase
            .from(`subscriptions`)
            .select(`*, price(*, products(*))`)
            .in(`status`, [`trialing`, `active`])
            .single();
    useEffect(()=>{
        if(user && !isLoadingData && !userDetails && !subscription){
            setIsLoadingData(true);

            Promise.allSettled([getUserDetails(), getSubscription()]).then(
                (results) =>{
                    const userDetailsPromise = results[0];
                    const userSubscriptionPromise = results[1];

                    if(userDetailsPromise.status === "fulfilled"){
                        setUserDetails(userDetailsPromise.value.data as UserDetails);
                    }

                    if(userSubscriptionPromise.status === "fulfilled"){ 
                        setSubScription(userSubscriptionPromise.value.data as Subscription);
                    }

                    setIsLoadingData(false);

                }
            )
        }else if(!user && !isLoadingUser && !isLoadingData){
            setUserDetails(null);
            setSubScription(null);
        }
    },[user, isLoadingUser])


    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscription
    };

    return <UserContext.Provider value={value} {...props} />

}

export const useUser = () => {
    const context = useContext(UserContext);
    if(context === undefined){
        throw new Error(`useUser must be used within a MyUserContextProvider`);
    }

    return context
}