/* eslint-disable */

import React, { Component } from 'react';
import classnames from 'classnames';
export default class LoadingBox extends Component {
	render() {
		var s = this.props.pulsate,
			e = this.props.displayWhenNotPulsing,
			a = this.props.boxClassNames,
			i = this.props.delay + 's',
			p = s
				? {
						WebkitAnimationDelay: i,
						AnimationDelay: i
				  }
				: {};
		return (
			(a.pulsate = s && e),
			(a['pulsate-transparent'] = s && !e),
			(a['no-pulsate'] = !s && e),
			React.createElement('div', {
				className: classnames(a),
				style: p
			})
		);
	}
}