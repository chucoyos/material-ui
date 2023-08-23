import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import AppIcon from '@mui/icons-material/Apps'
import { useState } from 'react'

export default function PermanentDrawerLeft() {
	const [drawerWidth, setDrawerWidth] = useState(100)
	const toggleDrawerWidth = () => {
		if (drawerWidth === 100) {
			setDrawerWidth(240)
		} else {
			setDrawerWidth(100)
		}
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						transition: 'ease-in-out 0.2s',
					},
				}}
				variant='permanent'
				anchor='left'
			>
				<Divider />

				<Divider />
				<List>
					<ListItem>
						<ListItemButton onClick={toggleDrawerWidth}>
							<ListItemIcon>
								<AppIcon fontSize='large' />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Box
				component='main'
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
			>
				<Toolbar />
			</Box>
		</Box>
	)
}
