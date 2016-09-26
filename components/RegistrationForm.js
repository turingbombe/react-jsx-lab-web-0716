const React = require('react');

class RegistrationForm extends React.Component{
    render(){
        return (
        	<div>
		        <form id = "form">
		            <input type = "text" name = "text"/>
		            <input type = "password" name = "password"/>
		            <button type = "submit" name = "submit" />
		        </form>
	        </div>
        )
    }
}

module.exports = RegistrationForm;
