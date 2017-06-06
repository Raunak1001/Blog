/**
 * Created by raunak on 4/6/17.
 */
import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Link} from 'react-router-dom';
import {createPost} from '../actions/index'
import {connect} from 'react-redux'

class PostNew extends React.Component {


    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''} `;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type="text"
                    {...field.input}
                />
                <div className='text-help'>{field.meta.touched ? field.meta.error : ""}</div>
            </div>

        );
    }

    onSubmit(values) {

        this.props.createPost(values, () => {
            this.props.history.push('/')
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this)).bind(this)}>
                <Field
                    label='Title'
                    name='title'
                    component={this.renderField}

                />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderField}

                />
                <Field
                    label='Content'
                    name='content'
                    component={this.renderField}

                />
                <button className='btn btn-primary' type="submit">Save</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>

            </form>
        )
    }

}


function validate(values) {
    const errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = 'Please Enter Title';
    }

    if (!values.categories) {
        errors.categories = 'Please Enter Categories';
    }

    if (!values.content) {
        errors.content = 'Please Enter Content';
    }


    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(connect(null, {createPost: createPost})(PostNew));