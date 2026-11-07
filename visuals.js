"use strict";

// Load the twelve JSON files from the same folder as dashboard.html.
// Each variable and vegaEmbed block follows the tutorial's method.

var visualizationViews = {};

// Remove input controls while keeping the charts' default settings.
function removeDashboardInputs(spec) {
  function visit(value) {
    if (Array.isArray(value)) {
      value.forEach(visit);
    } else if (value && typeof value === "object") {
      if (Array.isArray(value.signals)) {
        value.signals.forEach(function (signal) {
          delete signal.bind;
        });
      }

      Object.keys(value).forEach(function (key) {
        visit(value[key]);
      });
    }
  }

  visit(spec);
  return spec;
}


// 1. Dentist availability choropleth — 2014

var vg_1 = "./choropleth_dental_2014.json";

vegaEmbed("#dentists-2014", vg_1, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["dentists-2014"] = result.view;
}).catch(console.error);


// 2. Dentist availability choropleth — 2024

var vg_2 = "./choropleth_dental_prac.json";

vegaEmbed("#dentists-2024", vg_2, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["dentists-2024"] = result.view;
}).catch(console.error);


// 3. Dentist cartogram

var vg_3 = "./cartogram_dentist.json";

vegaEmbed("#dentist-cartogram", vg_3, {
  mode: "vega",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["dentist-cartogram"] = result.view;
}).catch(console.error);


// 4. Hospitalisation proportional symbol map — 2014–15

var vg_4 = "./proportional_hospitalisation_2014.json";

vegaEmbed("#hospitalisations-2014", vg_4, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["hospitalisations-2014"] = result.view;
}).catch(console.error);


// 5. Hospitalisation proportional symbol map — 2024–25

var vg_5 = "./proportional_hospitalisation.json";

vegaEmbed("#hospitalisations-2024", vg_5, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["hospitalisations-2024"] = result.view;
}).catch(console.error);


// 6. Hospitalisation heatmap

var vg_6 = "./heatmap_hospitalisation.json";

vegaEmbed("#hospitalisation-heatmap", vg_6, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["hospitalisation-heatmap"] = result.view;
}).catch(console.error);


// 7. Dental procedure treemap

var vg_7 = "./treemap_dental_procedure.json";

vegaEmbed("#dental-treemap", vg_7, {
  mode: "vega",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["dental-treemap"] = result.view;
}).catch(console.error);


// 8. CDBS service-mix donut map

var vg_8 = "./donut_map.json";

vegaEmbed("#cdbs-donut-map", vg_8, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["cdbs-donut-map"] = result.view;
}).catch(console.error);


// 9. Preventive and restorative services scatterplot

var vg_9 = "./scatterplot_prevent&restore.json";

vegaEmbed("#cdbs-scatterplot", vg_9, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["cdbs-scatterplot"] = result.view;
}).catch(console.error);


// 10. CDBS service breakdown Sankey diagram

var vg_10 = "./sankey_cdbs.json";

vegaEmbed("#cdbs-sankey", vg_10, {
  mode: "vega",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["cdbs-sankey"] = result.view;
}).catch(console.error);


// 11. Dental access parallel coordinates plot

var vg_11 = "./parallel_coordinate_dental_access.json";

vegaEmbed("#dental-access", vg_11, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["dental-access"] = result.view;
}).catch(console.error);


// 12. Dental visit frequency stacked bar chart

var vg_12 = "./stackedbar_visit.json";

vegaEmbed("#dental-visit-frequency", vg_12, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false,
  config: {
    font: "Arial",
    text: { font: "Arial" },
    axis: { labelFont: "Arial", titleFont: "Arial" },
    legend: { labelFont: "Arial", titleFont: "Arial" },
    title: { font: "Arial", subtitleFont: "Arial" }
  },
  patch: removeDashboardInputs
}).then(function (result) {
  visualizationViews["dental-visit-frequency"] = result.view;
}).catch(console.error);