import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    const saveContact = () => {
        console.log({name, email, imageUrl});
        ContactsCollection.insert({name, email, imageUrl});
        setName('');
        setEmail('');
        setImageUrl('');
    }

    return (
        <form>
        <div>
            <label htmlFor="name-id">Name</label>
            <input value={name} type="text" id="name-id" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email-id">Email</label>
            <input value={email} type="text" id="email-id" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="image-url-id">Image URL</label>
            <input value={imageUrl} type="text" id="image-url-id" onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
            <button type="button" onClick={saveContact}>Save Contact</button>
        </div>
        </form>
    )
};