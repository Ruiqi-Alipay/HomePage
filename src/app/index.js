var React = require('react'),
	ScrollMagic = require('scrollmagic');

var App = React.createClass({

	render: function () {
		return (
			<div>
				<div className="spacer s0"></div>
				<div id="parallax1" className="parallaxParent">
					<div style={{backgroundImage: 'url(../../img/example_parallax_bg1.png)'}}></div>
				</div>
				<div className="spacer s1">
					<div className="box2 blue">
						<p>Content 1</p>
						<a href="#" className="viewsource">view source</a>
					</div>
				</div>
				<div className="spacer s0"></div>
				<div id="parallax2" className="parallaxParent">
					<div style={{backgroundImage: 'url(../../img/example_parallax_bg1.png)'}}></div>
				</div>
				<div className="spacer s1">
					<div className="box2 blue">
						<p>Content 2</p>
						<a href="#" className="viewsource">view source</a>
					</div>
				</div>
				<div className="spacer s0"></div>
				<div id="parallax3" className="parallaxParent">
					<div style={{backgroundImage: 'url(../../img/example_parallax_bg1.png)'}}></div>
				</div>
				<div className="spacer s2"></div>
			</div>
		);
	}

});

React.render(<App/>, document.body);


