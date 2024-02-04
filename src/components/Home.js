import image from '../header.jpg';

const Home = () => {
    return(
     <main>
        <img src={image} alt='coder gonna code picture' className='absolute object-cover w-full h-full' />
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
          <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>Aloha. I'm Peter Wong.</h1>
        </section>
     </main>
    )
}

export default Home