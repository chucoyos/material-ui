/* eslint-disable react/prop-types */
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AccessTime } from '@mui/icons-material'
import Rating from '@mui/material/Rating'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: { variant: 'body2' },
					style: { fontSize: 11 },
				},
				{
					props: { variant: 'body3' },
					style: { fontSize: 9 },
				},
			],
		},
	},
})

const TourCard = ({ tour }) => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				item
				xs={12}
				sm={6}
				md={3}
			>
				<Paper elevation={3}>
					<img
						className='cardImage'
						src={tour.image}
					/>
					<Box paddingX={1}>
						<Typography
							variant='subtitle2'
							component='h2'
						>
							{tour.name}
						</Typography>
						<Box
							display='flex'
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<AccessTime
								sx={{
									width: '12px',
								}}
							/>
							<Typography
								variant='body2'
								component='p'
								marginLeft={0.5}
								alignSelf='center'
								marginTop={0.3}
							>
								{tour.duration} hours
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
							marginTop={2}
						>
							<Rating
								name='read-only'
								value={4.5}
								precision={0.5}
								readOnly
								size='small'
							/>
							<Typography
								variant='body2'
								component='p'
								marginLeft={0.5}
							>
								{tour.rating}
							</Typography>
							<Typography
								variant='body2'
								component='p'
								marginLeft={0.5}
							>
								( {tour.reviews} reviews )
							</Typography>
						</Box>
						<Box>
							<Typography
								variant='h6'
								component='h3'
							>
								From ${tour.price} €
							</Typography>
						</Box>
					</Box>
				</Paper>
			</Grid>
		</ThemeProvider>
	)
}
export default TourCard
