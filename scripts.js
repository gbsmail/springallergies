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

            //bring in the data
    d3.csv("")

     // When reading the csv, I must format variables:
     function(d){
        return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
      }).then(
    
      // Now I can use this dataset:
      function(data) {
    

// make x Axis with dates
const x = d3.scaleTime()
.domain(d3.extent(data, function(d) { return d.date; }))
          .range([ 0, width ]);
svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

// make y Axis 
const y = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return +d.value; })])
.range([height, 0]);
svg.append("g")
.call(d3.axisLeft(y));

