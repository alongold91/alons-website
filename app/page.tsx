import Image from 'next/image';
import profilePic from '../public/static-images/Profile-image.png';
import style from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={style.profileDiv}>
        <Image
          src={profilePic}
          className={style.img}
          alt='Picture of the author'
        />
        <div className={style.textDiv}>
          <h1>Welcome to my website!</h1>
          <p>
            My name is Alon, a font-end web developer specialized in creating
            web application using ReactJS and NextJs. I do my job passionately
            and find it very creative and enjoyable. Although I am front-end
            oriented, I develop and deploy full-stack applications and use
            virtualization and cloud computing tools to help my clients
            transform and idea into a fully-deployed product (Click here for a
            full list of the technologies I use). Positive user experience means
            a lot to me, so if you are looking for a web application with an
            engaging user interface and a high performance, you have two
            options, contact me or get into the tutorial section (coming soon)
            and learn how to do it yourself. If you are not, you are still more
            than welcome to keep browsing this website. <br /> Enjoy your stay!
          </p>
        </div>
      </div>
    </main>
  );
}