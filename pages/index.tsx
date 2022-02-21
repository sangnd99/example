import type {NextPage} from 'next'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage =
  () => {
    const {
      t,
    } =
      useTranslation(
        'home',
      )
    return (
      <div>
        {t(
          'title',
        )}
      </div>
    )
  }

export default Home
