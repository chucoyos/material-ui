import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DoneIcon from '@mui/icons-material/Done'
import TextField from '@mui/material/TextField'
import { AddShoppingCart, Delete } from '@mui/icons-material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NavigationIcon from '@mui/icons-material/Navigation'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

function Components() {
	return (
		<div>
			<Box
				display='flex'
				justifyContent='start'
				flexWrap='wrap'
				alignItems='center'
				gap={2}
				marginTop={1}
				marginBottom={1}
			>
				<Chip
					icon={<DoneIcon />}
					label='Clickable Deletable'
					variant='outlined'
					size='small'
					color='success'
					onDelete={() => {}}
					deleteIcon={<Delete />}
				/>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
				/>
				<ButtonGroup
					variant='contained'
					aria-label='outlined primary button group'
				>
					<Button
						variant='outlined'
						color='secondary'
						startIcon={<AddShoppingCart />}
						endIcon={<Delete />}
					>
						Outlined
					</Button>
					<Button>Hello</Button>
				</ButtonGroup>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label='Label'
					/>
					<FormControlLabel
						required
						control={<Checkbox />}
						label='Required'
					/>
					<FormControlLabel
						disabled
						control={<Checkbox />}
						label='Disabled'
					/>
				</FormGroup>
				<Checkbox
					icon={<FavoriteBorder color='red' />}
					checkedIcon={
						<Favorite
							defaultChecked
							sx={{
								color: 'red',
								'&.Mui-checked': {
									color: 'red',
								},
							}}
						/>
					}
				/>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
				/>
				<Fab
					color='primary'
					aria-label='add'
				>
					<AddIcon />
				</Fab>
				<Fab
					color='secondary'
					aria-label='edit'
				>
					<EditIcon />
				</Fab>
				<Fab variant='extended'>
					<NavigationIcon sx={{ mr: 1 }} />
					Navigation Icon
				</Fab>
				<Fab
					disabled
					aria-label='like'
				>
					<FavoriteIcon />
				</Fab>
				<Switch defaultChecked />
				<Switch />
				<Switch
					disabled
					defaultChecked
				/>
				<Switch disabled />
				<Tooltip
					title='Delete'
					arrow
					placement='top'
				>
					<IconButton>
						Tooltip
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</Box>
		</div>
	)
}
export default Components
