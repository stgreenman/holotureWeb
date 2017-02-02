var React = require('react');

var Footer = React.createClass({
	render: function() {
		return (



      <footer className="footer">
          <div className="small-12 columns">
            <img src="https://s3-us-west-2.amazonaws.com/holoture/images/shortNLogo.png" alt="holoture name logo" className="inverted" hight="70" width="160"></img>
            <p className="links">
              <a href="#">Home</a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">About</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </p>
            <p className="copyright">Copyright © 2016</p>
          </div>
      </footer>


		);
	}
});


module.exports = Footer;
