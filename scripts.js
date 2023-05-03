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

    const growthData = [
                {
                    "Year": "1950",
                    "Value": -5
                },
                {
                    "Year": "1960",
                    "Value": 0
                },
                {
                    "Year": "1970",
                    "Value": 5
                },
                {
                    "Year": "1980",
                    "Value": 10
                },
                {
                    "Year": "2000",
                    "Value": 20
                },
                {
                    "Year": "2010",
                    "Value": 30
                },
                {
                    "Year": "2020",
                    "Value": 40
                },
            ];

// make x Axis with dates
const x = d3.scaleTime()
.domain([0, 2020]) // input data, aka the values above
.range([0, width]);
svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

// make y Axis 
const y = d3.scaleLinear()
.domain([0, 100])
.range([height, 0]);
svg.append("g")
.call(d3.axisLeft(y));

//you can color it
const colorScale = d3.scaleLinear()
.domain([2000, 15000])
.range(["pink", "darkred"]);

svg.append("g")
.selectAll("dot")
.data(growthData)
.enter()
.append("circle")
