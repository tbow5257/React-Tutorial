import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const fish = this.props.fishes[key];
        //take a copy of fish and update it with new data
        const updatedFish = {
            ...fish,
            [e.target.name]: e.target.value
        }
        this.props.updateFish(key, updatedFish);
    }

    renderInventory(key) {
        const fish = this.props.fishes[key];
        return (
            <div className="fish-edit" key={key}>
                <input type="text" name="name" value={fish.name} onChange={(e) => this.handleChange(e, key)} placeholder="Fish Name"/>
                <input type="text" name="price" value={fish.price} onChange={(e) => this.handleChange(e, key)}  placeholder="Fish Price"/>

                <select type="text" name="status" value={fish.status} onChange={(e) => this.handleChange(e, key)}  placeholder="Fish Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea type="text" name="desc" value={fish.desc} onChange={(e) => this.handleChange(e, key)}  placeholder="Fish Desc"></textarea>
                <input type="text" name="image" value={fish.image} onChange={(e) => this.handleChange(e, key)}  placeholder="Fish Image"/>
                <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;