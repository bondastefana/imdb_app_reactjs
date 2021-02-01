import React from 'react';
import './AddMoviePage.css'
import './Background.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'


class AddMoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            title: "",
            year: "",
            imdbID: "",
            type: "",
            image: null,

        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event)
    }

    componentDidMount() {
        console.log(this.state)
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })
    }

    setUpdate(text, key) {
        console.log("items:" + this.state.items);
        const items = this.state.items;
        // eslint-disable-next-line array-callback-return
        items.map(item => {
            if (item.key === key) {
                console.log(item.key + "    " + key)
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };


    render() {
        return (
            <body className='addmovie'>
                <form className='add-form-movie' id='add-form' onSubmit={this.addItem}>
                    <input className='title' name='title' type='text' placeholder='Enter Title'
                        value={this.state.title} onChange={this.handleInput} />
                    <input className='title' name='year' type='text' placeholder='Enter Year'
                        value={this.state.year} onChange={this.handleInput} />
                    <input className='title' name='imdbID' type='text' placeholder='Enter Imdb ID'
                        value={this.state.imdbID} onChange={this.handleInput} />
                    <input className='title' name='type' type='text' placeholder='Enter Type'
                        value={this.state.type} onChange={this.handleInput} />
                    <button id='add-button' type='submit'>Add</button>
                    <div className='upload'>
                        <img src={this.state.image} />
                        <h1>Select Image</h1>
                        <input type="file" name="myImage" onChange={this.onImageChange} />
                    </div>
                </form>
                <p>{this.state.items.text}</p>

            </body>

        )
    }
}



export { AddMoviePage };