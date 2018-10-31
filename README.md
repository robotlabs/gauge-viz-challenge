Challenge.
Display a gauge viz using this endpoint
https://widgister.herokuapp.com/challenge/frontend

forked by create-react-app

so
`npm install`
`npm start`

and for test
`npm test`

The structure is this.

index.
Dashboard.
Gauge.

index create Dashboard, that is the main component. 
Here we fetch data, parse it, and update dashboard state.
this data are passed as props to Gauge Component.

Gauge is the d3 component. on mount creates all the d3 elements we need to visualize (two arc, to visualize data. one background, one with the angle, in percentage between -pi/2 and pi/2, and various text to visualize info)

when data is passed (via props) we prevent any re-render on this component, and in ShouldComponentUpdate we pass the new data to the updateData method.
Here we update the copy and, using d3 interpolate and attrTween we change the arc of the live data.