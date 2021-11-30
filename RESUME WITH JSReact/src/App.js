import './App.css';
import React from 'react';
import Info from './Component/Info';
import Qual from './Component/Qualification';
import Skills from './Component/Skills';
import Proj from './Component/Project';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      "name":"Marcelo",
      "addr":"bangalore-59",
      "phno":9611907995,
      "email":"marceloisonmars@gmail.com",
      "qual":[
        {
          "college":"RVCE",
          "university":"VTU",
          "percent":71.3,
          "yoj":2020
        },
        {
          "college":"S.Nijjaplingappas KLE College",
          "university":"Bangalore university",
          "percent":79.9,
          "yoj":2017
        },
        {
          "college":"Sarvodaya Natonal Public School",
          "university":"ICSE",
          "percent":76.8,
          "yoj":2016
        },
        {
          "college":"Venus Public School",
          "university":"ICSE",
          "percent":89,
          "yoj":2015
        }

      ],
      "lang":"Embedded C, C++, Python, Javascript",
      "os":"Windows, Linux",
      "database":"MySQL, MongoDB",
      "tech":"MS Office,Libre Office,Github.com/MarceloShuthub",
      "proj":[
        {
          "pname":"Encoder Decoder",
          "ptech":"Python IDLE",
          "desc":"ENCRYPTION AND DECRYPTION USING A PRIVATE KEY"
        },
        {
          "pname":"Calories Burnt Predictor",
          "ptech":"Machine learning",
          "desc":"PREDICTS CALORIES BURNT USING EXCERSISE AND CALORIE INTAKE DATASETS FROM KAGGLE"
        }
      ]
    }
  }
  render(){
    return(
      <React.Fragment>
        <Info
            name={this.state.name}
            addr={this.state.addr}
            phno={this.state.phno}
            email={this.state.email}
        />
        <Qual
            qual={this.state.qual}
        />
        <Skills
            lang={this.state.lang}
            os={this.state.os}
            database={this.state.database}
            tech={this.state.tech}
        />
        <Proj
          proj={this.state.proj}
        />

      </React.Fragment>
    );
  }

}

export default App;

