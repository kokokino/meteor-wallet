import {Meteor} from "meteor/meteor";
import { check } from "meteor/check";
import { ContactsCollection } from "./ContactsCollection";

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

Meteor.methods({
    'contacts.insert' ({ name, email, imageUrl }) {
        check(name, String);
        check(email, String);
        check(imageUrl, String);
        if ( ! name || name.trim().length == 0) {
            throw new Meteor.Error('Name is required');
        }
        return ContactsCollection.insert({ name, email, imageUrl, createdAt: new Date() });
    },
    'contacts.remove' ({contactId}) {
        check(contactId, String);

        // Uncomment to see delayed rejection of optimistic action
        // if (this.isSimulation) {
        //     ContactsCollection.remove(contactId);
        // } else {
        //     console.log('This contact was not removed');
        //     sleep(2000);
        // }

        return ContactsCollection.remove(contactId);
    }
});

