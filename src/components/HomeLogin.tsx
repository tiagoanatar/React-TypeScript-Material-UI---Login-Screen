import {useState} from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const HomeLogin = ( { onsubmit, handleOpen, defaultLogin }:any ) => {

  // material CSS classes UI component style
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      textField: {
        backgroundColor: '#111',
        color: 'white',
        "& .MuiFormLabel-root": {
          color: '#999', 
        }
      },
      input: {
        color: 'white',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
      buttonLeft: {
        width: '100%',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
      },
      buttonRight: {
        width: '100%',
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
      },
    }),
  )

  const classes = useStyles();

  // validade form
  const validate = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    let testObject = {user: '', password: ''}
    testObject.user = user
    testObject.password = password

    JSON.stringify(testObject) === JSON.stringify(defaultLogin) ? onsubmit() : alert('erro')

  }

    // Login State
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form autoComplete="off" className='login-form' onSubmit={validate}>

        <div className='form-separator'></div>

        <TextField 
        fullWidth={true} required={true} color='primary' id="filled-basic" label="User" 
        placeholder='Your User Name' className={classes.textField} 
        InputProps={{className: classes.input}} 
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setUser(e.target.value)}
        value={user} error={user === ""}
        helperText={user === "" ? 'Empty field!' : ' '}
        />

        <div className='form-separator'></div>

        <TextField 
        fullWidth={true} required={true} id="filled-basic" label="Password" 
        placeholder='Your Password Name' className={classes.textField} 
        InputProps={{className: classes.input}}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(e.target.value)}
        value={password} error={password === ""}
        helperText={password === "" ? 'Empty field!' : ' '}
        />

        <div className='form-separator'></div>

        <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
            <Button type='submit' variant='contained' color='primary' className={classes.buttonLeft}>
            Login
            </Button>
            </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant='contained' color='secondary' className={classes.buttonRight} onClick={handleOpen}>
            Create Account
            </Button>
        </Grid>
        </Grid>

        </form>
    )

}
