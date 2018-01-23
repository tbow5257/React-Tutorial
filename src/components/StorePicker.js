import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    gotToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        // first grab text from the box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        // second transition from / to /store/:storeid
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render() {
        return (
            <form className="store-selector" action="" onSubmit={this.gotToStore.bind(this)}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {
                    this.storeInput = input
                }}/>
                <button type="submit">Visit Store></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;