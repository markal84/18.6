var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
        console.log('getDefaultProps: Setting default props if not set, ie. this.props.counter || 0');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement : function() { // created decrement function 
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('componentWillMount - we can use this.setState() here without render element again');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Dodaj ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij ' + this.state.counter)
        );
    },

    componentDidMount: function() {
        console.log('componentDidMount() - now our button is mounted in DOM tree and we can manipulate it');
    },
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement : function() { // created decrement function 
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Dodaj ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij ' + this.state.counter)
        );
    },
});


var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var element = React.createElement(Counter2);
ReactDOM.render(element, document.getElementById('app2'));