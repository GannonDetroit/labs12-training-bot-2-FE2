import React from 'react';
//Prop Types
import PropTypes from 'prop-types';

//Styles
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

//REDUX
import { connect } from 'react-redux';
import {
	deleteTrainingSeries,
	deleteTeamMember,
	deletePost,
	deleteUser,
} from '../../store/actions/';
import { FormLabel } from '@material-ui/core';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 25,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class TrainingSeriesModal extends React.Component {
	state = {
		open: false,
		title: '',
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	clearForm = () => {
		this.setState({ title: '' });
	};

	handleDelete = () => {
		switch (this.props.deleteType) {
			case 'post':
				this.props.deletePost(this.props.id);
				break;
			case 'teamMember':
				this.props.deleteTeamMember(this.props.id);
				break;
			case 'trainingSeries':
				this.props.deleteTrainingSeries(this.props.id);
				break;
			case 'user':
				this.props.deleteUser(this.props.id);
				// this.props.history.push("/");
				break;
			default:
				break;
		}
		this.handleClose();
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Button onClick={this.handleOpen}>Delete</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}>
					<div style={getModalStyle()} className={classes.paper}>
						<FormLabel>Are you sure you want to delete this?</FormLabel>
						<Button
							onClick={() => this.handleDelete()}
							type="submit"
							variant="contained"
							className={classes.button}>
							Delete Item
						</Button>
					</div>
				</Modal>
			</div>
		);
	}
}

TrainingSeriesModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {};
};

const TrainingSeriesModalWrapped = withStyles(styles)(TrainingSeriesModal);

export default connect(
	mapStateToProps,
	{
		deletePost,
		deleteTeamMember,
		deleteUser,
		deleteTrainingSeries,
	}
)(TrainingSeriesModalWrapped);