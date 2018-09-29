import React, {Component} from 'react';

class JournalEntry extends Component {
    constructor(props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleJournalEntry = this.handleJournalEntry.bind(this);
        this.state = {
            username: "",
            title: "",
            journalEntry: "",
            databaseData: []
        }
    }
        handleUsername(event)
        {
            this.setState({username: event.target.value});
        }
        handleTitle(event)
        {
            this.setState({title: event.target.value});
        }
        handleJournalEntry(event)
        {
            this.setState({journalEntry: event.target.value});
        }



    addToJournalEntry = event => {
        fetch('/api/journal',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: this.state.username,
                        title: this.state.title,
                        journalEntry: this.state.journalEntry
                    }
                )
            })
    };

    showJournals (journal) {
        return (
            <div>
                <p>{journal.username}</p>
                <p>{journal.title}</p>
                <p>{journal.journalEntry}</p>
            </div>
        )
    }

    render(){
        fetch('/api/getall')
            .then(data => data.json())
            .then(response => this.setState({databaseData: response
            }));

        var eachJournal = this.state.databaseData.map(
            (journal)=> this.showJournals(journal)
        );

        return(
            <div>
                <p>{eachJournal}</p>
                <input
                onChange={this.handleUsername}
                name="username"
                className="NameInputForm"
                value={this.state.username}
                placeholder="enter username"
                />
                <input
                    onChange={this.handleTitle}
                    name="title"
                    className="NameInputForm"
                    value={this.state.title}
                    placeholder="enter title"
                />

                <input
                    onChange={this.handleJournalEntry}
                    name="journalentry"
                    className="NameInputForm"
                    value={this.state.journalEntry}
                    placeholder="type entry"
                />

                <button
                    className="submitbutton"
                    type="submit"
                    onClick={this.addToJournalEntry}
                >submit entry<i className="JournalEntryButton" aria-hidden="true"/></button>
            </div>
        )
    }
}

export default JournalEntry;