Challenge.
Display a gauge viz using this endpoint
https://widgister.herokuapp.com/challenge/frontend

This is forked from create-react-app

to run use
```sh
`npm install`<br>
`npm start`
```

and for test
```sh
`npm test`
```

The structure is this:

- `index` create Dashboard, that is the core component.
- `Dashboard` here we fetch data, parse it, and update dashboard state.
- `Gauge` is the d3 component. on componentDidMount we create all d3 elements we will need to visualize data ( text, arc, one for background, one with an angle that moves between -pi/2 and pi/2).when data is passed (via props) we prevent any re-render on this component, and in ShouldComponentUpdate we pass the new data to the updateData method.
Here we update the copy and, using d3 interpolate and attrTween we change the arc of the live data.
