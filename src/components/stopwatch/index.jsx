import React from "react"
import "./stopwatch.css"

class StopWatch extends React.Component{

    state = {
        nanosecond:0,
        second:0,
        minute:0
    }

    nanoSecondId = null;
    secondId = null;
    minuteId = null;

    StartTimer = () => {
        // Nano Second
        if ( this.state.nanosecond < 10 && !this.nanoSecondId ){
            this.nanoSecondId = setInterval(() => {
                if ( this.state.nanosecond < 10 ) {
                    this.setState({
                        nanosecond: this.state.nanosecond + 1
                    })
                }else{
                    this.setState({
                        nanosecond: 0
                    }) 
                } 
            }, 100);
        }
        // Second
        if ( this.state.second < 60 && !this.secondId ){
            this.secondId = setInterval(() => {
                if ( this.state.second < 60 ) {
                    this.setState({
                        second: this.state.second + 1
                    })
                }else{
                    this.setState({
                        second: 0
                    }) 
                }
            }, 1000);
        }
        // Minute
        if ( !this.minuteId ){
            this.minuteId = setInterval(() => {
                this.setState({
                    minute: this.state.minute + 1
                })
            }, 60000);
        }
    }

    StopTimer = () => {
        clearInterval(this.nanoSecondId)
        clearInterval(this.secondId)
        clearInterval(this.minuteId)
        this.nanoSecondId = null;
        this.secondId = null;
        this.minuteId = null;
    }

    ResetTimer = () => {
        clearInterval(this.nanoSecondId)
        clearInterval(this.secondId)
        clearInterval(this.minuteId)
        this.nanoSecondId = null;
        this.secondId = null;
        this.minuteId = null;
        this.setState({
            nanosecond:0,
            second:0,
            minute:0
        })
    }

    render() {
        const s_nanosecond = this.state.nanosecond > 9 ? this.state.nanosecond :  "0" + this.state.nanosecond;
        const s_second = this.state.second > 9 ? this.state.second :  "0" + this.state.second;
        const s_minute = this.state.minute > 9 ? this.state.minute :  "0" + this.state.minute;
        return (
            <div>
               <div className="container">
                    <h1 className="title">Stop Watch</h1>
                    <div className="card">
                        <div className="timer">
                            <span className="minute">{s_minute}</span>:
                            <span className="second">{s_second}</span>:
                            <span className="nanosecond">{s_nanosecond}</span>
                        </div>
                        <div className="controler">
                            <button className="Btn" onClick={this.StartTimer}>Start</button>
                            <button className="Btn" onClick={this.StopTimer}>Stop</button>
                            <button className="Btn" onClick={this.ResetTimer}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default StopWatch;