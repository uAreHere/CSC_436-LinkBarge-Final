import LinksLinks from "csc-start/components/LinksLinks";
import SocialLinks from "csc-start/components/SocialLinks";
import {getUserBySlug } from "csc-start/utils/data";
import { notFound } from "next/navigation";

export const revalidate = 20;

const Page = async ({params: {slug}}) => {

    const {data, error} = await getUserBySlug(slug);

    if(!data){
        notFound();
    }
    if(!!error){
        return <p>{error.message}</p>
    }
   
    const {user_id} = data;

    return <>
        <SocialLinks user_id={user_id}/>
        <LinksLinks user_id={user_id}/>
    </>
}

export default Page;