var React = require("react");

var LocalePicker = React.createClass({

  mixins: [
    require("../mixins/I18N")
  ],

  getInitialState: function() {
    return {
      strings: this.getLocales(),
      locale:  this.getLocale()
    };
  },

  render: function() {
    var strings = this.state.strings;
    var generator = function(localeName) {
      return (
        <option value={localeName}
                key={localeName}>{strings[localeName]}</option>
      );
    };
    var locales = Object.keys(this.state.strings).map(generator);
    var props = {
      className: "locale-picker component btn btn-default",
      value: this.state.locale,
      onChange: this.changeLocale
    };
    return <select {...props}>{locales}</select>;
  },

  changeLocale: function(evt) {
    var selected = evt.target.value;
    this.triggerLocaleChange(selected);
  }

});

module.exports = LocalePicker;
