import PropTypes from 'prop-types';
import React from 'react';
import styles from './Searchbar.module.css'

export class Searchbar extends React.Component {
    state = {
        request: '',
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.reset();
    }

    reset() {
        this.setState({
            request: '',
        });
    }

    render() {
        return <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={styles.SearchFormInput}
                    name="request"
                    value={this.state.request}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
                    required
                />
            </form>
        </header>;
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}