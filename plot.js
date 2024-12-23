// Set the dimensions of the SVG
const width = 960;
const height = 600;

// Create an SVG element
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

// Define a projection and path generator
// https://en.wikipedia.org/wiki/Mercator_projection
const projection = d3.geoMercator()
    .scale(150)
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// Load and process the TopoJSON data
d3.json("https://d3js.org/world-110m.v1.json").then(function(world) {
    // Convert TopoJSON to GeoJSON
    const countries = topojson.feature(world, world.objects.countries).features;

    // Draw the countries
    svg.selectAll("path")
        .data(countries)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("stroke", "#333")
        .attr("stroke-width", 0.5);
}).catch(function(error) {
    console.error('Error loading or processing data:', error);
});
