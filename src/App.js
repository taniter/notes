import React, { Component } from 'react';
import './App.css'
import { DBnotes } from './DatabaseConnection/Firebase'
import Input from './DatabaseConnection/Input';
import InputName from './DatabaseConnection/InputName';
import Item_Notes from './DatabaseConnection/Item_Notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stt: 0
    }
  }
  componentWillMount() {
    const name = localStorage.getItem("notes_name");
    if (name) {
      this.name = name
      this.setState({
        stt: 1
      });
    }
    else {
      this.setState({
        stt: 0
      });
    }
    DBnotes.on("value", (value) => {
      if (value.val())
        this.setState({
          notes: value
        });
    })
  }
  onChangeInput = (content) => {
    this.setState({
      content: content
    });
  }
  onSendClick = () => {
    if (this.state.content) {
      const date = new Date();
      const temp = ({
        content: this.state.content.content,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
        name: this.name
      })
      DBnotes.push(temp);
    }
  }
  render_data = () => {
    if (this.state.notes) {
      const lst = [];
      lst.splice(0);
      this.state.notes.forEach(item => {
        lst.push(item);
      })
      return (
        lst.map((i, key) => {
          return (
            <Item_Notes onDeleteClick={this.onDeleteClick} value={i} key={key}></Item_Notes>
          )
        })
      )
    }
    else
      return (null)
  }
  onDeleteClick = (key) => {
    DBnotes.child(key).remove((key)=>{
    })

  }
  render_main = () => {
    if (this.state.stt)
      return (
        <div className="container">
          <div className="list_notes">
            <div className={this.state.notes ? "d-none" : "loading"}>
              <div className="spinner-grow text-muted"></div>
              <div className="spinner-grow text-primary"></div>
              <div className="spinner-grow text-success"></div>
              <div className="spinner-grow text-info"></div>
              <div className="spinner-grow text-warning"></div>
              <div className="spinner-grow text-danger"></div>
              <div className="spinner-grow text-secondary"></div>
              <div className="spinner-grow text-dark"></div>
              <div className="spinner-grow text-light"></div>
            </div>
            {this.render_data()}
          </div>
          <Input
            onSendClick={this.onSendClick}
            onChangeInput={this.onChangeInput}
          ></Input>
        </div>
      )
    else
      return (null)
  }
  onNameInput = (name) => {
    if (name) {
      this.setState({
        name: name
      });
    }
  }
  onSaveNameClick = () => {
    if (this.state.name) {
      localStorage.setItem("notes_name", this.state.name.content);
      this.setState({ stt: 1 });
    }
  }
  render_name_input = () => {
    if (!this.state.stt)
      return (
        <InputName
          onSaveNameClick={this.onSaveNameClick}
          onNameInput={this.onNameInput}
        ></InputName>
      )
    else
      return (null)
  }
  render() {
    return (
      <div className="App">
        <this.render_main></this.render_main>
        <this.render_name_input></this.render_name_input>
      </div >
    );
  }
}

export default App;