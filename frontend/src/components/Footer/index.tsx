import styles from './index.module.scss'
import Image from 'next/image'
import { Text } from '../../beacon/text'

const socialMedia = [
    {
        img: require('../../../public/social/discord.png'),
        link: 'https://discord.com/users/793056782293270549'
    },
    {
        img: require('../../../public/social/twitter.png'),
        link: 'https://twitter.com/butovsky_dev'
    },
    {
        img: require('../../../public/social/reddit.png'),
        link: 'https://www.reddit.com/u/butt_of_sky'
    },
    {
        img: require('../../../public/social/linkedin.png'),
        link: 'https://www.linkedin.com/mwlite/in/aleksandr-nekrashevich-b2072a209'
    },
    {
        img: require('../../../public/social/github.png'),
        link: 'https://github.com/butovsky'
    }
]

export const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {socialMedia.map((icon) => (
                    <a key={`icon-${socialMedia.indexOf(icon)}`} target="_blank" rel="noopener noreferrer" href={icon.link}>
                        <Image className={styles.icon} height={32} width={32} src={icon.img}/>
                    </a>
                ))}
            </div>
            <div className={styles.info}>
                <Text className={styles.title}>butovsky_dev</Text>
                <Text>{new Date(Date.now()).getFullYear()}</Text>
            </div>
        </div>
    )
}