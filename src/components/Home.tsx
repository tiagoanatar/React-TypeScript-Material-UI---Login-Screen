import {useState} from 'react'
import { Button, Typography, Container, Grid, TextField, Input, ThemeProvider } from '@material-ui/core'
import { makeStyles, Theme, createStyles, createTheme } from '@material-ui/core/styles'

// assets
import logo from '../assets/logo-02.png';

// components
import { HomeModal } from './HomeModal'
import { HomeLogin } from './HomeLogin'

export const Home = ({ setroute }:any) => {

	// Modal state
	const [open, setOpen] = useState(false)
	const handleOpen = () => { setOpen(true); }
	const handleClose = () => { setOpen(false); }

	// Login form state
	const [login, setLogin] = useState({user: '', password: ''})
	const defaultLogin = {user: 'test', password: 'test'}

	const onSubmit = () => {
		//
		console.log('ok')
		setroute('/first')
	}
	
	return (	
		<>
			{/* Modal */}
			<HomeModal open={open} handleClose={handleClose} />

			<div className='main-screen white-text'>
				<Container maxWidth='md' style={{height: '100vh'}}>

					<Grid container spacing={0}>

					{/* Form area */}
					<Grid item xs={12} sm={6} className='center-box box-style'>

					<Typography component='div' className='main-title-style'>
						<h3>Welcome to</h3>
						<img src={logo} width='200px' />
					</Typography>

					<HomeLogin onsubmit={onSubmit} handleOpen={handleOpen} defaultLogin={defaultLogin} />

					</Grid>

					{/* Image area */}
					<Grid item xs={12} sm={6} className='center-box main-game-bk'>
								
					</Grid>
					</Grid>

				</Container>
			</div>  
			
		</>
	)
}