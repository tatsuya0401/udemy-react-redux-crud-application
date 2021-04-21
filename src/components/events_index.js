import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash';


class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents();
	}

	renderEvents() {
		return _.map(this.props.events, event => (
			<tr key={event.id}>
				<th>{event.id}</th>
				<th>{event.title}</th>
				<th>{event.body}</th>
			</tr>
		));
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>TITLE</th>
						<th>BODY</th>
					</tr>
				</thead>

				<tbody>
					{this.renderEvents()}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = ({ readEvents });
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
