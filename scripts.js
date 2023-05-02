// SVG+D3 margin convention
const margin = {top: 20, right: 30, bottom: 40, left: 100},
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// boilerplate for setting up the SVG
let svg = d3.select("#dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Read the data
d3.csv({"", function(data)});

  // group the data: I want to draw one line per group
  var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
    .key(function(d) { return d.name;})
    .entries(data);

// to make a scaleLinear bar chart for gun 
const xScale = d3.scaleLinear()
.domain([0, 15000]) // input data, aka the values above
.range([0, width])

// scaleBand
const yScale = d3.scaleBand()
.domain(gunData.map(d => d.Country))
.range([height, 0])

//you can color it
const colorScale = d3.scaleLinear()
.domain([2000, 15000])
.range(["pink", "darkred"])

// use d3 to draw axes based on the scales
// svg.append("g").call(d3.axisBottom(xScale))

svg.selectAll("rect")
.data(gunData)
.join("rect") 
.attr("x", xScale(0)) // start at zero for a bar chart
.attr("y", (d) => { return yScale(d.Country)}) 
.attr("width", (d) => {return xScale(d.Value)} )
.attr("height", yScale.bandwidth() - 2) // how big each individual space is

// make an axis and labeling now 
svg.append("g").call(d3.axisLeft(yScale)) // "g" lets you append a whole group
svg.append("g").call(d3.axisBottom(xScale))
.attr("transform", `translate(0,${height})`) // this puts the axis on the bottom


// make a circle/ dot chart 
//const someData = [100000, 250000, 600000, 800000, 950000] for circle chart

// scaleLinear - tell our scale what our min and max is
//const xScale = d3.scaleLinear()
//.domain([0, 1000000]) // input data
//.range([0, width]) // visual display

//can check if things are working in the CONSOLE with this
//console.log(xScale(1000000))

//const circleSizeScale = d3.scaleLinear() 
//.domain([0, 1000000])
//.range([1, 25])

// timeScale - in order for times and dates to work, JS has a specif idea of how it 
//needs to be formatted
//const timeScale = d3.scaleTime()
//.domain([new Date(2022, 0, 1), new Date[2023, 0, 1]]) //year date month
//.range([0, width])

//svg.selectAll("cirle")
//.data(someData)
//.join("circle") 
//.attr("r", (datapoint) => { return circleSizeScale(datapoint)}) // the radius - the datapoint returns the circle size (datapoint)
//.attr("cx", (d) => { return xScale(d)}) // the coordinate x of the circle