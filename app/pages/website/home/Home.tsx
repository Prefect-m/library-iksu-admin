import { pageApi } from '@/../api/pages/page-api'
import { Hero, SpinnerComponent } from '@/components'
import { PagesConstance } from '@/constance/Pages-constance'
import { Layout } from '@/layout/Layout'
import styles from './Home.module.scss'

export const Home = () => {
	const { isLoading, data: Page } = pageApi.useFetchPageQuery(
		PagesConstance.MAINPAGE
	)
	return (
		<Layout title='Страница главная'>
			{isLoading && <SpinnerComponent />}
			{/* Hero */}
			<Hero data={Page?.hero} />
			<div className={styles.homeSection}></div>
		</Layout>
	)
}
