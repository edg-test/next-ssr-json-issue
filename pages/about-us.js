import Link from 'next/link'

export default function AboutUs(){
    return (
        <div>
            <h1>About us</h1>
            <Link href={'/'}>Go back to /</Link>
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