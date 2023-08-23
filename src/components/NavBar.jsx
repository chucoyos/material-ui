// import Drawer from '@mui/material/Drawer'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import MenuIcon from '@mui/icons-material/Menu'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function NavBar() {
	return (
		<>
			{/* <Drawer
				className='drawer'
				sx={{
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: 90,
					},
				}}
				variant='permanent'
				anchor='left'
			>
				<List disablePadding>
					<ListItem key={1}>
						<ListItemButton>
							<ListItemIcon>
								<MenuIcon />
							</ListItemIcon>
							<ListItemText />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer> */}

			<BottomNavigation
				showLabels
				// value={value}
				// onChange={(event, newValue) => {
				// 	setValue(newValue)
				// }}
				sx={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 1,
				}}
			>
				<BottomNavigationAction
					label='Recents'
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction
					label='Favorites'
					icon={<FavoriteIcon />}
				/>
				<BottomNavigationAction
					label='Nearby'
					icon={<LocationOnIcon />}
				/>
			</BottomNavigation>
		</>
	)
}
export default NavBar
