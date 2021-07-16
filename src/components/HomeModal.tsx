import { Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// interface sample 01
interface ModalType {
    open: boolean,
    handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export const HomeModal = ({ open, handleClose }: ModalType) => {

    // material CSS classes UI component style
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
        paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
    }),
    );
    const classes = useStyles();

    return (
    <>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>

    </>

    )
};
