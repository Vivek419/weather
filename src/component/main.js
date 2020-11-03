import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import InputBase from '@material-ui/core/InputBase';
import { Filter, FilterR } from './redux/action'




class main extends Component {
  state = {
    input: "",
    get: false,
    city: ""
  }

  change(e) {
    let val = e.target.value;
    console.log(val)
    this.setState({ input: val })

  }
  handle(e) {
    let val = e
    console.log("vvvv", val)
    this.props.dispatch(Filter(val))
  }
  button(e) {
    let val = e.woeid
    this.setState({ city: e.title })
    console.log(val)
    this.props.dispatch(FilterR(val))
  }



  render() {

    return (
      <>
        <div>

          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" style={{ marginRight: "2px" }} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Weather Forcast
          </Typography>

              <InputBase
                placeholder="Search…"
                name="userInput"
                inputProps={{ 'aria-label': 'search' }} style={{ marginLeft: "60%", paddingLeft: "1%", borderRadius: "5px", backgroundColor: "white" }}
                onChange={(e) => this.change(e)}
              />
              <IconButton aria-label="search" color="inherit" >
                <SearchIcon style={{ justifySelf: "center", alignSelf: "center", flex: "center" }} onClick={() => this.handle(this.state.input)} />
              </IconButton>

            </Toolbar>
          </AppBar>
          <h2 style={{ marginLeft: "10px" }}>CITY RECORD</h2>
          <TableContainer component={Paper} style={{ maxWidth: "95%", marginTop: "20px", marginLeft: "10px" }}>

            <Table style={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "red" }}>
                  <TableCell><b>City Name</b></TableCell>
                  <TableCell align="right"><b>Location Type</b></TableCell>
                  <TableCell align="right"><b>woeid</b></TableCell>
                  <TableCell align="right"><b>Latt. & Long.</b></TableCell>
                  <TableCell align="right"><b>Check Weather Details</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.data.Wdata.map((row) => (
                  <TableRow >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.location_type}</TableCell>
                    <TableCell align="right">{row.woeid}</TableCell>
                    <TableCell align="right">{row.latt_long}</TableCell>
                    <TableCell align="right"><Button variant="contained" color="primary" onClick={() => { this.button(row); this.setState({ get: true }) }}>Check
</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
        {this.state.get ?
          <div >

            <h2 style={{ marginLeft: "10px" }}>5 Days Weather Report of&nbsp;<i>"{this.state.city}"</i></h2>
            <TableContainer component={Paper} style={{ maxWidth: "95%", marginTop: "20px", marginLeft: "10px" }}>
              <Table style={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "red" }}>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell align="right"><b>Max Temp</b></TableCell>
                    <TableCell align="right"><b>Max Temp</b></TableCell>
                    <TableCell align="right"><b>Temp</b></TableCell>
                    <TableCell align="right"><b>Weather State Name</b></TableCell>
                    <TableCell align="right"><b>Weather State Abbr</b></TableCell>
                    <TableCell align="right"><b>Humidity</b></TableCell>
                    <TableCell align="right"><b>Wind Speed</b></TableCell>
                    <TableCell align="right"><b>Wind Direction Compass</b></TableCell>
                    <TableCell align="right"><b>Air Pressure</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.data.consolidated_weather.slice(0, 5).map((row) => (
                    <TableRow >
                      <TableCell component="th" scope="row">
                        {row.applicable_date}
                      </TableCell>
                      <TableCell align="right">{row.max_temp.toFixed(2)}℃</TableCell>
                      <TableCell align="right">{row.min_temp.toFixed(2)}℃</TableCell>
                      <TableCell align="right">{row.the_temp.toFixed(2)}℃</TableCell>
                      <TableCell align="right">{row.weather_state_name}</TableCell>
                      <TableCell align="right">{row.weather_state_abbr}</TableCell>
                      <TableCell align="right">{row.humidity}%</TableCell>
                      <TableCell align="right">{row.wind_speed.toFixed(2)}</TableCell>
                      <TableCell align="right">{row.wind_direction_compass}</TableCell>
                      <TableCell align="right">{row.air_pressure}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </div>
          : null}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state

  };
}
export default connect(mapStateToProps)(main);

