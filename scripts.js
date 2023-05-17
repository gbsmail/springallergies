// Fetch the data from the JSON file or use it directly in your JavaScript code
const data = [
        {
          "Year": 1895,
          "Spring Thaw": 0.263333333,
          "Fall Frost": -3.618333333
        },
        {
          "Year": 1896,
          "Spring Thaw": 0.587575758,
          "Fall Frost": -3.667575758
        },
        {
          "Year": 1897,
          "Spring Thaw": 0.749090909,
          "Fall Frost": -3.602272727
        },
        {
          "Year": 1898,
          "Spring Thaw": 1.122424242,
          "Fall Frost": -3.675151515
        },
        {
          "Year": 1899,
          "Spring Thaw": 1.333030303,
          "Fall Frost": -3.504393939
        },
        {
          "Year": 1900,
          "Spring Thaw": 1.232727273,
          "Fall Frost": -3.104545455
        },
        {
          "Year": 1901,
          "Spring Thaw": 1.267272727,
          "Fall Frost": -2.713636364
        },
        {
          "Year": 1902,
          "Spring Thaw": 2.715454545,
          "Fall Frost": -2.469090909
        },
        {
          "Year": 1903,
          "Spring Thaw": 2.781818182,
          "Fall Frost": -3.157272727
        },
        {
          "Year": 1904,
          "Spring Thaw": 3.255454545,
          "Fall Frost": -3.211818182
        },
        {
          "Year": 1905,
          "Spring Thaw": 3.781818182,
          "Fall Frost": -2.583636364
        },
        {
          "Year": 1906,
          "Spring Thaw": 3.779090909,
          "Fall Frost": -2.953636364
        },
        {
          "Year": 1907,
          "Spring Thaw": 3.454545455,
          "Fall Frost": -2.964545455
        },
        {
          "Year": 1908,
          "Spring Thaw": 3.631818182,
          "Fall Frost": -3.313636364
        },
        {
          "Year": 1909,
          "Spring Thaw": 3.48,
          "Fall Frost": -2.733636364
        },
        {
          "Year": 1910,
          "Spring Thaw": 3.61,
          "Fall Frost": -2.788181818
        },
        {
          "Year": 1911,
          "Spring Thaw": 4.01,
          "Fall Frost": -3.686363636
        },
        {
          "Year": 1912,
          "Spring Thaw": 4.289090909,
          "Fall Frost": -4.067272727
        },
        {
          "Year": 1913,
          "Spring Thaw": 3.494545455,
          "Fall Frost": -3.887272727
        },
        {
          "Year": 1914,
          "Spring Thaw": 3.285454545,
          "Fall Frost": -3.027272727
        },
        {
          "Year": 1915,
          "Spring Thaw": 3.527272727,
          "Fall Frost": -2.668181818
        },
        {
          "Year": 1916,
          "Spring Thaw": 3.158181818,
          "Fall Frost": -2.598181818
        },
        {
          "Year": 1917,
          "Spring Thaw": 2.757272727,
          "Fall Frost": -2.110909091
        },
        {
          "Year": 1918,
          "Spring Thaw": 3.275454545,
          "Fall Frost": -1.790909091
        },
        {
          "Year": 1919,
          "Spring Thaw": 3.472727273,
          "Fall Frost": -1.311818182
        },
        {
          "Year": 1920,
          "Spring Thaw": 3.408181818,
          "Fall Frost": -1.852727273
        },
        {
          "Year": 1921,
          "Spring Thaw": 3.257272727,
          "Fall Frost": -1.890909091
        },
        {
          "Year": 1922,
          "Spring Thaw": 2.977272727,
          "Fall Frost": -0.839090909
        },
        {
          "Year": 1923,
          "Spring Thaw": 2.540909091,
          "Fall Frost": -0.238181818
        },
        {
          "Year": 1924,
          "Spring Thaw": 2.409090909,
          "Fall Frost": -0.389090909
        },
        {
          "Year": 1925,
          "Spring Thaw": 2.598181818,
          "Fall Frost": -0.810909091
        },
        {
          "Year": 1926,
          "Spring Thaw": 2.247272727,
          "Fall Frost": 0.081818182
        },
        {
          "Year": 1927,
          "Spring Thaw": 2.274545455,
          "Fall Frost": -0.076363636
        },
        {
          "Year": 1928,
          "Spring Thaw": 2.336363636,
          "Fall Frost": -0.136363636
        },
        {
          "Year": 1929,
          "Spring Thaw": 1.710909091,
          "Fall Frost": -0.111818182
        },
        {
          "Year": 1930,
          "Spring Thaw": 1.037272727,
          "Fall Frost": -0.428181818
        },
        {
          "Year": 1931,
          "Spring Thaw": 0.784545455,
          "Fall Frost": 0.042727273
        },
        {
          "Year": 1932,
          "Spring Thaw": 0.453636364,
          "Fall Frost": 0.041818182
        },
        {
          "Year": 1933,
          "Spring Thaw": 0.376363636,
          "Fall Frost": 0.030909091
        },
        {
          "Year": 1934,
          "Spring Thaw": -0.019090909,
          "Fall Frost": 0.170909091
        },
        {
          "Year": 1935,
          "Spring Thaw": 0.154545455,
          "Fall Frost": 0.630909091
        },
        {
          "Year": 1936,
          "Spring Thaw": -0.595454545,
          "Fall Frost": 1.061818182
        },
        {
          "Year": 1937,
          "Spring Thaw": -0.924545455,
          "Fall Frost": -0.305454545
        },
        {
          "Year": 1938,
          "Spring Thaw": -0.811818182,
          "Fall Frost": -0.532727273
        },
        {
          "Year": 1939,
          "Spring Thaw": -0.318181818,
          "Fall Frost": -0.39
        },
        {
          "Year": 1940,
          "Spring Thaw": -0.141818182,
          "Fall Frost": -0.698181818
        },
        {
          "Year": 1941,
          "Spring Thaw": -0.225454545,
          "Fall Frost": -0.113636364
        },
        {
          "Year": 1942,
          "Spring Thaw": 0.368181818,
          "Fall Frost": 0.115454545
        },
        {
          "Year": 1943,
          "Spring Thaw": 0.18,
          "Fall Frost": 0.416363636
        },
        {
          "Year": 1944,
          "Spring Thaw": 0.029090909,
          "Fall Frost": 0.022727273
        },
        {
          "Year": 1945,
          "Spring Thaw": 0.683636364,
          "Fall Frost": 0.201818182
        },
        {
          "Year": 1946,
          "Spring Thaw": 0.578181818,
          "Fall Frost": -0.295454545
        },
        {
          "Year": 1947,
          "Spring Thaw": 0.907272727,
          "Fall Frost": -1.025454545
        },
        {
          "Year": 1948,
          "Spring Thaw": 1.173636364,
          "Fall Frost": -0.490909091
        },
        {
          "Year": 1949,
          "Spring Thaw": 1.307272727,
          "Fall Frost": -0.136363636
        },
        {
          "Year": 1950,
          "Spring Thaw": 0.946363636,
          "Fall Frost": -0.722727273
        },
        {
          "Year": 1951,
          "Spring Thaw": 1.230909091,
          "Fall Frost": -0.5
        },
        {
          "Year": 1952,
          "Spring Thaw": 1.257272727,
          "Fall Frost": -0.827272727
        },
        {
          "Year": 1953,
          "Spring Thaw": 0.563636364,
          "Fall Frost": -1.093636364
        },
        {
          "Year": 1954,
          "Spring Thaw": 0.741818182,
          "Fall Frost": -1.356363636
        },
        {
          "Year": 1955,
          "Spring Thaw": 1.193636364,
          "Fall Frost": -1.02
        },
        {
          "Year": 1956,
          "Spring Thaw": 0.685454545,
          "Fall Frost": -1.31
        },
        {
          "Year": 1957,
          "Spring Thaw": 0.517272727,
          "Fall Frost": -1.040909091
        },
        {
          "Year": 1958,
          "Spring Thaw": 1.090909091,
          "Fall Frost": -0.043636364
        },
        {
          "Year": 1959,
          "Spring Thaw": 0.98,
          "Fall Frost": -0.650909091
        },
        {
          "Year": 1960,
          "Spring Thaw": 0.637272727,
          "Fall Frost": -0.845454545
        },
        {
          "Year": 1961,
          "Spring Thaw": 1.376363636,
          "Fall Frost": -0.925454545
        },
        {
          "Year": 1962,
          "Spring Thaw": 1.188181818,
          "Fall Frost": -0.878181818
        },
        {
          "Year": 1963,
          "Spring Thaw": 1.686363636,
          "Fall Frost": -0.705454545
        },
        {
          "Year": 1964,
          "Spring Thaw": 1.984545455,
          "Fall Frost": -0.761818182
        },
        {
          "Year": 1965,
          "Spring Thaw": 2.045454545,
          "Fall Frost": -0.733636364
        },
        {
          "Year": 1966,
          "Spring Thaw": 2.232727273,
          "Fall Frost": -0.537272727
        },
        {
          "Year": 1967,
          "Spring Thaw": 2.278181818,
          "Fall Frost": -0.326363636
        },
        {
          "Year": 1968,
          "Spring Thaw": 2.544545455,
          "Fall Frost": 0.151818182
        },
        {
          "Year": 1969,
          "Spring Thaw": 2.188181818,
          "Fall Frost": -1.184545455
        },
        {
          "Year": 1970,
          "Spring Thaw": 2.046363636,
          "Fall Frost": -0.804545455
        },
        {
          "Year": 1971,
          "Spring Thaw": 2.287272727,
          "Fall Frost": -1.029090909
        },
        {
          "Year": 1972,
          "Spring Thaw": 1.231818182,
          "Fall Frost": -0.824545455
        },
        {
          "Year": 1973,
          "Spring Thaw": 0.960909091,
          "Fall Frost": -0.739090909
        },
        {
          "Year": 1974,
          "Spring Thaw": 0.560909091,
          "Fall Frost": -0.752727273
        },
        {
          "Year": 1975,
          "Spring Thaw": 0.401818182,
          "Fall Frost": -0.881818182
        },
        {
          "Year": 1976,
          "Spring Thaw": 0.319090909,
          "Fall Frost": -0.781818182
        },
        {
          "Year": 1977,
          "Spring Thaw": -0.248181818,
          "Fall Frost": -1.256363636
        },
        {
          "Year": 1978,
          "Spring Thaw": 0.110909091,
          "Fall Frost": -1.285454545
        },
        {
          "Year": 1979,
          "Spring Thaw": -0.214545455,
          "Fall Frost": -1.829090909
        },
        {
          "Year": 1980,
          "Spring Thaw": -0.787272727,
          "Fall Frost": -1.09
        },
        {
          "Year": 1981,
          "Spring Thaw": -0.765454545,
          "Fall Frost": -0.57
        },
        {
          "Year": 1982,
          "Spring Thaw": -1.595454545,
          "Fall Frost": -0.334545455
        },
        {
          "Year": 1983,
          "Spring Thaw": -1.224545455,
          "Fall Frost": -0.073636364
        },
        {
          "Year": 1984,
          "Spring Thaw": -1.021818182,
          "Fall Frost": -0.634545455
        },
        {
          "Year": 1985,
          "Spring Thaw": -1.227272727,
          "Fall Frost": -0.26
        },
        {
          "Year": 1986,
          "Spring Thaw": -2.019090909,
          "Fall Frost": -0.599090909
        },
        {
          "Year": 1987,
          "Spring Thaw": -2.019090909,
          "Fall Frost": -0.500909091
        },
        {
          "Year": 1988,
          "Spring Thaw": -2.262727273,
          "Fall Frost": -0.87
        },
        {
          "Year": 1989,
          "Spring Thaw": -3.092727273,
          "Fall Frost": -0.041818182
        },
        {
          "Year": 1990,
          "Spring Thaw": -3.453636364,
          "Fall Frost": -0.148181818
        },
        {
          "Year": 1991,
          "Spring Thaw": -2.7,
          "Fall Frost": 0.184545455
        },
        {
          "Year": 1992,
          "Spring Thaw": -2.795454545,
          "Fall Frost": 0.295454545
        },
        {
          "Year": 1993,
          "Spring Thaw": -3.005454545,
          "Fall Frost": 1.571818182
        },
        {
          "Year": 1994,
          "Spring Thaw": -3.671818182,
          "Fall Frost": 1.279090909
        },
        {
          "Year": 1995,
          "Spring Thaw": -4.362727273,
          "Fall Frost": 1.502727273
        },
        {
          "Year": 1996,
          "Spring Thaw": -4.498181818,
          "Fall Frost": 1.362727273
        },
        {
          "Year": 1997,
          "Spring Thaw": -3.401818182,
          "Fall Frost": 2.322727273
        },
        {
          "Year": 1998,
          "Spring Thaw": -3.728181818,
          "Fall Frost": 2.520909091
        },
        {
          "Year": 1999,
          "Spring Thaw": -3.845454545,
          "Fall Frost": 3.663636364
        },
        {
          "Year": 2000,
          "Spring Thaw": -3.832727273,
          "Fall Frost": 3.478181818
        },
        {
          "Year": 2001,
          "Spring Thaw": -3.920909091,
          "Fall Frost": 3.624545455
        },
        {
          "Year": 2002,
          "Spring Thaw": -4.536363636,
          "Fall Frost": 3.837272727
        },
        {
          "Year": 2003,
          "Spring Thaw": -4.279090909,
          "Fall Frost": 3.777272727
        },
        {
          "Year": 2004,
          "Spring Thaw": -3.974545455,
          "Fall Frost": 3.090909091
        },
        {
          "Year": 2005,
          "Spring Thaw": -3.756363636,
          "Fall Frost": 3.683636364
        },
        {
          "Year": 2006,
          "Spring Thaw": -3.603636364,
          "Fall Frost": 4.286363636
        },
        {
          "Year": 2007,
          "Spring Thaw": -4.295454545,
          "Fall Frost": 4.277272727
        },
        {
          "Year": 2008,
          "Spring Thaw": -4.342727273,
          "Fall Frost": 4.281818182
        },
        {
          "Year": 2009,
          "Spring Thaw": -4.005454545,
          "Fall Frost": 4.612727273
        },
        {
          "Year": 2010,
          "Spring Thaw": -4.202727273,
          "Fall Frost": 4.987272727
        },
        {
          "Year": 2011,
          "Spring Thaw": -4.623636364,
          "Fall Frost": 5.604545455
        },
        {
          "Year": 2012,
          "Spring Thaw": -5.045454545,
          "Fall Frost": 6.36
        },
        {
          "Year": 2013,
          "Spring Thaw": -5.09,
          "Fall Frost": 6.241818182
        },
        {
          "Year": 2014,
          "Spring Thaw": -5.698181818,
          "Fall Frost": 6.142727273
        },
        {
          "Year": 2015,
          "Spring Thaw": -5.301818182,
          "Fall Frost": 5.967272727
        },
        {
          "Year": 2016,
          "Spring Thaw": -5.385,
          "Fall Frost": 6.038333333
        },
        {
          "Year": 2017,
          "Spring Thaw": -5.531818182,
          "Fall Frost": 6.416666667
        },
        {
          "Year": 2018,
          "Spring Thaw": -4.990454545,
          "Fall Frost": 6.871363636
        },
        {
          "Year": 2019,
          "Spring Thaw": -5.779090909,
          "Fall Frost": 7.006969697
        },
        {
          "Year": 2020,
          "Spring Thaw": -6.205,
          "Fall Frost": 7.111666667
        }
  ];
  
  // Set the dimensions and margins for the chart
  const margin = { top: 20, right: 30, bottom: 30, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  
  // Parse the year values as dates
  const parseYear = d3.timeParse("%Y");
  
  // Set the ranges for x and y scales
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  
  // Define the line generator
  const line = d3
    .line()
    .x((d) => xScale(parseYear(d.Year)))
    .y((d) => yScale(d["Spring Thaw"]));
  
  // Append an SVG group element to the chart SVG and translate it to accommodate the margins
  const svg = d3
    .select("#chart")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  
  // Convert data to numbers
  data.forEach((d) => {
    d.Year = parseYear(d.Year);
    d["Spring Thaw"] = +d["Spring Thaw"];
  });
  
  // Set the domains for x and y scales
  xScale.domain(d3.extent(data, (d) => d.Year));
  yScale.domain([
    d3.min(data, (d) => d["Spring Thaw"]),
    d3.max(data, (d) => d["Spring Thaw"]),
  ]);
  
  // Add the line to the chart
  svg.append("path").datum(data).attr("d", line);
  
  // Add the x-axis
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale));
  
  // Add the y-axis
  svg.append("g").call(d3.axisLeft(yScale));
  
  // Add chart title
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", 0 - margin.top / 2)
    .attr("text-anchor", "middle")
    .text("Spring Thaw Over the Years");
  
  // Add x-axis label
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .attr("text-anchor", "middle")
    .text("Year");
  
  // Add y-axis label
  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", 0 - height / 2)
    .attr("y", 0 - margin.left)
    .attr("dy", "1em")
    .attr("text-anchor", "middle")
    .text("Temperature (°C)");
  