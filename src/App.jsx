import './App.css'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TourCard from './components/TourCard'
import cities from './data.json'
import PermanentDrawerLeft from './components/PermanentDrawerLeft'

function App() {
	return (
		<div className='App'>
			<h1>Top</h1>
			{/* <SearchAppBar /> */}

			<PermanentDrawerLeft />
			<Container
				sx={{
					marginTop: '20px',
				}}
			>
				{/* <Components /> */}
				{cities.map((city) => (
					<>
						<Typography
							key={city.id}
							variant='h4'
							component='h2'
							marginTop={5}
							marginBottom={3}
						>
							Top {city.name} tours
						</Typography>
						<Grid
							container
							spacing={{ xs: 2, md: 3 }}
						>
							{city.tours.map((tour) => (
								<TourCard
									key={tour.id}
									tour={tour}
								/>
							))}
						</Grid>
					</>
				))}
			</Container>
		</div>
	)
}

export default App
