// Next lesson number 4. Теория. Стилизация компонентов Vladilen

import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Lexus LX', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Porsche', year: '2020'}
    ],
    
    pageTitle: 'React Components',
    showCars: false //Cтавим флаг false для переключения состояния кнопки Toggle cars
  }

  //Функция которая меняет состояние кнопки с false на true
  toggeleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  //Функция смены названия машины
  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars: cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }
  render() {
    const divStyle ={
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '50px auto'
    }

    let cars = null

    // showCars true, показываем список, иначе null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
          return (
            <Car 
            key={index}
            name={car.name}
            year={car.year}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
            />
          )
      } ) 
  }

    return (
      <div style={divStyle}>
        <h1 >{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggeleCarsHandler}// при клике меняем флаг в showCars:  с false на true
        >Toggle cars</button>

        { cars }
      </div>
    );
  }
}
export default App;
