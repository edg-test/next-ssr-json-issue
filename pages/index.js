import Link from 'next/link'

export default function Index(){
    return (
        <div>
            <h1>Home page</h1>
            <Link href={'/about-us'}>Go to /about-us</Link>
        </div>
    )
}

export async function getServerSideProps(_context){
    return {
        props: {
            hello: 'world'
        }
    }
}