var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    };
  },

  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  onSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form action="" onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="GitHub Username"
                onChange={this.onUpdateUser}
                value={this.state.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success" type="Submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = PromptContainer;
