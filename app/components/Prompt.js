var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form action="" onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="GitHub Username"
              onChange={props.onUpdateUser}
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="Submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
},

module.exports = Prompt;
